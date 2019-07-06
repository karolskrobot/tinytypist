import {
    TinyTypist,
    HintState
} from './tinytypist';
import Renderer from './render/renders';
import Words from './words';
import lettersEn from './word-arrays/letters';
import PersonImageRenderStrategy from './render/image-render-strategies/person-image-render-strategy';
import FromApiImageRenderStrategy from './render/image-render-strategies/from-api-render-strategy';
import NumberRenderStrategy from './render/image-render-strategies/number-render-strategy';

let tinyTypist: TinyTypist;
let words: Words;
let renderer: Renderer;

const updateHintLetter = () => renderer.renderHintLetter([tinyTypist.guessingLetter], 'hint-letter-container', ['letter-span']);
const updatePuzzleWord = () => renderer.renderPuzzleWord(tinyTypist.guessingWord, 'guessing', ['letter-span', 'letter-span-underline']);

const initializeGame = async () => {
    words = new Words();
    renderer = new Renderer();
    addButtonListeners();
    await newWord();
};

const newWord = async () => {
    const word = words.getWord()
    tinyTypist = new TinyTypist(word);
    renderer.clearAll();
    updatePuzzleWord();
    let strategy: ImageRenderStrategy;
    switch (words.categoryName) {
        case 'people':
            strategy = new PersonImageRenderStrategy(word)
            break;        
        case 'toys':
            strategy = new FromApiImageRenderStrategy(`${word}+toy+`, words.categoryName)
            break;
        default:
            strategy = new FromApiImageRenderStrategy(word, words.categoryName)
            break;
    }

    await renderer.renderImage('picture', strategy);
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
            renderer.setTheme(target.id);
        })
    })

    document.getElementById('hint').addEventListener('click', () => {
        if (tinyTypist.hintState === HintState.First || tinyTypist.hintState === HintState.SecondShown) {
            tinyTypist.getAudioHint()

            if (tinyTypist.hintState === HintState.First)
                tinyTypist.hintState = HintState.Second
        } else if (tinyTypist.hintState === HintState.Second) {
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