class TinyTypist {

    private guessingIndex: number = 0;

    word: string[];
    guessingWord: string[] = [];

    constructor(wordArg: string) {        
        this.word = wordArg.toLowerCase().split('');
        this.guessingWord = this.setGuessingWord();
    }

    private setGuessingWord(){

        this.guessingWord = [];

        this.word.forEach((e, i) => {
            if(this.guessingIndex <= i ){
                this.guessingWord.push('')
            }
            else{
                this.guessingWord.push(e)
            }            
        });

        return this.guessingWord;
    }
    
    guess(letter: string) {      

        if (this.guessingIndex > this.word.length - 1)
            return true;

        if (this.word[this.guessingIndex].toLowerCase() === letter.toLowerCase()) {
            this.guessingIndex++;
        }

        this.guessingWord = this.setGuessingWord()
        
        return false;                  
    }
}

export { TinyTypist as default };
