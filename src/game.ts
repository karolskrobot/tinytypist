import TinyTypist from './tinytypist';
import Renderer from './render/renderer';
import Words from './words';
import lettersEn from './word-arrays/letters';
import PersonImageRenderStrategy from './render/image-render-strategies/person-image-render-strategy';
import FromApiImageRenderStrategy from './render/image-render-strategies/from-api-render-strategy';
import NumberRenderStrategy from './render/image-render-strategies/number-render-strategy';

let tinyTypist: TinyTypist;
let words: Words;
let renderer: Renderer;

const updatePuzzleWord = (): void => renderer.renderPuzzleWord(tinyTypist.guessingWord, 'guessing', ['letter-span', 'letter-span-underline']);

const cleanBorders = (buttonClass: string): void => {
    Array.from(document.querySelectorAll(buttonClass)).forEach((el): void => {
        el.classList.remove('selected');
    });
};

const newWord = async (): Promise<void> => {
    const word = words.getWord();
    tinyTypist = new TinyTypist(word);
    renderer.clearAll();
    updatePuzzleWord();
    let strategy: ImageRenderStrategy;
    switch (words.categoryName) {
        case 'animals':
            strategy = new FromApiImageRenderStrategy(word);
            break;
        case 'people':
            strategy = new PersonImageRenderStrategy(word);
            break;
        default:
            strategy = new FromApiImageRenderStrategy(word, words.categoryName);
            break;
    }

    await renderer.renderImage('picture', strategy);
};

const addButtonListeners = (): void => {
    Array.from(document.querySelectorAll('.category')).forEach((el): void => {
        el.addEventListener('click', (e): void => {
            cleanBorders('.category');
            const target = e.target as Element;
            words.setCategory(target.id);
            newWord();
            target.classList.add('selected');
        });
    });

    Array.from(document.querySelectorAll('.color')).forEach((el): void => {
        el.addEventListener('click', (e): void => {
            cleanBorders('.color');
            const target = e.target as Element;
            target.classList.add('selected');
            // renderer.setTheme(target.id);
        });
    });

    document.getElementById('hint').addEventListener('click', (): void => {
        tinyTypist.getAudioHint();
    });
};

const initializeGame = async (): Promise<void> => {
    words = new Words();
    renderer = new Renderer();
    addButtonListeners();
    await newWord();
};

const processGuess = async (letter: string): Promise<void> => {
    if (tinyTypist.guess(letter)) {
        newWord();
    }
    updatePuzzleWord();
};

document.onkeypress = (e: KeyboardEvent): void => {
    const charCode = e.charCode || e.which;
    const charString = String.fromCharCode(charCode);
    if (lettersEn.includes(charString.toLowerCase())) {
        processGuess(charString);
    }
};

export { initializeGame as default };
