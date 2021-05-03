# Tic_Tac_Toe_Game readme.

Goal 
- To create a Tic Tac Toe game, played by two players on the same
computer.  <a href="https://hpapucha.github.io/Tic-Tac-Toe-JavaScript/">Link Here</a>

Deliverables: 
Bronze MVP: 
- 9 Squares with good width/length using divs
- Red/Blue background colors when clicked using css property.
- Tab with the "current player" label which is updated after every click

Silver MVP: 
- Bronze MVP features + 
- Modified Css properties for the background color
- Hoover animations for the squares
- Responsive design

Gold MVP:
- Silver MVP features +
- Refresh button. 
- Alert with the winning side
- Work out the logic behind the win condition  
- Counter for wins for blue/red

Pseudocode for the full Gold MVP:
- Create a header with the game title
- Create the nine div squares in html and arrange using flex or grid
- Add click event listeners to the divs
- Add red as first click, blue as second in a function
- Change colors to their respected clicks
- Create aside tab with "current player" label which is updated
- Modify the css properties to show div hoover animations
- Modify the CSS, so it is a responsive design
- Modify the css style properties to fitting colors
- Add an array or conditional statements about the win logic. If certain divs have classes of red
or blue in a row or column, printout win condition.
- Add a refresh button which nulls the whole page and requests a new one.
- Popout a win alert box, stating which player won.
- Create two boxes with numbers, which are updated when the page isn't being refreshed
  
User Stories:

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add Red first and then Blue, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or which turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page
- As a user, I should be able to see a counter with wins for Blue and Red

Final Solution Pictures:

![Initial Game](/Images/initial.png)
![Finished Game](/Images/gameDone.png)

Technologies used:
- HTML/CSS/Vanilla JavaScript

Approach and Roadblocks:
- I approached this by using functional structure with mostly if/else statements.
- Style properties were brought down to the minimum, as I wanted to go for more clean look and fewer colors in general.
- Roadblocks included: Setting the innerHTML texts to change, minor issues here and there
with the events and logic. The biggest roadblock, which took 10-15% of the time, was how to
  disable event listeners after the game is done and reset the board.

Possible further development:
- Adding and fixing the current CSS styling to be more presentable for mobile devices.
- Adding an AI feature.
- Adding sounds for when the game is finished or different theme (Star Wars?)





