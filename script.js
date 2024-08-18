function appendValue(value) {
    document.getElementById("display").innerText += value;
}

function resetDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLast() {
    let current = document.getElementById("display").innerText;
    document.getElementById("display").innerText = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").innerText;
    try {
        document.getElementById("display").innerText = eval(expression);
    } catch (e) {
        document.getElementById("display").innerText = "Error";
    }
}
