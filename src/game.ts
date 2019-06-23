import TinyTypist from './tinytypist';
import Words from './locales/words';
import { renderWord, renderPuzzleWord, clearAll } from './renders';
import { lettersEn } from './locales/letters';

let tinyTypist: TinyTypist;
let words: Words;

const updateWord = () => renderWord(tinyTypist.word, 'word', ['letter-span']);
const updatePuzzleWord = () => renderPuzzleWord(tinyTypist.guessingWord, 'guessing', ['letter-span', 'letter-span-underline']);

const initializeGame = () => {
    words = new Words();
    newGame();
};

const newGame = () => {
    tinyTypist = new TinyTypist(words.getWord());
    clearAll();
    updateWord();
    updatePuzzleWord();
};

document.onkeypress = (e: KeyboardEvent) => {    
    let charCode = e.charCode || e.which;
    let charString = String.fromCharCode(charCode);
    if (lettersEn.includes(charString.toLowerCase())) {
        processGuess(charString);
    }
};

const processGuess = (letter: string) => {
    if (tinyTypist.guess(letter)) {
        newGame();
    }
    updatePuzzleWord();
};

export { initializeGame, newGame};
