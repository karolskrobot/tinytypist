class NumberRenderStrategy implements ImageRenderStrategy {
    private number: string;

    public constructor(number: string) {
        this.number = number;
    }

    public renderImage(containerId: string): void {
        const numberSpan = document.createElement('span');
        numberSpan.innerHTML = this.number;
        // numberSpan.classList.add('');
        document.getElementById(containerId).appendChild(numberSpan);
    }
}

export { NumberRenderStrategy as default };
