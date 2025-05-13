function handleInput() {
    const input = document.getElementById("myInput").value;
    const button = document.getElementById("reverseButton");
    const liveOutput = document.getElementById("liveOutputLabel");

    // Update live reversed text
    liveOutput.textContent = input.split("").reverse().join("");

    // Show or hide button based on input length
    button.style.display = input.length >= 3 ? "inline-block" : "none";
}

function reverseText() {
    const input = document.getElementById("myInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("outputLabel").textContent = reversed;
}