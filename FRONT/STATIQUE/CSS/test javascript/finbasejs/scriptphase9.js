// Exercice phase 9 

// exercice 1
var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){
    // variable x et y
    let x = prompt("Entrez un nombre ");
    let y= prompt("Entrez un multiplicateur ");
    // l'image
    var monImage = document.createElement('img');
    // le cheminement de l'image
    monImage.src = "papillon.jpg";
    // la recherche de la div par l'ID
    var maDiv = document.getElementById("pap");
    // affichage de l'image
    maDiv.appendChild(monImage);
    // calcul du carré de x et multiplication de x par y
    let resultat1 = x*x*x;
    let resultat2 = x*y;
    // recherche d'une div et affichage des resultats
    document.getElementById("phrases").innerHTML = "<div>Le cube de "+ x +" est égal à " + resultat1 +" <br/>Le produit de " + x  + "*" +  y + " est égal à  "+ resultat2+"</div>"; 
}

// String Token

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){

    function splitString(stringToSplit, separator) {
        var n = stringToSplit.split(separator);
      
        console.log(`La chaine d'origine est : ${stringToSplit}`);
        console.log(`Le délimiteur est : ${separator}`);
        console.log(`Le tableau comporte ${n.length} elements : `, n.join(' / '));
      }
      

      var str1 = "robert ;dupont ;amiens ;80000";

      var str2 = ";";
      

      splitString(str1, str2);
}