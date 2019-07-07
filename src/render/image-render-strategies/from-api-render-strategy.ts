import getBingImageUrl from '../bing-images';

class FromApiImageRenderStrategy implements ImageRenderStrategy {
    private name: string;
    private category: string;

    public constructor(name: string, category = '') {
        this.name = name;
        this.category = category;
    }

    public async renderImage(containerId: string): Promise<void> {
        const img = new Image();
        img.src = await getBingImageUrl(this.name, this.category);
        img.classList.add('picture-content');
        document.getElementById(containerId).appendChild(img);
    }
}

export { FromApiImageRenderStrategy as default };
