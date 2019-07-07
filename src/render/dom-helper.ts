class DomHelper {

    public addElement = (
        tag: string,
        textContent: string,
        parent: string,
        id: string,
        classes: string[],
    ): void => {
        const el = document.createElement(tag);
        el.textContent = textContent;
        document.getElementById(parent).appendChild(el);
        if (id) {
            el.id = id;
        }
        classes.forEach((c): void => {
            el.classList.add(c);
        });
    };

    public clearDivs = (domsArray: string[]): void => {
        domsArray.forEach((d): void => {
            if (document.getElementById(d)) {
                while (document.getElementById(d).firstChild) {
                    document
                        .getElementById(d)
                        .removeChild(document.getElementById(d).firstChild);
                }
            }
        });
    };
}

export { DomHelper as default };
