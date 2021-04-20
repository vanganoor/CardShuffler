// declare card elements
const symbols = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let pack = [];

// create a pack of cards
for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < values.length; j++) {
        let card = { Value: values[j], symbol: symbols[i] };
        pack.push(card);
    }
}

// shuffle the cards
for (let i = pack.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = pack[i];
    pack[i] = pack[j];
    pack[j] = temp;
}

console.log('After the Shuffle, the first seven cards are: ');

// display 7 results
for (let i = 0; i < 7; i++) {
    console.log(`${pack[i].Value} of ${pack[i].symbol}`)
}