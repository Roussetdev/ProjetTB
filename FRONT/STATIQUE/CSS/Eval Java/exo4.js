    // Evaluation

    // exercice 4
    var bouton4= document.getElementById("Id_btn4");
    bouton4.addEventListener("click",clickbtn4);
    
    function clickbtn4(){
        // variables
        let total = 0;   
        let remise = 0; 
        let FP = 0;     // frais de port
        let TTR = 0;    // total remise
        let PAP = 0;     // prix à payer

        let PU = prompt("Saisissez le prix unitaire ");
        let QTECOM = prompt("Saisissez la quantités voulues ");

        total = PU * QTECOM;
        console.log("total = " + total);    // total 
        
        // calcul de la remise
        if (total < 100){
            remise = 1;     // remise = 1 veut dire que la remise est de 0 puisque c'est 100% du produit
        }else if (total < 500){
            remise = 0.95;
        }else {
            remise = 0.9;
        }
        console.log("remise = " + remise); 
        
        // calcul du total remisé
        TTR = total * remise;
        console.log("TTR = " + TTR);
        
        // calcul des frais de port
        if (TTR > 500){
            FP = 0;
        }else {
            FP = 0.02 * TTR;
        }
        console.log("FP = " + FP);

        // minimum du frais de port à payer si en-dessous un certain seuil
        if (FP < 6 && TTR < 500){
            FP = 6;
        }
        console.log("FP = " + FP);

        // arrondi du frais de port 
        FP = Math.floor(FP * 100)/100;
        console.log("FP arrondi " + FP);

        // calcul du prix à payer
        PAP = TTR + FP;
        console.log("PAP " + PAP);
        console.log(" ");
    }