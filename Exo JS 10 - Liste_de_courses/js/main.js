/*
## Enoncé

Gérer une liste de courses en affichant les informations dans la console du navigateur web.

## Détails

* La liste de courses est stockée dans une seule variable.
* Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
* Les fonctionnalités de gestion de la liste de courses sont :
  1. Ajouter un produit par son nom
  2. Supprimer un produit ayant un nom spécifique
  3. Supprimer tous les produits
  4. Afficher la taille et le contenu de la liste
* Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
* Les tableaux sont des objets de la classe *Array*, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
* Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
  1. Ajouter 4 produits simples puis afficher les informations
  2. Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
  3. Supprimer tous les produits puis afficher les informations
*/





//créer le tableau de la liste de course
let liste = [' Apple',' Orange',' Banana'];

//fonction d'ajout d'un produit dans le tableau
function ajoutListe(newElement) {    
    liste.push(newElement);
};

ajoutListe(" Ananas ");
ajoutListe(" Ak47");
ajoutListe(" Granade");

//fonction d'affichage de la liste de produit
function affichageListe(){
    console.log(liste);
};



//fonction de suppression de tous les produits
function clearAll(){
    console.clear();
}


/*
fonction de suppression d'un seul
Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
condition si le produit n'est pas trouvé
on affiche l'erreur
Fin de la fonction, il ne faut pas aller plus loin. return
Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
*/

function supElement(produit){
   
   let index = liste.indexOf(produit)
   
   if(index === -1){
       console.log("Produit innexistant")
   }else{
       liste.splice(index,1);
       console.log(`Element - ${produit} - erased with succes !!`, liste);
   }
};

//supElement(0, 1);
supElement("Ak47") 
    
    
//Affichage element HTML 

document.write(`<h2>Ma liste! </h2> <h3> ${liste}<h3>`)