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
    cpt = 0; 
    somme = 0.0; 
 
    /* Boucle de traitement */ 
    do {

        nblu = parseFloat(prompt("Nombre (0 pour finir) : ")); 
        cpt = cpt + 1; 
        somme = somme + parseFloat(nblu);  
    } while (nblu != 0) 
 
    /* Affichage du résultat */ 
    if (cpt == 1) { 
        document.write("Aucun nombre n'a été saisi"); 
    } else {
        console.log("somme : " + somme);
        moyenne = somme / (cpt-1); 
        alert("Moyenne : "+ moyenne); 
        console.log("moyenne : " + moyenne);
    }
}

// Multiples

var bouton11= document.getElementById("Id_btn11");
bouton11.addEventListener("click",clickbtn11);

function clickbtn11(){
    var n=0;
    var x = prompt("Veuillez saisir un nombre");

    do {
        resultat = x  * n;
        console.log(x + " * "+ n +" = " + resultat);
        n++;
    } while (n <= 10) ;

    // instructions exécutées après le for (i vaut 10)
    console.log("fin de la boucle");
}

// Nombres de voyelles

var bouton12= document.getElementById("Id_btn12");
bouton12.addEventListener("click",clickbtn12);

function clickbtn12(){
    // tableau pour les voyelles
    const v = ["a", "e", "i", "o", "u"]; 
    // fonction compter le nombre de voyelles
    function countv(str) {      
        let nbr = 0;
        // recherche de voyelles
        for (let lettre of str.toLowerCase()) {
            if (v.includes(lettre)) {
                nbr++;
            }
        }
        return nbr;
    }
    // Entrer le mot et affichage du résultat
    const mot = prompt('Veuillez saisir un mot : ');
    const resultat = countv(mot);
    console.log("Nombre de voyelles : " + resultat);
    alert("Nombre de voyelles : " + resultat);
}
