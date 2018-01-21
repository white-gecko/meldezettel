import unittest 
from Projekt.MittringEmulator import MittringEmulator

class TestMittringEmulator(unittest.TestCase):  
    def setUp(self):
        self.MittringEmulator = MittringEmulator()
        
    def testAdd(self):
        self.assertEqual(self.MittringEmulator.add(3,4),7)
        self.assertNotEqual(self.MittringEmulator.add(-1,-1),0)
            
if __name__ == '__main__':
    unittest.main()
