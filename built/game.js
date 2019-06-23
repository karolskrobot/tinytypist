"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tinytypist_1 = require("./tinytypist");
var words_1 = require("./locales/words");
var renders_1 = require("./renders");
var letters_1 = require("./locales/letters");
var tinyTypist;
var words;
var initializeGame = function () {
    words = new words_1.default();
    newGame();
};
exports.initializeGame = initializeGame;
//start game
var newGame = function () {
    tinyTypist = new tinytypist_1.default(words.getWord());
    renders_1.clearAll();
    updateWordDivs();
};
exports.newGame = newGame;
var updateWordDivs = function () {
    renders_1.renderWord(tinyTypist.word, 'word');
    renders_1.renderWord(tinyTypist.puzzleWord, 'word');
};
//listen for keypress
document.onkeypress = function (e) {
    //e = e || window.event;
    var charCode = e.keyCode || e.which;
    var charString = String.fromCharCode(charCode);
    if (letters_1.lettersEn.includes(charString.toLowerCase())) {
        processGuess(charString);
    }
};
//processGuess
var processGuess = function (letter) {
    if (tinyTypist.guess(letter)) {
        newGame();
    }
};
