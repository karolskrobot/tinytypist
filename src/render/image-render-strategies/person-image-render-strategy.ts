class PersonImageRenderStrategy implements ImageRenderStrategy {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public renderImage(containerId: string): void {
        const img = new Image();
        img.src = `../content/images/${this.name}.jpg`;
        img.classList.add('picture-content');
        document.getElementById(containerId).appendChild(img);
    }
}

export { PersonImageRenderStrategy as default };
