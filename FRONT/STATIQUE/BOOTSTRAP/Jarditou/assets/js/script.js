// Evaluation

// exercice 5 

var contact = document.getElementById("contact");
contact.addEventListener("submit", function(event){ Validation(contact, event); });


function Validation(contact, event)
{
    // variable permmettant de verifier le formulaire
    var verif = true;
    // expresion régulière 
    var REGEX;

    // verification de la case nom
    if (contact.elements["nom"].value.length == 0)
    {
        // classe valid supprimer
        contact.elements["nom"].classList.remove("valid");
        // ajout la classe error 
        contact.elements["nom"].classList.add("error");
        // ajout d'un message d'erreur 
        document.getElementById("invalid-nom").textContent = "Entrez un nom valide";
        //formulaire est invalide
        verif = false;
    }else // case nom remplie
    {
        contact.elements["nom"].classList.remove("error");
        // ajout de la classe valid
        contact.elements["nom"].classList.add("valid");
        // message d'erreur supprimer
        document.getElementById("invalid-nom").textContent = "";
    }

    // verification de la case prenom
    if (contact.elements["prenom"].value.length == 0)
    {
        contact.elements["prenom"].classList.remove("valid");
        contact.elements["prenom"].classList.add("error");
        document.getElementById("invalid-prenom").textContent = "Entrez un prénom valide";
        verif = false;
    }else // case prenom remplie
    {
        contact.elements["prenom"].classList.remove("error");
        contact.elements["prenom"].classList.add("valid");
        document.getElementById("invalid-prenom").textContent = "";
    }

    // case sexe non selectionner
    if (contact.elements["sexe"].value.length == 0)
    {
        document.getElementById("invalid-sexe").textContent = "Selectionnez un sexe.";
        verif = false;
    }else // case sexe selectionner
    {

        document.getElementById("invalid-sexe").textContent = "";
    }

    // verification de la date de naissance
    if (Date.parse(contact.elements["date"].value) >= Date.now() || contact.elements["date"].value == "")
    {
        contact.elements["date"].classList.remove("valid");
        contact.elements["date"].classList.add("error");
        document.getElementById("invalid-date").textContent = "Selectionnez une date";
        verif = false;
        // erreur dans la date
        if (Date.parse(contact.elements["date"].value) >= Date.now())
        {
            document.getElementById("invalid-date").textContent = "Ceci est une futur date, veuillez saisir une autre date";
        }
    }
    else // date conforme
    {
        contact.elements["date"].classList.remove("error");
        contact.elements["date"].classList.add("valid");
        document.getElementById("invalid-date").textContent = "";
    }

    // expression reguliere et code postal
    REGEX = new RegExp("^[0-9]{5}$");

    if (REGEX.test(contact.elements["codepostal"].value) == false)
    {
        contact.elements["codepostal"].classList.remove("valid");
        contact.elements["codepostal"].classList.add("error");
        document.getElementById("invalid-codepostal").textContent = "Entrez un Code Postal valide";
        verif = false;
    }
    else // expression reguliere et code postal ok
    {
        contact.elements["codepostal"].classList.remove("error");
        contact.elements["codepostal"].classList.add("valid");
        document.getElementById("invalid-codepostal").textContent = "";
    }

    // verification de l'adresse
    if (contact.elements["adresse"].value.length == 0)
    {
        contact.elements["adresse"].classList.remove("valid");
        contact.elements["adresse"].classList.add("error");
        document.getElementById("invalid-adresse").textContent = "Entrez une adresse valide";
        verif = false;
    }else // case adresse remplie
    {
        contact.elements["adresse"].classList.remove("error");
        contact.elements["adresse"].classList.add("valid");
        document.getElementById("invalid-adresse").textContent = "";
    }

    // verification de la ville
    if (contact.elements["ville"].value.length == 0)
    {
        contact.elements["ville"].classList.remove("valid");
        contact.elements["ville"].classList.add("error");
        document.getElementById("invalid-ville").textContent = "Entrez une ville valide";
        verif = false;
    }else // case ville remplie
    {
        contact.elements["ville"].classList.remove("error");
        contact.elements["ville"].classList.add("valid");
        document.getElementById("invalid-ville").textContent = "";
    }

    // expression régulière et email
    REGEX = new RegExp("[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})");

    if (REGEX.test(contact.elements["email"].value) == false)
    {
        contact.elements["email"].classList.remove("valid");
        contact.elements["email"].classList.add("error");
        document.getElementById("invalid-email").textContent = "Entrez une adresse e-mail valide";
        verif = false;
    }
    else // expression régulière et email ok
    {
        contact.elements["email"].classList.remove("error");
        contact.elements["email"].classList.add("valid");
        document.getElementById("invalid-email").textContent = "";
    }

    // sujet non selectionner
    if (contact.elements["sujet"].value.length == 0)
    {
        contact.elements["sujet"].classList.remove("valid");
        contact.elements["sujet"].classList.add("error");
        document.getElementById("invalid-sujet").textContent = "Selectionnez un sujet pour votre demande";
        verif = false;
    }
    else // sujet selectionner
    {
        contact.elements["sujet"].classList.remove("error");
        contact.elements["sujet"].classList.add("valid");
        document.getElementById("invalid-sujet").textContent = "";
    }

    // verification de la case question
    if (contact.elements["question"].value.length == 0)
    {
        contact.elements["question"].classList.remove("valid");
        contact.elements["question"].classList.add("error");
        document.getElementById("invalid-question").textContent = "Entrez votre question ci-dessus";
        verif = false;
    }
    else // case question remplie 
    {
        contact.elements["question"].classList.remove("error");
        contact.elements["question"].classList.add("valid");
        document.getElementById("invalid-question").textContent = "";
    }

    // verification case traitement / accepted
    if (!(contact.elements["accepted"].checkValidity()))
    {
        document.getElementById("invalid-accepted").textContent = "Veuillez acceptez le traitement informatique de ce formulaire";
        verif = false;
    }
    else // traitement accepter
    {
        document.getElementById("invalid-accepted").textContent = "";
    }

    // derniere verification avant envoie du formulaire
    if(verif == false)
    {
        // annulation de l'envoie
        event.preventDefault();
    }
}