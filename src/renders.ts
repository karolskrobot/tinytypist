import { clearDivs, addElement } from './dom';

const clearAll = () => clearDivs(['picture', 'word', 'guessing']);

const renderWord = (wordArray: string[], divName: string, classes: string[]) => {    
    wordArray.forEach((letter: string) => {
        addElement('span', letter, divName, '', classes);
    });
};

const renderPuzzleWord = (wordArray: string[], divName: string, classes: string[]) => {    
    clearDivs(['guessing']);
    renderWord(wordArray, divName, classes);
};

export { clearAll, renderWord, renderPuzzleWord };
