import DomHelper from './dom-helper';

class Renderer {

    private domHelper: DomHelper;

    public constructor() {
        this.domHelper = new DomHelper();
    }

    public clearAll = (): void => this.domHelper.clearDivs(['picture', 'word', 'guessing']);

    public renderPuzzleWord = (
        wordArray: string[],
        divName: string,
        classes: string[],
    ): void => {
        this.domHelper.clearDivs(['guessing']);
        wordArray.forEach((letter: string): void => {
            this.domHelper.addElement('span', letter, divName, '', classes);
        });
    };

    public renderImage = (containerId: string, strategy: ImageRenderStrategy): void => {
        this.domHelper.clearDivs(['containerId']);
        strategy.renderImage(containerId);
    };
}

export { Renderer as default };
