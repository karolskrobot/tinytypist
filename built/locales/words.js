"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animals_1 = require("./animals");
var names_1 = require("./names");
var Words = /** @class */ (function () {
    function Words() {
        this.animals = animals_1.default;
        this.names = names_1.default;
    }
    Words.prototype.getWord = function () {
        var min = 0;
        var max = names_1.default.length - 1;
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.names[randomNumber];
    };
    return Words;
}());
exports.default = Words;
