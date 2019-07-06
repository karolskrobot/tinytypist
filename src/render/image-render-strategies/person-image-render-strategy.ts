class PersonImageRenderStrategy implements ImageRenderStrategy {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    renderImage(containerId: string) {
        let img = new Image();
        img.src = `./images/${this.name}.jpg`;
        img.classList.add('picture-content');
        document.getElementById(containerId).appendChild(img);
    }
}

export {
    PersonImageRenderStrategy as
    default
}