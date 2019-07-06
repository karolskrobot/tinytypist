import DomHelper from './dom-helper'

class Renderer {

    private domHelper: DomHelper;

    constructor() {
        this.domHelper = new DomHelper();        
    }

    clearAll = () => this.domHelper.clearDivs(['picture', 'word', 'guessing']);
   
    renderPuzzleWord = (
        wordArray: string[],
        divName: string,
        classes: string[]
    ) => {
        this.domHelper.clearDivs(['guessing']);
        wordArray.forEach((letter: string) => {
            this.domHelper.addElement('span', letter, divName, '', classes);
        });
    };
          
    renderImage = (containerId: string, strategy: ImageRenderStrategy) => {
        this.domHelper.clearDivs[containerId];
        strategy.renderImage(containerId);
    };        
}

export { Renderer as default };
