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

// Entier inférieurs à N

var bouton9= document.getElementById("Id_btn9");
bouton9.addEventListener("click",clickbtn9);

function clickbtn9(){

    p=0;
    var N = prompt("Veuillez saisir votre nombrte N");
    if(N==null){
        alert("Vous avez cliqué sur Annuler");
    }
    else{
        console.log("Voici le nombre N que vous avez saisi: "+N);
        alert("Vérifiez en Console (F12), ce que vous venez de saisir...");
        while(p<N){
            if (p==N){
                break;
            }
            console.log("Ligne : "+p );
            p++;
        }
    }
}

// Moyenne

var bouton10= document.getElementById("Id_btn10");
bouton10.addEventListener("click",clickbtn10);

function clickbtn10(){
    //
}