import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/connexion", "Connexion", "/pages/connexion.html",["disconnected"], "/js/connexion.js"),
    new Route("/inscription", "inscription", "/pages/inscription.html",["disconnected"], "/js/inscription.js"),
    new Route("/moncompte", "Mon compte", "/pages/moncompte.html",["client","admin"]),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html", []),
    new Route("/changermdp", "Changer mot de passe", "/pages/changermdp.html",["connected"]),

];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";