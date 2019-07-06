import { getBingImageUrl } from './../bing-images';

class FromApiImageRenderStrategy implements ImageRenderStrategy {
    private name: string;
    private category: string;

    constructor(name: string, category: string) {
        this.name = name;
        this.category = category;
    }

    async renderImage(containerId: string) {
        let img = new Image();
        img.src = await getBingImageUrl(this.name, this.category);
        img.classList.add('picture-content');
        document.getElementById(containerId).appendChild(img);
        return getBingImageUrl(this.name, this.category);
    }
}

export { FromApiImageRenderStrategy as default };
