# -*- coding: iso-8859-1 -*-
import unittest
import printService

class TestPrintService(unittest.TestCase):
  def testInsertChar(self):
    self.assertEqual(printService.insertChar('ort',0,'W'),'Wort')
    self.assertEqual(printService.insertChar('Willibald',5,' '),'Willi bald')    
    self.assertEqual(printService.insertChar('Ich besitze ein Auto',20,'r'),'Ich besitze ein Autor')
    self.assertEqual(printService.insertChar('ÄÖÜ',20,'ß'),'ÄÖÜß')
    self.assertEqual(printService.insertChar('12346',4,'5'),'123456')
  
  def testTrimString(self):
    self.assertEqual(printService.trimString('12345',1),'1')    
    self.assertEqual(printService.trimString('\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf',50),'\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf')
    self.assertEqual(printService.trimString('äöüÄÖÜß',50),'äöüÄÖÜß')
    
  def testAdjustString(self):
    self.assertEqual(printService.adjustString('Den',3,2),'D-en\\\\\\\\')
    self.assertEqual(printService.adjustString('Dene',3,2),'D-e-ne\\\\')
    self.assertEqual(printService.adjustString('Normaler Satz mit gefährlichen deutschen Sonderzeichen!11!',4,20),'Normaler Satz mit gefährlichen deutschen Sonderzeichen!11!\\\\')
    self.assertEqual(printService.adjustString('Satz der viel zu lang ist und abgeschnitte werden muss',1,20),'Satz der viel zu lan\\\\') 
    self.assertEqual(printService.adjustString('',1,1),'\\\\')
    
  def testRemoveUnwantedCharacters(self):
    self.assertEqual(printService.removeUnwantedCharacters('äöüÄÖÜß'),'äöüÄÖÜß')
    self.assertEqual(printService.removeUnwantedCharacters('!?.,;:'),'!?.,;:')
    self.assertEqual(printService.removeUnwantedCharacters('#%_ - /'),'#%_ - /')
    self.assertEqual(printService.removeUnwantedCharacters('\\`+*\"\'{}[]§~'),'')
    self.assertEqual(printService.removeUnwantedCharacters(''),'')
    self.assertEqual(printService.removeUnwantedCharacters(' abc'),' abc')
    
  def testReplaceLatexCharacters(self):
    self.assertEqual(printService.replaceLatexCharacters('Formel5%4&1'),'Formel5\\%4\\&1')
    self.assertEqual(printService.replaceLatexCharacters('#Haschtag'),'\\#Haschtag')
    self.assertEqual(printService.replaceLatexCharacters('_5$'),'\\_5\\$')
    self.assertEqual(printService.replaceLatexCharacters('Fifty Fifry = 50%'),'Fifty Fifry = 50\\%')
                     
#Calling unittest, which does actual Testing
if __name__ == '__main__':
  unittest.main()
