function checkInputLength() {
    const input = document.getElementById("myInput").value;
    const button = document.getElementById("reverseButton");
    button.style.display = input.length >= 3 ? "inline-block" : "none";
}

function reverseText() {
    const input = document.getElementById("myInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("outputLabel").textContent = reversed;
}