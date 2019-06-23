import animals from './animals';
import names from './names';

class Words {
    animals: string[];
    names: string[];

    constructor() {
        this.animals = animals;
        this.names = names;
    }

    getWord() {
        let min = 0;
        let max = names.length - 1;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.names[randomNumber];
    }
}

export { Words as default };
