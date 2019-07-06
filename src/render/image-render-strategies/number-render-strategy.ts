class NumberRenderStrategy implements ImageRenderStrategy {

    private number: string;

    constructor(number: string) {
        this.number = number;
    }

    renderImage(containerId: string) {
        const numberSpan = document.createElement('span')
        numberSpan.innerHTML = this.number;
        //numberSpan.classList.add('');
        document.getElementById(containerId).appendChild(numberSpan);
    }
}

export {
    NumberRenderStrategy as
    default
}