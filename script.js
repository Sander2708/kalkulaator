function calculate() {
    var sideA = parseFloat(document.getElementById("side-a").value);
    var sideB = parseFloat(document.getElementById("side-b").value);

    var hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

    document.getElementById("result").innerText = "The length of the hypotenuse is: " + hypotenuse.toFixed(2);
}