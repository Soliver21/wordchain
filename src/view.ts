export function renderInputs(form: HTMLFormElement, wordCountSpan: HTMLElement): void {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-elements');

    const startWordInput = document.createElement('input');
    startWordInput.type = 'text';
    startWordInput.id = 'start-word';
    startWordInput.disabled = true;

    const intermediateWordInput = document.createElement('input');
    intermediateWordInput.type = 'text';
    intermediateWordInput.id = 'intermediate-word';
    intermediateWordInput.maxLength = 3;

    const endWordInput = document.createElement('input');
    endWordInput.type = 'text';
    endWordInput.id = 'end-word';
    endWordInput.disabled = true;

    inputContainer.append(startWordInput, intermediateWordInput, endWordInput);
    form.insertBefore(inputContainer, wordCountSpan);
    intermediateWordInput.focus();
}

export function updateWordCount(count: number, wordCountSpan: HTMLElement): void {
    wordCountSpan.textContent = count.toString();
}

export function updateWordField(fieldId: string, word: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) field.value = word;
}

export function clearIntermediateInput(): void {
    (document.getElementById('intermediate-word') as HTMLInputElement).value = '';
}

export function setInputDisabled(inputId: string, disabled: boolean): void {
    (document.getElementById(inputId) as HTMLInputElement).disabled = disabled;
}

export function showAlert(message: string): void {
    alert(message);
}

export function removeInputs(): void {
    const inputContainer = document.querySelector('.input-elements');
    if (inputContainer) inputContainer.remove();
}
