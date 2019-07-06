import animals from '../src/word-arrays/animals';
import people from './word-arrays/names';
import toys from './word-arrays/toys';
import numbers from './word-arrays/numbers';

class Words {
    private animals: string[];

    private people: string[];

    private toys: string[];

    private numbers: string[];    

    private categoryArray: string[];

    public categoryName: string;

    public constructor() {
        this.animals = animals;
        this.people = people;
        this.toys = toys;
        this.numbers = numbers;
        this.categoryArray = people;
        this.categoryName = 'people'
    }

    public setCategory(category: string): void{
        this.categoryArray = this[category]
        this.categoryName = category;
    }

    public getWord(): string {
        const min = 0;
        const max = this.categoryArray.length - 1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.categoryArray[randomNumber];
    }
}

export { Words as default };