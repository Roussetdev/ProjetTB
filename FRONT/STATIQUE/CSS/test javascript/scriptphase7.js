// exercice phase 7

// Parité
// function check(){}

var bouton5= document.getElementById("Id_btn5");
bouton5.addEventListener("click",clickbtn5);

function clickbtn5(){
    var nombre = prompt("Veuillez saisir un nombre");

    if(nombre%2 == 0){
        alert("Nombre pair");
    }
    else{
        alert("Nombre impair");
    }
}

// Age

var bouton6= document.getElementById("Id_btn6");
bouton6.addEventListener("click",clickbtn6);

function clickbtn6(){
    var adn = prompt("Veuillez saisir votre année de naissance");
    var age = 2022-adn;
    alert("Votre age est " + age);
}

// Calculette

var bouton7= document.getElementById("Id_btn7");
bouton7.addEventListener("click",clickbtn7);

function clickbtn7(){
    var nb1 = prompt("Veuillez saisir un premier nombre");
    var nb2 = prompt("Veuillez saisir un second nombre");
    var op = prompt("Veuillez saisir un opérateur");
    switch (op){
        case "+" :
            var rst = eval(nb1) + eval(nb2);
            alert("Le résultat est " + rst);
            break;
        case "-" :
            var rst = eval(nb1) - eval(nb2);
            alert("Le résultat est " + rst);
            break;
        case "*" :
            var rst = eval(nb1) * eval(nb2);
            alert("Le résultat est " + rst);
            break;
        case "/" :
            var rst = eval(nb1) / eval(nb2);
            if(nb2==0){
                alert("Non divisible part "+ nb2);
            }else{
                alert("Le résultat est " + rst);
            }
            break;
        default :
            alert("Erreur opérateur erroné");
    }
}