"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cardDesk = [
    { cardSuit: 'spade', value: 6, color: 'black' },
    { cardSuit: 'spade', value: 7, color: 'black' },
    { cardSuit: 'spade', value: 8, color: 'black' },
    { cardSuit: 'spade', value: 9, color: 'black' },
    { cardSuit: 'spade', value: 10, color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 6, color: 'black' },
    { cardSuit: 'diamond', value: 7, color: 'black' },
    { cardSuit: 'diamond', value: 8, color: 'black' },
    { cardSuit: 'diamond', value: 9, color: 'black' },
    { cardSuit: 'diamond', value: 10, color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'black' },
    { cardSuit: 'heart', value: 6, color: 'red' },
    { cardSuit: 'heart', value: 7, color: 'red' },
    { cardSuit: 'heart', value: 8, color: 'red' },
    { cardSuit: 'heart', value: 9, color: 'red' },
    { cardSuit: 'heart', value: 10, color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 6, color: 'red' },
    { cardSuit: 'clubs', value: 7, color: 'red' },
    { cardSuit: 'clubs', value: 8, color: 'red' },
    { cardSuit: 'clubs', value: 9, color: 'red' },
    { cardSuit: 'clubs', value: 10, color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'red' },
];
let diamondAce = cardDesk.find(card => card.cardSuit === 'diamond' && card.value === 'ace');
console.log(diamondAce);
let allSixth = cardDesk.filter(card => card.value === 6);
console.log(allSixth);
let allRed = cardDesk.filter(card => card.color === 'red');
console.log(allRed);
let clubs = cardDesk.filter(card => card.cardSuit === 'clubs');
console.log(clubs);
let spades = cardDesk.filter(card => card.cardSuit === 'spade' && card.value !== 6 && card.value !== 7 && card.value !== 8);
console.log(spades);
