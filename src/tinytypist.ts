class TinyTypist {

    private guessingIndex: number = 0;
    word: string[];
    wordString: string;
    guessingWord: string[] = [];    
    guessingLetter: string;
    hintState: number = 0;
    
    constructor(wordArg: string) {        
        this.word = wordArg.toLowerCase().split('');
        this.guessingWord = this.setGuessingWord();        
        this.wordString = this.word.join('');
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
      
    getAudioHint() {        
        this.guessingLetter = this.word[this.guessingIndex];

        const sound = new Audio(`./audio/${this.word[this.guessingIndex]}.mp3`);
        sound.play();        
    }

    guess(letter: string) {        

        if (this.guessingIndex > this.word.length - 1)
            return true;
            
        if (this.word[this.guessingIndex].toLowerCase() === letter.toLowerCase()) {
            this.guessingIndex++;
            this.hintState = 0;
        }

        this.guessingWord = this.setGuessingWord()
                
        return false;                  
    }
}

export { TinyTypist as default };
