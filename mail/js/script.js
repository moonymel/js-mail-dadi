
// CREO PROMPT PER NUOVA MAIL
let new_mail = prompt('Inserisci qui la tua mail');

// CREO ARRAY PER LE MAIL CONVALIDATE
let mails = ['pippo@gmail.com', 'ciccio@gmail.com', 'tizio@gmail.com'];

let flag = false;

// CREO CICLO DI TUTTE LE MAIL CONVALIDATE
for (let i=0; i<mails.length; i++) {

    // SE ELEMENTO DEL CICLO è UGUALE ALLA MAIL INSERITA
    if(mails[i] == new_mail) {
        flag = true;
    }
     
}

if (flag == true) {
    console.log('mail convalidata')
}
else {
    console.log('mail non convalidata')
}
