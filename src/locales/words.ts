import animals from './animals';
import people from './people';
import toys from './toys';

class Words {
    animals: string[];
    people: string[];
    toys: string[];    
    categoryName: string;
    categoryArray: string[];

    constructor() {
        this.animals = animals;
        this.people = people;
        this.toys = toys;
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