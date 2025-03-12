export const words: string[] = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];

let startWord: string = "";
let endWord: string = "";
const inputValues: string[] = [];

export function setStartWord(word: string): void {
    startWord = word;
}

export function setEndWord(word: string): void {
    endWord = word;
}

export function addInputValue(word: string): void {
    inputValues.push(word);
}

export function getRandomWord(): string {
    return words[Math.floor(Math.random() * words.length)];
}

export function isGameOver(): boolean {
    return startWord === endWord;
}

export function getInputValues(): string[] {
    return inputValues;
}