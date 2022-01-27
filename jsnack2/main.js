let number = parseInt(prompt("Inserisci un numero."));

for (let i = 1; i <= number; i++) {

    console.log(i);
    let cubo = Math.pow(i, 3);
    console.log(cubo);

    let risultato = document.getElementById("risultato");
    risultato.innerHTML += "Il cubo di " + i + " è " + String(cubo) + "<br>" ;

}


