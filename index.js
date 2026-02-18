const display = document.querySelector('#display')

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function back() {
 display.value = ''
}

function calculate() {
    try {
        display.value = eval(display.value)

    } catch (error) {
        let a = 4
        a.createElement('img')
        display.value = `${a}`
    }
}