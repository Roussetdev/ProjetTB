    // Evaluation

    // exercice 2
    var bouton2= document.getElementById("Id_btn2");
    bouton2.addEventListener("click",clickbtn2);
    
    function clickbtn2(){
        // demande d'un nombre
        var n = prompt("Quelle table de multiplication voulez vous afficher ?");
        // table de multiplication avec nombre "n" choisi
        var resultat1 = n * 1;
        var resultat2 = n * 2;
        var resultat3 = n * 3;
        var resultat4 = n * 4;
        var resultat5 = n * 5;
        var resultat6 = n * 6;
        var resultat7 = n * 7;
        var resultat8 = n * 8;
        var resultat9 = n * 9;
        var resultat10 = n * 10;
        // verification console
        console.log(n+" * 1 = "+resultat1+"\n"+
        n+" * 2 = "+resultat2+"\n"+
        n+" * 3 = "+resultat3+"\n"+
        n+" * 4 = "+resultat4+"\n"+
        n+" * 5 = "+resultat5+"\n"+
        n+" * 6 = "+resultat6+"\n"+
        n+" * 7 = "+resultat7+"\n"+
        n+" * 8 = "+resultat8+"\n"+
        n+" * 9 = "+resultat9+"\n"+
        n+" * 10 = "+resultat10);
        // affichage du resultat en alert
        alert(n+" * 1 = "+resultat1+"\n"+
        n+" * 2 = "+resultat2+"\n"+
        n+" * 3 = "+resultat3+"\n"+
        n+" * 4 = "+resultat4+"\n"+
        n+" * 5 = "+resultat5+"\n"+
        n+" * 6 = "+resultat6+"\n"+
        n+" * 7 = "+resultat7+"\n"+
        n+" * 8 = "+resultat8+"\n"+
        n+" * 9 = "+resultat9+"\n"+
        n+" * 10 = "+resultat10);
    }