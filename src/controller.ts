import { addInputValue, getRandomWord, isGameOver, setEndWord, setStartWord, getInputValues } from "./model.js";
import { clearIntermediateInput, setInputDisabled, removeInputs, renderInputs, showAlert, updateWordCount, updateWordField } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start") as HTMLButtonElement;
    const wordCountSpan = document.getElementById("word-count") as HTMLElement;
    const form = document.querySelector("form") as HTMLFormElement;

    startButton.addEventListener("click", () => startGame(startButton, form, wordCountSpan));
});

function startGame(startButton: HTMLButtonElement, form: HTMLFormElement, wordCountSpan: HTMLElement): void {
    removeInputs();
    renderInputs(form, wordCountSpan);
    
    const startWord = getRandomWord();
    const endWord = getRandomWord();
    
    setStartWord(startWord);
    setEndWord(endWord);
    updateWordField("start-word", startWord);
    updateWordField("end-word", endWord);
    
    setInputDisabled("start", true);
    
    (document.getElementById("intermediate-word") as HTMLInputElement).addEventListener("keypress", (e) => handleInput(e, startButton, wordCountSpan));
}

function handleInput(event: KeyboardEvent, startButton: HTMLButtonElement, wordCountSpan: HTMLElement): void {
    if (event.key === "Enter") {
        const target = event.target as HTMLInputElement;
        const word = target.value.trim();
        if (!word || word.includes(" ")) {
            showAlert("Érvénytelen szó!");
            clearIntermediateInput();
            return;
        }

        addInputValue(word);
        updateWordCount(getInputValues().length, wordCountSpan);
        setStartWord(word);
        updateWordField("start-word", word);
        clearIntermediateInput();

        if (isGameOver()) {
            setInputDisabled("intermediate-word", true);
            setInputDisabled("start", false);
        }
    }
}
