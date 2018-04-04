import unittest
from MittringEmulator import MittringEmulator


class TestMittringEmulator(unittest.TestCase):
    # Instantiate Object to be tested
    def setUp(self):
        self.MittringEmulator = MittringEmulator()

    # TestFunction
    def testAdd(self):
        # First TestCase, checking if add(3,4) results in 7
        self.assertEqual(self.MittringEmulator.add(3, 4), 7)
        # checking that add(-1,-1) does not result in 0
        self.assertNotEqual(self.MittringEmulator.add(-1, -1), 0)


# Calling unittest, which does actual Testing
if __name__ == '__main__':
    unittest.main()
