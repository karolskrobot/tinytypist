class DomHelper {

    addElement = (
        tag: string,
        textContent: string,
        parent: string,
        id: string,
        classes: string[]
        ) => 
        {
            const el = document.createElement(tag);
            el.textContent = textContent;
            document.getElementById(parent).appendChild(el);
            if (id) {
                el.id = id;
            }
            classes.forEach((c) => {
                el.classList.add(c)
            })
        };
    
    clearDivs = (domsArray: string[]) => {
        domsArray.forEach(d => {
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

export {DomHelper as default}