"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_js_1 = require("./model.js");
const view_js_1 = require("./view.js");
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector('.start');
    const wordCountSpan = document.getElementById('word-count');
    const form = document.querySelector('form');
    startButton.addEventListener("click", () => startGame(startButton, form, wordCountSpan));
});
function startGame(startButton, form, wordCountSpan) {
    (0, view_js_1.removeInputs)();
    (0, view_js_1.renderInputs)(form, wordCountSpan);
    const startWord = (0, model_js_1.getRandomWord)();
    const endWord = (0, model_js_1.getRandomWord)();
    (0, model_js_1.setStartWord)(startWord);
    (0, model_js_1.setEndWord)(endWord);
    (0, view_js_1.updateWordField)("start-word", startWord);
    (0, view_js_1.updateWordField)("end-word", endWord);
    (0, view_js_1.setInputDisabled)("start", true);
    const intermediateInput = document.getElementById("intermediate-word");
    intermediateInput.removeEventListener("keypress", handleInput);
    intermediateInput.addEventListener("keypress", (e) => handleInput(e, startButton, wordCountSpan));
}
function handleInput(event, startButton, wordCountSpan) {
    if (event.key === "Enter") {
        const target = event.target;
        const word = target.value.trim();
        if (!word || word.includes(" ") || word.length !== 3 || !word.includes(word)) {
            (0, view_js_1.showAlert)("Érvénytelen szó! Csak a megadott listából választhatsz 3 betűs szót.");
            (0, view_js_1.clearIntermediateInput)();
            return;
        }
        (0, model_js_1.addInputValue)(word);
        (0, view_js_1.updateWordCount)((0, model_js_1.getInputValues)().length, wordCountSpan);
        (0, model_js_1.setStartWord)(word);
        (0, view_js_1.updateWordField)("start-word", word);
        (0, view_js_1.clearIntermediateInput)();
        if ((0, model_js_1.isGameOver)()) {
            (0, view_js_1.setInputDisabled)("intermediate-word", true);
            (0, view_js_1.setInputDisabled)("start", false);
            (0, view_js_1.showAlert)("Gratulálok, elértél a célszóhoz!");
        }
    }
}
