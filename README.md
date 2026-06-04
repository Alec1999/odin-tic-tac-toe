#odin-tic-tac-toe
A browser based tic-tac-toe game built with HTML, CSS, and JavaScript as part of The Odin Project curriculum.

#Live Demo:
https://alec1999.github.io/odin-tic-tac-toe/

#Features: 

• Two player Tic-Tac-Toe gameplay

• Turn tracking

• Win & tie detection

• Game reset functionality

• Score tracking

• Responsive layout

#What I Learned:

• Factory functions

• Module pattern and IIFEs

• Closures and private state

• Separating game logic from display logic

#Project Structure:

**Game Board**: Stores and manages the current board state.

**Player Factory**: Creates player objects containing player information and markers.

**Game Controller**: Controls game flow

**Display Controller**: Handles DOM updates and user interactions.

#Challenges

One challenge was keeping game state separate from the user interface. Instead of relying on the DOM to determine the board state, the game logic is stored in JavaScript objects and modules. This made the code easier to maintain and reduced bugs.

Another challenge was understanding how modules communicate with one another while still keeping variables private. Using returned methods from IIFEs helped expose only the functionality that needed to be accessed externally.

#Installation

##1. Clone the repository

##2. Open index.html in your browser 