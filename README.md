# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Elias Arghand**

Time spent: **8** hours spent in total

Link to project: https://capricious-chestnut-cave.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Changed the background of the application to a gradient color.
- [x] Changed the styling of the buttons by adding rounded corners.
- [x] Changed the font and color of the text.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://imgur.com/s3elTBA.gif"/>
<img src="https://imgur.com/t6uCe18.gif"/>
<img src="https://imgur.com/oyQekOR.gif"/>
<img src="https://imgur.com/0chmX92.gif"/>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/css/css3_buttons.asp
https://www.w3schools.com/jsref/met_win_setinterval.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The most significant challenge I encountered while creating this game was implementing the ticking clock. My first issue with the ticking clock was being able to use the setInterval and clearInterval functions accordingly to represent an accurate timer each time the game was played. This led to a bug in my game in which the timer was going down faster than the first or second time the game was played. I learned that after each game, I needed to reset my timer variables in order for the clock to remain accurate on each attempt. In order to do this, I made sure to reset my timer variables to their default values inside of my startGame function in order to reset the timer right when the user clicks start. Furthermore, implementing an algorithm for a shortening timer after each correct pattern proved to be difficult as well because it required a significant amount of testing to ensure its functionality. Sometimes, the clock would hit negative values or fail to reset depending on how the user lost the game. The timer had many edge cases in which I had to make sure the timer resets accordingly after the user wins, runs out of guesses, or loses due to time. I overcame this challenge by calling a reset function anytime the game ends to ensure my ticking clock resets even if the page is not refreshed. To ensure functionality of the clock feature, I tested each case of the user winning, losing, and stopping the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Implementing this project in HTML significantly gauged my interest in the specific animations and transitions that can be created with HTML and CSS. After this activity, I wonder how one can create different types of websites with animations, transitions, login pages, etc. Programming the backend also raised the question of whether languages besides JavaScript can be used for implementing backend functions such as Python and Java. I am interested in learning more about how each programming language may differ from each other in writing backend web development functions. I am also interested in learning more about utilizing other frameworks for web development such as React and the difference in designing this web application using that framework. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, the first feature I would try adding is a counter on the front-end to display the amount of mistakes the user has made. Currently, only my backend code supports the three strikes feature, but being able to display the amount of strikes for the user may be beneficial in informing them the number of mistakes they made. I would also try adding different modes to the game for users that may want more of a challenge. For that iteration of the game, I would implement shorter delays as well as a quicker timer to challenge the user. 


## License

    Copyright [Elias Arghand]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
