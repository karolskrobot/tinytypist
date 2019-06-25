

enum HintState {'First' = 1, 'Second' = 2, 'SecondShown' = 3};

class TinyTypist {
    private guessingIndex: number = 0;

    word: string[];
    guessingWord: string[] = [];    
    guessingLetter: string;
    hintState: HintState = HintState.First;
    
    constructor(wordArg: string) {        
        this.word = wordArg.toLowerCase().split('');
        this.guessingWord = this.setGuessingWord();
        this.hintState = HintState.First;
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
            this.hintState = HintState.First;
        }

        this.guessingWord = this.setGuessingWord()
        
        return false;                  
    }
}

export { TinyTypist, HintState };
