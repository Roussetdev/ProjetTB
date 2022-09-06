    // Evaluation

    // exercice 1
    var bouton1= document.getElementById("Id_btn1");
    bouton1.addEventListener("click",clickbtn1);
    
    function clickbtn1(){
        // variables
        let jeune = 0;
        let mature = 0;
        let vieux = 0;
        let age = 0;
        
        // tant que age < 100
        while(age < 100){
            age = prompt("Entrez un âge "); 
            console.log(age);
                //ajout d'une personne jeune
            if (age < 20){
                jeune = jeune +1;
                console.log(jeune);
            }   //ajout d'une personne mature
            else if(age >= 20 && age <= 40){
                mature = mature + 1;
                console.log(mature);
            }   //ajout d'une personne assez vieux
            else if(age > 40 ){
                vieux = vieux + 1;
                console.log(vieux);
            }
        }
        
        alert("jeune(s) : "+ jeune +" mature(s) : "+ mature +" vieux : "+ vieux);
    }