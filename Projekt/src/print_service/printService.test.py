import unittest
import printService

class TestPrintService(unittest.TestCase):
  #Instantiate Object to be tested
  #def setUp(self):
    #self.MittringEmulator = MittringEmulator()
  def testInsertChar(self):
    self.assertEqual(printService.insertChar('ort',0,'W'),'Wort')
    self.assertEqual(printService.insertChar('Willibald',5,' '),'Willi bald')    
    self.assertEqual(printService.insertChar('Ich besitze ein Auto',20,'r'),'Ich besitze ein Autor')
  
  def testTrimString(self):
    #First TestCase, checking if add(3,4) results in 7
    self.assertEqual(printService.trimString('12345',1),'1')    
    self.assertEqual(printService.trimString('\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf',50),'\xfc \xf6 \xe4 \xdf \xc4 \xd6 \xdc \xdf')
    
  def testAdjustString(self):
    #self.assertEqual(printService.adjustString('Hier kommt ein Satz!',4,7),'Hier kommt ein Satz!\\\\')
    self.assertEqual(printService.adjustString('Den',3,2),'D-en\\\\\\\\')
    self.assertEqual(printService.adjustString('Dene',3,2),'D-e-ne\\\\')
    #self.assertEqual(printService.adjustString('Das ist ein langer Satz!',13,3),'Das ist ein langer Satz!\\\\')
    #self.assertEqual(printService.adjustString('Das ist ein langer Satz!',8,7),'Das ist ein langer Satz!')
    
#Calling unittest, which does actual Testing
if __name__ == '__main__':
  unittest.main()
