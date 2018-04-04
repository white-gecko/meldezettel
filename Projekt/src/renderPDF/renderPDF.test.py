# -*- coding: iso-8859-1 -*-
import unittest
import renderPDF
import json
import os


class TestPrintService(unittest.TestCase):
    def testInsertChar(self):
        self.assertEqual(renderPDF.insertChar('ort', 0, 'W'), 'Wort')
        self.assertEqual(renderPDF.insertChar(
            'Willibald', 5, ' '),
            'Willi bald')
        self.assertEqual(renderPDF.insertChar('Ich besitze ein Auto', 20, 'r'), 'Ich besitze ein Autor')
        self.assertEqual(renderPDF.insertChar('ÄÖÜ', 20, 'ß'), 'ÄÖÜß')
        self.assertEqual(renderPDF.insertChar('12346', 4, '5'), '123456')

    def testTrimString(self):
        self.assertEqual(renderPDF.trimString('12345', 1), '1')
        self.assertEqual(renderPDF.trimString(
            '\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf', 50),
            '\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf')
        self.assertEqual(renderPDF.trimString('äöüÄÖÜß', 50), 'äöüÄÖÜß')

    def testAdjustString(self):
        self.assertEqual(renderPDF.adjustString('Den', 3, 2), 'D-en\\\\\\\\')
        self.assertEqual(renderPDF.adjustString('Dene', 3, 2), 'D-e-ne\\\\')
        self.assertEqual(renderPDF.adjustString(
            'Normaler Satz mit gefährlichen deutschen Sonderzeichen!11!', 4, 20),
            'Normaler Satz mit gefährlichen deutschen Sonderzeichen!11!\\\\')
        self.assertEqual(renderPDF.adjustString(
            'Satz der viel zu lang ist und abgeschnitte werden muss', 1, 20),
            'Satz der viel zu lan\\\\')
        self.assertEqual(renderPDF.adjustString('', 1, 1), '\\\\')

    def testRemoveUnwantedCharacters(self):
        self.assertEqual(renderPDF.removeUnwantedCharacters('äöüÄÖÜß'), 'äöüÄÖÜß')
        self.assertEqual(renderPDF.removeUnwantedCharacters('!?.,;:'), '!?.,;:')
        self.assertEqual(renderPDF.removeUnwantedCharacters('#%_ - /'), '#%_ - /')
        self.assertEqual(renderPDF.removeUnwantedCharacters('\\`+*\"\'{}[]§~'), '')
        self.assertEqual(renderPDF.removeUnwantedCharacters(''), '')
        self.assertEqual(renderPDF.removeUnwantedCharacters(' abc'), ' abc')

    def testReplaceLatexCharacters(self):
        self.assertEqual(renderPDF.replaceLatexCharacters('Formel5%4&1'), 'Formel5\\%4\\&1')
        self.assertEqual(renderPDF.replaceLatexCharacters('#Haschtag'), '\\#Haschtag')
        self.assertEqual(renderPDF.replaceLatexCharacters('_5$'), '\\_5\\$')
        self.assertEqual(renderPDF.replaceLatexCharacters('Fifty Fifry = 50%'), 'Fifty Fifry = 50\\%')

    def testFormDataStringToVariablesString(self):
        # Changing to current working dir
        os.chdir(os.path.dirname(__file__))
        
        # Opens json file and loads it to dir
        with open("formData.test.json") as json_data:
            formDataDir = json.load(json_data)

        # Opens tex file and loads it to string
        with open("variables.test.tex") as tex:
            variablesString = tex.read()

        self.assertEqual(renderPDF.formDataStringToVariablesString(formDataDir), variablesString)

    """
    def testRenderPDF(self):
        # Opens json file and loads it to dir
        with open("formData.json") as json_data:
            formDataDir = json.load(json_data)

        # Converts dir to string
        formDataString = json.dumps(formDataDir)

        # Opens pdf file and loads it to bytestring
        with open("template.pdf", "rb") as pdf:
            pdfBytes = pdf.read()


        self.assertEqual(renderPDF.renderPDF(formDataString), pdfBytes)
    """


# Calling unittest, which does actual Testing
if __name__ == '__main__':
    unittest.main()
