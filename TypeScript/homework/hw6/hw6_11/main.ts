// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {spades:[], diamonds:[],hearts:[],clubs:[] }
import {ICard} from "../hw6_10/main";

const desk:ICard[] = [
    { cardSuit: 'spade', value: 6, color: 'black'},
    { cardSuit: 'spade', value: 7, color: 'black'},
    { cardSuit: 'spade', value: 8, color: 'black'},
    { cardSuit: 'spade', value: 9, color: 'black'},
    { cardSuit: 'spade', value: 10, color: 'black'},
    { cardSuit: 'spade', value: 'jack', color: 'black'},
    { cardSuit: 'spade', value: 'queen', color: 'black'},
    { cardSuit: 'spade', value: 'king', color: 'black'},
    { cardSuit: 'spade', value: 'ace', color: 'black'},
    { cardSuit: 'diamond', value: 6, color: 'black'},
    { cardSuit: 'diamond', value: 7, color: 'black'},
    { cardSuit: 'diamond', value: 8, color: 'black'},
    { cardSuit: 'diamond', value: 9, color: 'black'},
    { cardSuit: 'diamond', value: 10, color: 'black'},
    { cardSuit: 'diamond', value: 'jack', color: 'black'},
    { cardSuit: 'diamond', value: 'queen', color: 'black'},
    { cardSuit: 'diamond', value: 'king', color: 'black'},
    { cardSuit: 'diamond', value: 'ace', color: 'black'},
    { cardSuit: 'heart', value: 6, color: 'red'},
    { cardSuit: 'heart', value: 7, color: 'red'},
    { cardSuit: 'heart', value: 8, color: 'red'},
    { cardSuit: 'heart', value: 9, color: 'red'},
    { cardSuit: 'heart', value: 10, color: 'red'},
    { cardSuit: 'heart', value: 'jack', color: 'red'},
    { cardSuit: 'heart', value: 'queen', color: 'red'},
    { cardSuit: 'heart', value: 'king', color: 'red'},
    { cardSuit: 'heart', value: 'ace', color: 'red'},
    { cardSuit: 'clubs', value: 6, color: 'red'},
    { cardSuit: 'clubs', value: 7, color: 'red'},
    { cardSuit: 'clubs', value: 8, color: 'red'},
    { cardSuit: 'clubs', value: 9, color: 'red'},
    { cardSuit: 'clubs', value: 10, color: 'red'},
    { cardSuit: 'clubs', value: 'jack', color: 'red'},
    { cardSuit: 'clubs', value: 'queen', color: 'red'},
    { cardSuit: 'clubs', value: 'king', color: 'red'},
    { cardSuit: 'clubs', value: 'ace', color: 'red'},
];
interface IAccum{
    spades:ICard[],
    diamonds:ICard[],
    hearts:ICard[],
    clubs:ICard[]
}
let reduce = desk.reduce((accumulator:IAccum, card:ICard) =>{
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator

}, {spades:[], diamonds:[],hearts:[],clubs:[] });
console.log(reduce);