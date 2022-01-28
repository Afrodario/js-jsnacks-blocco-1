let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let j = 0;
let sumResult = document.getElementById("risultato-somma");
let averageResult = document.getElementById("risultato-media");

for (let i = 1; i < arrayNumber.length + 1; i++) {

    console.log(i);

    let sum;
    sum = j += i;
    console.log(sum);
    sumResult.innerHTML = "La somma dei primi 10 numeri è: " + sum;

    let average;
    average = sum / arrayNumber.length;
    console.log(average);
    averageResult.innerHTML = "La media dei primi 10 numeri è: " + average;

}


