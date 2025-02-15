import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/inscription", "inscription", "/pages/inscription.html", "/js/inscription.js"),
    new Route("/moncompte", "Mon compte", "/pages/moncompte.html"),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html"),
    new Route("/changermdp", "Changer mot de passe", "/pages/changermdp.html"),

];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";