/**
 * States - This represents the internal states
 * of the main Newsletter signup form. It manages:
 * • Step number - (applied to parent class)
 * • Text for the CTA
 * • Visibility of React Elements
 *
 * #TODO: Update with Redux store
 */
export const STATES = {
    "EMAIL_COLLECTION": {
      'step': 1,
      'ctaText': 'join the list',
      'emailMessageGroupVisible': true,
      'nameMessageGroupVisible': true,
      'congratsMessageGroupVisible': false,
      'formEmailVisible': true,
      'formFullNameVisible': false
    },
    "EMAIL_ERROR": { },
    "NAME_COLLECTION": {
      'step': 2,
      'ctaText': 'join the list',
      'emailMessageGroupVisible': true,
      'nameMessageGroupVisible': true,
      'congrats MessageGroupVisible': false,
      'formEmailVisible': false,
      'formFullNameVisible': true
    },
    "NAME_ERROR": {},
    "CONGRATS": {
      'step': 3,
      'ctaText': 'congratulations!',
      'emailMessageGroupVisible': false,
      'nameMessageGroupVisible': false,
      'congratsMessageGroupVisible': true,
      'formEmailVisible': false,
      'formFullNameVisible': false
    }
  }
