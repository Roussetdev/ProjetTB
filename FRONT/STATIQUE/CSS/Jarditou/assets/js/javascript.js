var reponse1 = window.prompt("Entrez votre nom");
console.log(reponse1);
var reponse2 = window.prompt("Entrez votre prenom");
console.log(reponse2);
if (window.confirm("Etes-vous un homme ?") == true) 
{ 
    console.log("Homme");
    var genre = "Monsieur "
}
window.alert("Bonjour " + genre + reponse1 + " " + reponse2 + " \rBienvenue sur notre site web !" );
let a = "100";
console.log(a);
let b = 100;
console.log(b);
let c = 1.00;
console.log(c);
const e = --b;
console.log(e);
console.log(b);
window.alert("Ceci est une chaîne de caractères : " + a + "\raprès décrémentation b = " + b);
a = 100;
console.log(a);
f = c + a;
console.log(f);
c = f;
console.log(c);
window.alert("c devient : " + c);
var d = new Boolean(1);
console.log(d);
if (window.confirm("Inversez la valeur de d ?" ) == true) 
{ 
    d = Boolean(0);
}
console.log(d);
window.alert("La valeur de d : " + d );