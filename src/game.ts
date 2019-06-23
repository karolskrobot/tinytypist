import TinyTypist from './tinytypist';
import Words from './locales/words';
import {
    renderWord,
    renderPuzzleWord,
    clearAll,
    renderImage
} from './renders';
import {
    lettersEn
} from './locales/letters';
import getBingImageUrl from './bing-images';

let tinyTypist: TinyTypist;
let words: Words;

const updateWord = () => renderWord(tinyTypist.word, 'word', ['letter-span']);
const updatePuzzleWord = () => renderPuzzleWord(tinyTypist.guessingWord, 'guessing', ['letter-span', 'letter-span-underline']);

const initializeGame = async () => {
    words = new Words();
    addCategoryButtonListeners();
    await newWord();
};

const newWord = async () => {
    const word = words.getWord()
    tinyTypist = new TinyTypist(word);
    clearAll();
    updateWord();
    updatePuzzleWord();
    renderImage('picture', await getBingImageUrl(word, words.categoryName));
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
        newWord();
    }
    updatePuzzleWord();
};

const addCategoryButtonListeners = () => {
    Array.from(document.querySelectorAll('.category')).forEach(el => {
        el.addEventListener('click', e => {
            cleanBorders();
            const target = e.target as Element;
            words.setCategory(target.id);
            newWord();
            target.classList.add('selected');
        })
    })
};

const cleanBorders = () => {
    Array.from(document.querySelectorAll('.category')).forEach(el => {
        el.classList.remove('selected');        
    })
};

export {
    initializeGame,
};