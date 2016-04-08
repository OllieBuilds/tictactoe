# Tic Tac Toe

## Rules

Tic-tac-toe is a game in which two players take turns place their symbol on a
square of the gameboard until three of the same symbol form a line (or the board
is filled). Lines can be formed vertically, horizontally, and diagonally.

Once a line has been formed, a winner is announced and a new game can be
started.

## Instructions for player

Game play begins with Player 1 (X) registering as a new user, or signing in if
they have played previously. This initial screen also allows for Player One to
change their password.

Once Player One has signed in, they may activate a new game. This will then
prompt Player Two to sign in and then join the game. Game play can then begin.

Once a winner has been decided a window will appear anouncing such. Players may
then continue to play new games.

## Technologies Utilized

Created using JS, HTML, and CSS (Scss) to create GUI. A simple table architectue
was utilized to create the game board which was altered via click events to add
or removed css classes.

Used Ajax to communicate with game API, encoding some data as JSON (per api
standards). Jquery was utilized to access and manipulate HTML elements.

## Methodology/Approach

In order to create the simplest data visualization, the game board was stored
as an array with each index (0-8) corresponding to a matching square. This made
creating the logic for the 8 win cases fairly straightforward.

THe front-end was built first using a very simple HTML skeleton and JS. Next the
Ajax calls were implemented in a step-wise fashion. This allowed for in depth
testing and debugging of smaller blocks.

## Challenges

The biggest problem I had developing this app was getting my Ajax call for game
update to work. Turns out, that Player Two's auth token was being returned
slower than the game array was being updated. This required creating two
seperate click events so as to properly time this sequence.

## Areas for Improvment

The GUI/UI leaves much to be desired. While I originally had big plans, the road
blocks I hit prevented me from having the time necessary to make the game look
as I would have liked.

## User Stories

 user story 1: I am about to make a selection on the board, but I want to make
 sure I am selecting the right square.
 Developer: In order to insure transparency and increase user engagement, I will
develop a css :hover property to indicate on which square a users' move will
fall.

 User Story 2: I want to log into this awesome Tic-Tac-Toe app, so that I can
 play.
 Developer: User log-in will be prominently displayed, and mandatory for user
 to play.

 User Story 3: I have been playing this game for a while now, and I can no
 longer remember how many games I have won.
 Developer: A counter for wins (and ties) will be built into the app allowing
 players to track their progress and track their dominance.

 User Story 4: I am having a difficult time seeing the board with the current
 color scheme.
 Developer: Multiple color schemes will be available by utilizing Sass's color
 alterations functions. This is a (relatively) easy feature that will
 dramatically improve the user's experience.

## Could not get color scheme selector to work

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
# olliebuilds.github.io
