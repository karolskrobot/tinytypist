import { clearDivs, addElement } from './dom';

const clearAll = () => clearDivs(['picture', 'word', 'guessing']);

const renderWord = (
    wordArray: string[],
    divName: string,
    classes: string[]
) => {
    wordArray.forEach((letter: string) => {
        addElement('span', letter, divName, '', classes);
    });
};

const renderPuzzleWord = (
    wordArray: string[],
    divName: string,
    classes: string[]
) => {
    clearDivs(['guessing']);
    renderWord(wordArray, divName, classes);
};

const renderHintLetter = (
    wordArray: string[],
    divName: string,
    classes: string[]
) => {
    clearDivs(['hint-letter-container']);
    renderWord(wordArray, divName, classes);
};

const renderImage = (containerId: string, url: string) => {
    clearDivs[containerId];
    let img = new Image();
    img.src = url;
    img.classList.add('picture-content')
    document.getElementById(containerId).appendChild(img);
};

export { clearAll, renderHintLetter, renderPuzzleWord, renderImage };
