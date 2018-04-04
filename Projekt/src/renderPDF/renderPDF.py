# -*- coding: iso-8859-1 -*-
import os
import io
import json
import re
import sys
import hashlib
import subprocess
import shutil


# Inserts char into string at given position
def insertChar(string, position, char):
    return string[:position] + char + string[position:]


# Trims string to given length
def trimString(string, lineLength):
    if len(string) > lineLength:
        string = string[:lineLength]

    return string


# Calculates maximum length for multiLineStrings and trims String
def adjustString(string, maxLines, lineLength):
    length = len(string)

    # Calculates where Latex will linebreak
    firstPos = 0
    pos = lineLength
    usedLines = 1

    # Maximum length is calculated
    # By adding up positions of last spacing chars of each line

    # Iterating through each line
    while (pos < length and usedLines < maxLines):

        # Jumping to end of current line and moving backwards
        # until spacing character is found
        # which is either whitespace or hyphen
        while (string[pos] != ' ' and string[pos] != '-' and pos != firstPos):
            pos -= 1

            # Catches corner case where word is longer than linelength
            # By inserting hyphen at last position of line
            # therefore breaking word without attention to hyphenation
        if (pos == firstPos):
            pos += lineLength
            string = insertChar(string, pos-1, '-')
            length += 1

        usedLines += 1
        firstPos = pos
        pos += lineLength

    maxLength = pos

    # Trims String
    # Adding of double backslash necessary
    # because multiLineStrings are single Tabularline in Latex
    if length > maxLength:
        string = string[:maxLength] + "\\\\"
    else:
        # Additional backslashes are necessary
        # to fill Latex Tabular to predefined height
        string = string + "\\\\" * (maxLines - usedLines + 1)

    return string


# Makes use of regex.substitution to remove all characters,
# which are not specified in regex below
def removeUnwantedCharacters(s):
    s = re.sub(u'[^A-Za-z0-9()$&#_ % .:,;!?=äöüÄÖÜß \/ \-]', '', s)
    return s


# Escapes certain characters for latex compliance
def replaceLatexCharacters(str):
    # str = str.replace("{","\\{")
    # str = str.replace("}","\\}")
    str = str.replace("$", "\\$")
    str = str.replace("&", "\\&")
    str = str.replace("#", "\\#")
    str = str.replace("_", "\\_")
    str = str.replace("%", "\\%")
    return str


