# lab-03-rock-paper-scissors

HTML 

1) Title of game in a header
2) Explanation of rules in using numbered list
   1) User begins by choosing which option, rock, paper, or scissors they want to play
      * Need to be mutually exclusive
   2) User will then click the submit button to "throw" their choice
      * On click, what happens?
         - Throw the users choice
            - Get the :checked input from the DOM 
   3) Get computer's throw
      * Get a random number from 0, 1, or 2
         - Need a function that converts 0, 1, 2 to rock, paper, scissors


   3) Winner will be chosen based on the most wins out of five "throws"
3) Need three radio buttons for user to select
4) Need button to submit choice (rock, paper, scissors)
5) Display for result of last "throw"
6) Display for number of total wins, losses, and draws
7) Display for who wins based on number of wins in a round


After fifth throw:
   - Disable Throw Button
   - Update winner/loser element
      - Figure who wins
         * Compare wins and losses