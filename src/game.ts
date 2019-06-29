import {TinyTypist, HintState }from './tinytypist';
import Words from './locales/words';
import {    
    renderPuzzleWord,
    renderHintLetter,
    clearAll,
    renderImage,
    setTheme,
    renderPersonImage
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
    if (words.categoryName === 'people') {
        renderImage('picture', await renderPersonImage(word));
    }
    else {
        renderImage('picture', await getBingImageUrl(word, words.categoryName));
    }    
};

document.onkeypress = (e: KeyboardEvent) => {
    let charCode = e.charCode || e.which;
    let charString = String.fromCharCode(charCode);
    if (lettersEn.includes(charString.toLowerCase())) {
        processGuess(charString);
    }
};

const processGuess = async (letter: string) => {
    if (tinyTypist.guess(letter)) {
        newWord();        
    }
    updatePuzzleWord();
};

const addButtonListeners = () => {
    Array.from(document.querySelectorAll('.category')).forEach(el => {
        el.addEventListener('click', e => {
            cleanBorders('.category');
            const target = e.target as Element;
            words.setCategory(target.id);
            newWord();
            target.classList.add('selected');
        })
    })

    Array.from(document.querySelectorAll('.color')).forEach(el => {
        el.addEventListener('click', e => {
            cleanBorders('.color');
            const target = e.target as Element;
            target.classList.add('selected');
            setTheme(target.id);            
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

const cleanBorders = (buttonClass: string) => {
    Array.from(document.querySelectorAll(buttonClass)).forEach(el => {
        el.classList.remove('selected');        
    })
};

export {
    initializeGame,
};