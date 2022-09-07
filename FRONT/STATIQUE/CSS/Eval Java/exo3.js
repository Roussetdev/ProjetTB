    // Evaluation

    // exercice 3
    var bouton3= document.getElementById("Id_btn3");
    bouton3.addEventListener("click",clickbtn3);
    
    function clickbtn3(){
        // création d'un tableau avec différents prénoms
        var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
        var prenom = prompt("Saisissez un prénom parmi Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane");
        // recherche du prénom saisie et supréssion de celui-ci
        if(tab.includes(prenom)){
            tab.splice(tab.indexOf(prenom),1);
            tab.push(" ");
            console.log(tab)
            alert(tab)
        }   // message d'erreur si annuler ou prénom incorrect
        else{alert("erreur")}
    }