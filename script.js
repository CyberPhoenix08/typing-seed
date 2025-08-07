const input = document.getElementById("input");
const text = document.getElementById("text").innerText;
const result = document.getElementById("result");
let startTime;

input.addEventListener("focus", () => {
    startTime = new Date().getTime();
});

input.addEventListener("input", () => {
    const currentInput = input.value;
    if (currentInput === text) {
        const endTime = new Date().getTime();
        const time = (endTime - startTime) / 1000;
        const words = text.split(" ").length;
        const wpm = (words / time) * 60;
        result.innerText = `You typed ${words} words in ${time.toFixed(2)}s. WPM: ${Math.round(wpm)}`;
    }
});
