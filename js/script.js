//creare una lista itenti
const emailList = ["luca@gmail.com", "luigi@gmail.com", "anna@gmail.com, thom#gmail.com"]
let accesso = false;
// chiedere email all'utente
const emailUser = prompt('inserisci la tua email')
// se lutente è nella lista dare l'ok

for (let i = 0; i < emailList.length; i++) {
    if (emailUser.toLocaleLowerCase() === emailList[i].toLocaleLowerCase() ) {
        accesso = true;
    }
}

if (accesso) {
    console.log('Benvenuto!')
} else {
    console.log('Non puoi entrare!')
}

// creare due giocatori

const button = document.getElementById('button-box');



button.addEventListener('click', function () {
    let numPc = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero-pc").innerHTML ="Lancio computer " + numPc;
    
    let  numUser = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero-user").innerHTML ="Il tuo lancio " + numUser;
    
    if(numUser > numPc) {
        document.getElementById("vinto").innerHTML = "hai vinto";
    }
      
    else {
        document.getElementById("vinto").innerHTML = "hai perso";
    }

})