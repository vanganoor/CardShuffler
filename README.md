# CardShuffler
# Implementation of a card shuffler using Javascript

# Steps to run:
Dependency: You need node to run this locally. Go to https://nodejs.org to install the latest stable version.
1) Open Terminal or Command Prompt.
2) Set Path to where File is Located (using cd).
3) Type “node script.js” and Click Enter
4) You should be able to see the output of first random 7 cards generated after the shuffle.

# Code explanation:
In script.js, the symbols and values variables contain the elements of a card.

The first nested for loop is used to create a pack of cards.

We need to create a pack of cards containing each symbol with all the values. So the first for loop iterates over all the symbols and the second for loop iterates over the values. Then, the elements are created and added to the pack array.

The array elements are stored as an object as:
[{Value: "Ace", Symbol: "Spades"},{Value: "2", Symbol: "Spades"}.....]

The second for loop is used to shuffle the pack of cards.

Math.random() generates a random number.

Math.floor() returns the number by decreasing the value to the nearest integer value.

A random number is generated between 0 and 51 and two card positions are swapped.

The third for loop is used to display the first seven cards in the new pack.
