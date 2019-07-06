import { clearDivs, addElement } from './dom';

class Renderer {
    clearAll = () => clearDivs(['picture', 'word', 'guessing']);

    private renderWord = (
        wordArray: string[],
        divName: string,
        classes: string[]
    ) => {
        wordArray.forEach((letter: string) => {
            addElement('span', letter, divName, '', classes);
        });
    };
    
    renderPuzzleWord = (
        wordArray: string[],
        divName: string,
        classes: string[]
    ) => {
        clearDivs(['guessing']);
        this.renderWord(wordArray, divName, classes);
    };
    
    renderHintLetter = (
        wordArray: string[],
        divName: string,
        classes: string[]
    ) => {
        clearDivs(['hint-letter-container']);
        this.renderWord(wordArray, divName, classes);
    };
    
    renderImage = (containerId: string, strategy: ImageRenderStrategy) => {
        clearDivs[containerId];
        strategy.renderImage(containerId);
    };
    
    setTheme = (colorName: string) => {
        clearDivs(['color-variable-holder']);
        addElement('span', '', 'color-variable-holder', colorName, []);
    };    
}

export { Renderer as default };
