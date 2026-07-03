const screen = document.getElementById('screen');

function appendValue(value) {
    if (screen.value === 'Error') {
        screen.value = '';
    }
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}
