// exercice phase 8

// Saisie

var bouton8= document.getElementById("Id_btn8");
bouton8.addEventListener("click",clickbtn8);

function clickbtn8(){
    // nombre de prenom
    var n =1;
    var f=-1;

    // Debut de la boucle des prenoms
    while (true){
        
        var prenom = prompt("Veuillez saisir le prénom N°"+n);
        console.log(prenom);
        n++;
        f++
        // si un blanc est laissé alors afficher le nombre et les prenomns dans la console
        if (prenom==""){
            console.log(f);
            alert("Nombre(s) de prenom(s) : "+f);
            return;
        }else if(prenom==null){         // si cliquer sur annuler alors message d'alerte 
            alert("Vous avez cliqué sur Annuler");
            return;
        }
        
    }

}
