// exercice phase 5
var reponse1 = window.prompt("Entrez votre nom");
console.log(reponse1);
var reponse2 = window.prompt("Entrez votre prenom");
console.log(reponse2);
if (window.confirm("Etes-vous un homme ?") == true) 
{ 
    console.log("Homme");
    var genre = "Monsieur ";
}else{
    console.log("femme");
    var genre = "Madame ";
}
window.alert("Bonjour " + genre + reponse1 + " " + reponse2 + " \rBienvenue sur notre site web !" );