# Translates formData.json to String that can be used in .tex
def formDataStringToVariablesString(formDataDir):

    # Array of boolean variable names
    booleans = [
        "topRadio",
        "topPhone",
        "topFax",
        "topDFU",
        "topCourier",
        "outgoing",
        "midRadio",
        "midPhone",
        "midFax",
        "midDFU",
        "midCourier",
        "callAnnouncement",
        "callMessage",
        "priorityInstant",
        "priorityFlash",
        "talkNote",
        "stationLeader",
        "advisorTickA",
        "advisorTickB",
        "advisorTickC",
        "advisorTickD",
        "advisorTickE",
        "connectionTickA",
        "connectionTickB",
        "connectionTickC",
        "connectionTickD",
        "connectionTickE"]

    # Array of string variable names and their maximum length in latex template
    strings = [
        ["primaryDate", 11],
        ["primaryTime", 5],
        ["primaryHdZ", 3],
        ["secondaryDate", 11],
        ["secondaryTime", 5],
        ["secondaryHdZ", 3],
        ["tertiaryDate", 11],
        ["tertiaryTime", 5],
        ["tertiaryHdZ", 3],
        ["numberTB", 9],
        ["receiverName", 58],
        ["callNumber", 15],
        ["address", 54],
        ["sender", 71],
        ["createTime", 35],
        ["identification", 17],
        ["position", 17],
        ["docketTime", 5],
        ["docketIdentification", 17],
        ["advisorA", 7],
        ["advisorB", 7],
        ["advisorC", 7],
        ["advisorD", 7],
        ["advisorE", 7],
        ["connectionA", 7],
        ["connectionB", 7],
        ["connectionC", 7],
        ["connectionD", 7],
        ["connectionE", 7]]

    # Array of multiline string variable names, their maximum number of lines
    # and their maximum number of chars per line
    multiLineStrings = [
        ["content", 10, 89],
        ["annotations", 8, 35]]

    # Array of booleans where json variable name and latex variable name
    # are not equal and need translation
    boolInconsistentVariableName = [
        ["stationS1", "stationSOne"],
        ["stationS2", "stationSTwo"],
        ["stationS3", "stationSThree"],
        ["stationS4", "stationSFour"],
        ["stationS6", "stationSSix"]]

    variablesString = ""

    # Translating string variables from json to latex
    for [variableName, lineLength] in strings:
        s = formDataDir[variableName]
        s = removeUnwantedCharacters(s)
        s = trimString(s, lineLength)
        s = replaceLatexCharacters(s)
        variablesString += "\\def \\" + variableName + "{" + s + "} "

    # Translating multiline string variables from json to latex
    for [variableName, maxLines, lineLength] in multiLineStrings:
        s = formDataDir[variableName]
        s = removeUnwantedCharacters(s)
        s = adjustString(s, maxLines, lineLength)
        s = replaceLatexCharacters(s)
        variablesString += "\\def \\" + variableName + "{" + s + "} "

    # Translating boolean variables from json to latex
    for variableName in booleans:
        if formDataDir[variableName]:
            variablesString += "\\def \\" + variableName + "{\\checkedbox}"
        else:
            variablesString += "\\def \\" + variableName + "{\\uncheckedbox}"

    # Translating boolean variables with inconsistent names from json to latex
    for [jsonVariableName, latexVariableName] in boolInconsistentVariableName:
        if formDataDir[jsonVariableName]:
            variablesString += "\\def \\" + latexVariableName + "{\\checkedbox}"
        else:
            variablesString += "\\def \\" + latexVariableName + "{\\uncheckedbox}"

    # Special case where Json has one variable and latex template requires two
    if formDataDir["outgoing"]:
        variablesString += "\\def \\incoming{\\uncheckedbox}"
    else:
        variablesString += "\\def \\incoming{\\checkedbox}"

    return variablesString


# Parses variables and their values from json to latex and writes them to .tex
def renderPDF(formDataString):
    # Interpreting formDataString as Dir
    formDataDir = json.loads(formDataString)

    variablesString = formDataStringToVariablesString(formDataDir)

    # Hashing formDataString to get unique name for working dir
    m = hashlib.md5()
    m.update(formDataString.encode('ascii', 'UTF8'))
    formDataStringHash = m.hexdigest()

    # Changing to current working dir
    os.chdir(os.path.dirname(__file__))

    # Copy files to working dir
    os.mkdir(formDataStringHash)
    shutil.copy2("template.tex", os.path.join(formDataStringHash, "template.tex"))
    shutil.copy2("template.aux", os.path.join(formDataStringHash, "template.aux"))
    shutil.copy2("template.log", os.path.join(formDataStringHash, "template.log"))

    # Changing to working dir
    os.chdir(formDataStringHash)

    # Writing generated string to .tex
    with io.open("variables.tex", mode="w", encoding="UTF8") as fd:
        fd.write(variablesString)

    # Compiling pdf, via synchronous call
    p = subprocess.check_call(['pdflatex', '-halt-on-error', 'template.tex'])

    # Reading pdf as byteString
    with open("template.pdf", "rb") as pdf:
        pdfBytes = pdf.read()

    # Removing working dir
    os.chdir("../")
    shutil.rmtree(formDataStringHash)

    return pdfBytes


"""
if __name__ == "__main__":
    # Opens json file and loads it to dir
    with open("formData.json") as json_data:
        formDataDir = json.load(json_data)

    formDataString = json.dumps(formDataDir)

    renderPDF(formDataString)
"""
