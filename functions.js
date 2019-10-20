const button = document.querySelector('button');
button.onclick = function multiply () {
    let firstNumber = prompt('Enter a number');
    let secondNumber = prompt('Enter the second number')
    multipliedNumber = parseFloat(firstNumber)*parseFloat(secondNumber);
    alert("Your numbers multiplied " + multipliedNumber + "!")
}


