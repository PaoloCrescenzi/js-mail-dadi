const accessoConsentito = ["Stefanog@gmail.com", "filippo@gmail.com", "asia@gmail.com", "arnaldo@hotmail.com"];
console.log(accessoConsentito);
let mail = prompt("Inserci la mail");

let trovato = false;

for (let i = 0; i < accessoConsentito.length; i++ ){
    if (mail === accessoConsentito[i]){
        console.log("sei entrato")
        trovato = true
    }
}

let bravissimo = document.getElementById("bravo")

if (trovato === true){
    alert("Ho trovato la tua mail,puoi entrare")
    bravissimo.innerHTML = "<h1>Bravissimo</h1>";
}else {
    alert("non ho trovato la tua mail, non puoi entrare") 
}









