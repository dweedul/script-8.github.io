import screenTypes from './screenTypes.js'

const lessons = [
  {
    title: "Welcome to SCRIPT-8's lesson mode.",
    shortTitle: 'Introduction',
    slides: [
      {
        text: [
          'We are going to learn how to make games!',
          'Each lesson will introduce a new concept.'
        ]
      },
      {
        text: [
          'We will learn to draw characters and make them move.',
          'We will learn to make worlds for our characters.',
          "Then we'll add enemies and a bit of music, of course."
        ]
      },
      {
        text: [
          "You'll find the list of lessons in HELP.",
          'Click HELP in the top menu.'
        ],
        requirements: {
          screen: screenTypes.HELP
        }
      },
      {
        screen: screenTypes.HELP,
        text: [
          'All the lessons are listed here, at the top.',
          "Alright. That's enough introduction for now.",
          "Let's start!"
        ]
      }
    ]
  },
  {
    title: 'Hello world!',
    slides: [
      {
        text: [
          'In this lesson we will make a cassette that says "Hello world!".',
          'This might not be too exciting, but all good stories start at the beginning.',
          "So let's begin."
        ]
      },
      {
        text: [
          'We need to go to the CODE screen to write our code.',
          'Click CODE in the top menu, and make sure to remove any existing code.'
        ],
        requirements: {
          screen: screenTypes.CODE,
          game: ''
        }
      },
      {
        screen: screenTypes.CODE,
        text: [
          'Enter the following lines:',
          'XXdraw = () => {',
          "XX  print(0, 0, 'Hello world!', 0)",
          'XX}'
        ]
      },
      {
        game: `draw = () => {
  print(0, 0, 'Hello world!', 0)
}`,
        screen: screenTypes.CODE,
        text: [
          'Your first SCRIPT-8 cassette!',
          "You should see 'Hello world!' drawn on the right.",
          "If not it's because you're on a small screen."
        ]
      },
      {
        screen: screenTypes.CODE,
        text: [
          "But that's OK. You can see the cassette full-screen in RUN.",
          "Click RUN now. It might show up as RU if you're on a small screen."
        ],
        requirements: {
          screen: screenTypes.RUN
        }
      },
      {
        text: [
          'This is also what your friends will see when they load your cassette.',
          'Speaking of which, save it! This is, after all, the beginning of your story.',
          'Mouse over CASSETTE, on the menu, and click RECORD.'
        ]
      },
      {
        text: [
          "You'll notice the URL changed.",
          "It's your cassette's URL now.",
          'You can share it with family and friends.'
        ]
      },
      {
        text: [
          "In the next lesson we'll try to understand what we typed here.",
          'It is always good to know what is going on.',
          'Good-bye for now. See you soon!'
        ]
      }
    ]
  },
  {
    title: 'Hello many worlds!',
    slides: [
      {
        text: [
          'In the previous lesson we learned how to draw letters.',
          "Let's try to understand the code a bit. Then we can do more."
        ]
      },
      {
        text: [
          "Let's go over to the CODE screen.",
          'Click CODE in the top menu.',
          'Make sure to remove any existing code.'
        ],
        requirements: {
          screen: screenTypes.CODE,
          game: ''
        }
      },
      {
        screen: screenTypes.CODE,
        text: [
          "Alright. Do you remember the 'Hello world!' code?",
          "Enter it now. It's our starting point.",
          "Don't remember it? That's OK. I'll do it for you. Click NEXT."
        ]
      },
      {
        screen: screenTypes.CODE,
        game: `draw = () => {
  print(0, 0, 'Hello world!', 0)
}`,
        text: [
          "There are two functions here, 'draw' and 'print'.",
          "SCRIPT-8 calls the 'draw' function 60 times per second.",
          "It's a very important function.",
          "It's part of what some call the game loop."
        ]
      },
      {
        screen: screenTypes.CODE,
        game: `draw = () => {
  print(0, 0, 'Hello world!', 0)
}`,
        text: [
          "The other function, 'print', prints text on the screen.",
          'It takes four parameters: x, y, text, and color.',
          'The first two, x and y, can be any integers from 0 to 127.'
        ]
      },
      {
        screen: screenTypes.CODE,
        game: `draw = () => {
  print(0, 0, 'Hello world!', 0)
}`,
        text: [
          "SCRIPT-8's resolution is 128px by 128px.",
          "If you draw something at x = 128, well, that's past the right edge.",
          "So you won't see it."
        ]
      },
      {
        screen: screenTypes.CODE,
        game: `draw = () => {
  print(0, 0, 'Hello world!', 0)
}`,
        text: [
          "In fact, let's try that now. Change the numbers to something else.",
          "And if you're on a small screen, remember to click RUN to see your work."
        ]
      },
      {
        text: [
          'WHAT HAPPENED?!',
          'That is probably not what you expected.',
          'It looks like the text smeared all over itself. Not good.',
          'Go back to CODE so we can fix this.'
        ],
        requirements: {
          screen: screenTypes.CODE
        }
      },
      {
        screen: screenTypes.CODE,
        text: [
          "Remember how SCRIPT-8 calls 'draw' 60 times a second?",
          'That explains this glitch. SCRIPT-8 drew your text multiple times.',
          "But it didn't clear the screen between each draw."
        ]
      },
      {
        screen: screenTypes.CODE,
        text: [
          'SCRIPT-8 drew your texts on top of each other. Like you told it to.',
          "Well. Let's tell it to clear the screen before every draw!"
        ]
      },
      {
        screen: screenTypes.CODE,
        text: [
          "Add 'clear()' at the beginning of your function. Like this:",
          'XXdraw = () => {',
          'XX  clear()',
          "XX  print(8, 8, 'Hello world!', 0)",
          'XX}'
        ]
      },
      {
        screen: screenTypes.CODE,
        text: [
          'And now you can change the x or y, and the text will be drawn fresh every time.',
          'Great.',
          "We still haven't talked about the last parameter: color."
        ]
      },
      {
        text: [
          'It can be any integer from 0 to 7.',
          "That's because there are 8 colors in SCRIPT-8.",
          'Change the color. Experiment. Oh. What happens if you enter... a 9?'
        ]
      },
      {
        text: [
          'It still drew something. Looks like... a 9 is like the color 1.',
          'And 17 is also the color 1. Try it.'
        ]
      },
      {
        text: [
          'So, the color numbers seem to wrap around, in groups of 8.',
          'SCRIPT-8 does this by design. It can be useful in certain situations.',
          'This is also known as modular arithmetic.'
        ]
      },
      {
        text: [
          'This lesson is getting a bit long!',
          'And the title said "Hello many worlds!" but we haven\'t taken care of that.',
          "Can you guess how to fill the screen with 'Hello world!'? I'll do it for you."
        ]
      },
      {
        game: `draw = () => {
  clear()
  print(0, 0, 'Hello world!', 0)
  print(8, 8, 'Hello world!', 1)
  print(16, 16, 'Hello world!', 2)
  print(24, 24, 'Hello world!', 3)
  print(32, 32, 'Hello world!', 4)
  print(40, 40, 'Hello world!', 5)
  print(48, 48, 'Hello world!', 6)
  print(56, 56, 'Hello world!', 5)
  print(64, 64, 'Hello world!', 4)
  print(72, 72, 'Hello world!', 2)
  print(80, 80, 'Hello world!', 1)
  print(88, 88, 'Hello world!', 0)
  print(96, 102, 'Hello world!', 1)
  print(106, 116, 'Hello world!', 2)
}`,
        screen: screenTypes.CODE,
        text: [
          'The last ones are a bit odd. Looks like they wrapped down.',
          "That's because SCRIPT-8 will try to fit your text onto the screen.",
          'This is a handy feature.'
        ]
      },
      {
        text: [
          'OK. We have reached the end. I hope you learned something new.',
          "The next lesson will be about SCRIPT-8's magical number slider.",
          'Are you curious? I would be. See you in the next one!'
        ]
      }
    ]
  },
  {
    title: 'The magical number slider.',
    slides: [
      {
        text: ['Coming soon!']
      }
    ]
  }
]

export default lessons
