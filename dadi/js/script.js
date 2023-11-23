let utente = Math.floor(Math.random() * 6 + 1);
console.log(utente);

let computer = Math.floor(Math.random() * 6 + 1);
console.log(computer);

if (utente > computer) {
    console.log('hai vinto!');
}

else if (utente == computer) {
    console.log('hai pareggiato!');
}

else {
    console.log('hai perso!')
}