import animals from './word-arrays/animals';
import people from './word-arrays/names';
import toys from './word-arrays/toys';
import numbers from './word-arrays/numbers';

class Words {
    animals: string[];
    people: string[];
    toys: string[];
    numbers: string[];
    categoryName: string;
    categoryArray: string[];

    constructor() {
        this.animals = animals;
        this.people = people;
        this.toys = toys;
        this.numbers = numbers;
        this.categoryArray = people;
        this.categoryName = 'people'
    }

    setCategory(category: string){
        console.log(category);        
        this.categoryArray = this[category];
        this.categoryName = category;
    }

    getWord() {
        let min = 0;
        let max = this.categoryArray.length - 1;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.categoryArray[randomNumber];
    }
}

export { Words as default };