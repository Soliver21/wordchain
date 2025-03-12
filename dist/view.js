"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderInputs = renderInputs;
exports.updateWordCount = updateWordCount;
exports.updateWordField = updateWordField;
exports.clearIntermediateInput = clearIntermediateInput;
exports.setInputDisabled = setInputDisabled;
exports.showAlert = showAlert;
exports.removeInputs = removeInputs;
function renderInputs(form, wordCountSpan) {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-elements");
    const startWordInput = document.createElement("input");
    startWordInput.type = "text";
    startWordInput.id = "start-word";
    startWordInput.disabled = true;
    const intermediateWordInput = document.createElement("input");
    intermediateWordInput.type = "text";
    intermediateWordInput.id = "intermediate-word";
    intermediateWordInput.maxLength = 3;
    const endWordInput = document.createElement("input");
    endWordInput.type = "text";
    endWordInput.id = "end-word";
    endWordInput.disabled = true;
    inputContainer.append(startWordInput, intermediateWordInput, endWordInput);
    form.insertBefore(inputContainer, wordCountSpan);
    intermediateWordInput.focus();
}
function updateWordCount(count, wordCountSpan) {
    wordCountSpan.textContent = count.toString();
}
function updateWordField(fieldId, word) {
    const field = document.getElementById(fieldId);
    if (field)
        field.value = word;
}
function clearIntermediateInput() {
    document.getElementById("intermediate-word").value = "";
}
function setInputDisabled(inputId, disabled) {
    document.getElementById(inputId).disabled = disabled;
}
function showAlert(message) {
    alert(message);
}
function removeInputs() {
    const inputContainer = document.querySelector(".input-elements");
    if (inputContainer)
        inputContainer.remove();
}
