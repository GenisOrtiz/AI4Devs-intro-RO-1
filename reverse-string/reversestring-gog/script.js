function reverseText() {
    const input = document.getElementById("myInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("outputLabel").textContent = reversed;
}