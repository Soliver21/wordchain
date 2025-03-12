"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = void 0;
exports.setStartWord = setStartWord;
exports.setEndWord = setEndWord;
exports.addInputValue = addInputValue;
exports.getRandomWord = getRandomWord;
exports.isGameOver = isGameOver;
exports.getInputValues = getInputValues;
exports.words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];
let startWord = "";
let endWord = "";
const inputValues = [];
function setStartWord(word) {
    startWord = word;
}
function setEndWord(word) {
    endWord = word;
}
function addInputValue(word) {
    inputValues.push(word);
}
function getRandomWord() {
    return exports.words[Math.floor(Math.random() * exports.words.length)];
}
function isGameOver() {
    return startWord === endWord;
}
function getInputValues() {
    return inputValues;
}
