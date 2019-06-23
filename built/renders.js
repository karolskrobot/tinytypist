"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./dom");
var clearAll = function () { return dom_1.clearDivs(['picture', 'word', 'guessing']); };
exports.clearAll = clearAll;
var renderWord = function (wordArray, divName) {
    wordArray.forEach(function (letter) {
        dom_1.addElement('span', letter, divName, '', 'letter-span');
    });
};
exports.renderWord = renderWord;
