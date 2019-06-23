"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TinyTypist = /** @class */ (function () {
    function TinyTypist(word) {
        this.guessingIndex = 0;
        this._word = word.toLowerCase().split('');
    }
    Object.defineProperty(TinyTypist.prototype, "word", {
        get: function () {
            return this._word;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyTypist.prototype, "puzzleWord", {
        get: function () {
            return this.word.slice(0, this.guessingIndex);
        },
        enumerable: true,
        configurable: true
    });
    TinyTypist.prototype.guess = function (letter) {
        if (this.guessingIndex > this.word.length)
            return true;
        if (this.word[this.guessingIndex] === letter.toLowerCase())
            this.guessingIndex++;
        return false;
    };
    return TinyTypist;
}());
exports.default = TinyTypist;
