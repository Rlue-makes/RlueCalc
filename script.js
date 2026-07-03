const screen = document.getElementById('screen');

function appendValue(value) {
    if (screen.value === '0' && !isNaN(value)) {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

function clearScreen() {
    screen.value = '0';
}

function deleteLast() {
    if (screen.value.length > 1) {
        screen.value = screen.value.slice(0, -1);
    } else {
        screen.value = '0';
    }
}

function calculate() {
    try {
        const result = eval(screen.value);
        if (result === Infinity || isNaN(result)) {
            screen.value = "Error";
        } else {
            screen.value = result;
        }
    } catch (error) {
        screen.value = "Error";
    }
}