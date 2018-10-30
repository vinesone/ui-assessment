## UI-Assessment

## About

Greetings! Once compiled, this project will run a storybook application
that will showcase the `newsletter-signup-component` and all of it's atomic elements.

## Building Project

Steps to get this project running:

1. [Clone or download this repo.](https://github.com/vinesone/ui-assessment)
2. You will need to install [yarn (install instructions here)](https://yarnpkg.com/en/docs/install) via [brew.](https://brew.sh/)
3. Install project dependencies: by typing: `yarn`
4. Run Project by typing: `yarn run storybook`
5. [Goto local storybook here](http://localhost:9001/)

## Issues

While working on this project: I found a couple of design discrepancies that
impacted the final code. Normally, I would have brought this up with the design team early on: but for the sake of the exercise I coded the exceptions and noted them here.

#### 1. Line breaks in the text above the form inputs:
- The design called for line breaks that don't work in a
standard document flow.
> _**solution:** Created component to force text on two lines_

#### 2. Punctuation inconsistent across screens & break points.
- `Sign up for the TLC newsletter` drops it’s period on the `Tablet Portrait` breakpoint and below.
- Puncation doesn’t drop on `Almost done` message or Congrats
> _**solution:** wrapped `.` in `<span>`to target and control element_

#### 3. Messaging different across states
- `Almost done` messaging is visible on mobile,
but not on Tablet Portrait & then reappears on `Tablet Landscape` and above. On `Tablet portrait` it shows the messaging from the previous email capture screen.
> _**solution:** The fix was to add the state to the outer most container: then show and hide the elements depending on breakpoint, and screen step_

#### 4. No Error states in design
> _**solution:** Input highlight states, and disabled button state_

#### 5. Tablet portrait elements not centered aligned.
> _**solution:** Center aligned elements_

#### 6. Messaging on Congrats page uses camel case, but everywhere else is in capital case. 
> _**solution:** None: coded to spec_
