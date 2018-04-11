/**
 * Defines the state mapping.
 * States are being incremented or decremented based on the current state
 * (left side) and the type of action is being applied to the form (reject,
 * accept).
 */
export default {
  reject: {
    1: 2,
    3: 2,
    5: 6,
    7: 6,
    11: 12,
    13: 12
  },
  accept: {
    0: 1,
    1: 3,
    2: 1,
    3: 4,
    4: 5,
    5: 7,
    6: 5,
    7: 8,
    8: 9,
    9: 9,
    10: 11,
    11: 13,
    12: 11,
    13: 14,
    14: 15,
    15: 15
  }
}
