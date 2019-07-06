class TinyTypist {

    public guessingIndex: number = 0;

    public word: string[];

    public wordString: string;

    public guessingWord: string[] = [];

    public guessingLetter: string;
    public hintState: number = 0;

    public constructor(wordArg: string) {
        this.word = wordArg.toLowerCase().split('');
        this.guessingWord = this.setGuessingWord();
        this.wordString = this.word.join('');
    }

    private setGuessingWord(): string[] {

        this.guessingWord = [];

        this.word.forEach((e, i): void => {
            if (this.guessingIndex <= i) {
                this.guessingWord.push('');
            } else {
                this.guessingWord.push(e);
            }
        });

        return this.guessingWord;
    }

    public getAudioHint(): void {
        this.guessingLetter = this.word[this.guessingIndex];

        const sound = new Audio(`./audio/${this.word[this.guessingIndex]}.mp3`);
        sound.play();
    }

    public guess(letter: string): boolean {

        if (this.guessingIndex > this.word.length - 1) {
            return true;
        }

        if (this.word[this.guessingIndex].toLowerCase() === letter.toLowerCase()) {
            this.guessingIndex += 1;
            this.hintState = 0;
        }

        this.guessingWord = this.setGuessingWord();

        return false;
    }
}

export { TinyTypist as default };
