"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addElement = function (tag, textContent, parent, id, className) {
    var el = document.createElement(tag);
    el.textContent = textContent;
    document.getElementById(parent).appendChild(el);
    if (id) {
        el.id = id;
    }
    if (className) {
        el.className = className;
    }
};
exports.addElement = addElement;
var clearDivs = function (domsArray) {
    domsArray.forEach(function (d) {
        if (document.getElementById(d)) {
            while (document.getElementById(d).firstChild) {
                document
                    .getElementById(d)
                    .removeChild(document.getElementById(d).firstChild);
            }
        }
    });
};
exports.clearDivs = clearDivs;
