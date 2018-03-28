import os, io, json, re

def trimString(str, lineLength):
  if len(str)>lineLength:
    return str[:lineLength];
  else:
    return str;


def adjustString(str, maxLines, lineLength):
  length = len(str)
  
  n = lineLength
  usedLines = 0
  while n < length:
    while str[n]!=' ':
      n -=1
    n += lineLength
    usedLines += 1
  
  if usedLines < maxLines:
    maxLength = n
  else:
    maxLength = n - lineLength
  
  
  if length>maxLength:
    return str[:maxLength]+"\\\\";
  else:
    return str + "\\\\" * (maxLines - usedLines);

def removeUnwantedCharacters(s):
  #str = re.sub('[//]','',str)
  #str = re.sub('[\\]','',str)
  s = re.sub(u'[^A-Za-z0-9 {}$&#_%.!? \xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf]','',s)
  return s

def replaceLatexCharacters(str):
  str = str.replace("{","\\{")
  str = str.replace("}","\\}")
  str = str.replace("$","\\$")
  str = str.replace("&","\\&")
  str = str.replace("#","\\#")
  str = str.replace("_","\\_")
  str = str.replace("%","\\%")
  return str;

def renderPDF():
  with open('form.json') as json_data:
    d = json.load(json_data)
  
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
    
  strings = [
    ["primaryDate",11],
    ["primaryTime",5],
    ["primaryHdZ",3],
    ["secondaryDate",11],
    ["secondaryTime",5],
    ["secondaryHdZ",3],
    ["tertiaryDate",11],
    ["tertiaryTime",5],
    ["tertiaryHdZ",3],
    ["numberTB",9],
    ["receiverName",58],
    ["callNumber",15],
    ["address",54],
    ["sender",71],
    ["createTime",35],
    ["identification",17],
    ["position",17],
    ["docketTime",5],
    ["docketIdentification",17],
    ["advisorA",7],
    ["advisorB",7],
    ["advisorC",7],
    ["advisorD",7],
    ["advisorE",7],
    ["connectionA",7],
    ["connectionB",7],
    ["connectionC",7],
    ["connectionD",7],
    ["connectionE",7]
      ]
  
  multiLineStrings = [
    ["content",10,89],
    ["annotations",8,35]]

  VV = ""

  for [str,lineLength] in strings:
    s = d[str]
    s = removeUnwantedCharacters(s)
    s = trimString(s, lineLength)
    s = replaceLatexCharacters(s)
    VV += "\\def \\" + str + "{" + s + "} "
  
  for [str,maxLines,lineLength] in multiLineStrings:
    s = d[str]
    s = removeUnwantedCharacters(s)
    s = adjustString(s,maxLines,lineLength)
    s = replaceLatexCharacters(s)
    VV += "\\def \\" + str + "{" + s + "} "
    
  for str in booleans:
    if d[str]:
      VV += "\\def \\" + str + "{\\checkedbox}"
    else:
      VV += "\\def \\" + str + "{\\uncheckedbox}"
  
  
  #Special Cases
  if d["outgoing"]:
    VV += "\\def \\incoming{\\uncheckedbox}"
  else:
    VV += "\\def \\incoming{\\checkedbox}"
    
  if d["stationS1"]:
    VV += "\\def \\stationSOne{\\checkedbox}"
  else:
    VV += "\\def \\stationSOne{\\uncheckedbox}"
  
  if d["stationS2"]:
    VV += "\\def \\stationSTwo{\\checkedbox}"
  else:
    VV += "\\def \\stationSTwo{\\uncheckedbox}"
    
  if d["stationS3"]:
    VV += "\\def \\stationSThree{\\checkedbox}"
  else:
    VV += "\\def \\stationSThree{\\uncheckedbox}"
  
  if d["stationS4"]:
    VV += "\\def \\stationSFour{\\checkedbox}"
  else:
    VV += "\\def \\stationSFour{\\uncheckedbox}"
    
  if d["stationS6"]:
    VV += "\\def \\stationSSix{\\checkedbox}"
  else:
    VV += "\\def \\stationSSix{\\uncheckedbox}"
  
  with io.open("variables.tex", mode="w", encoding="UTF8") as fd:
    fd.write(VV)
  
  #file = open("variables.tex","w")
  #file.write(VV)
  #file.close()
  
  
  os.system("pdflatex VVtest.tex")
  return;


if __name__ == "__main__":
  renderPDF()
