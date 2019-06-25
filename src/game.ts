import {TinyTypist, HintState }from './tinytypist';
import Words from './locales/words';
import {    
    renderPuzzleWord,
    renderHintLetter,
    clearAll,
    renderImage
} from './renders';
import {
    lettersEn
} from './locales/letters';
import getBingImageUrl from './bing-images';

let tinyTypist: TinyTypist;
let words: Words;

const updateHintLetter = () => renderHintLetter([tinyTypist.guessingLetter], 'hint-letter-container', ['letter-span']);
const updatePuzzleWord = () => renderPuzzleWord(tinyTypist.guessingWord, 'guessing', ['letter-span', 'letter-span-underline']);

const initializeGame = async () => {
    words = new Words();
    addButtonListeners();
    await newWord();
};

const newWord = async () => {
    const word = words.getWord()
    tinyTypist = new TinyTypist(word);
    clearAll();    
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

const addButtonListeners = () => {
    Array.from(document.querySelectorAll('.category')).forEach(el => {
        el.addEventListener('click', e => {
            cleanBorders();
            const target = e.target as Element;
            words.setCategory(target.id);
            newWord();
            target.classList.add('selected');
        })
    })

    document.getElementById('hint').addEventListener('click', () => {
        if (tinyTypist.hintState === HintState.First || tinyTypist.hintState === HintState.SecondShown) {
            tinyTypist.getAudioHint()

            if(tinyTypist.hintState === HintState.First)
                tinyTypist.hintState = HintState.Second
        }
        else if (tinyTypist.hintState === HintState.Second) {
            updateHintLetter();
            tinyTypist.hintState = HintState.SecondShown;
        }
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