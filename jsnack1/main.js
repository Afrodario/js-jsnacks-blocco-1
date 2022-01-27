let sum = 0;
let i = 0;

while (i < 10) {
    let number = parseInt(prompt ("Inserisci un numero."));
    console.log(number);

    if (isNaN(number)) {

        alert("Deve essere un numero!")
        i--;

    } else {
        sum += number;
        console.log(sum);
    
        let risultato = document.getElementById("risultato");
        risultato.innerHTML = "La somma dei 10 numeri che hai inserito è: " + sum;
    }

    i++

}


