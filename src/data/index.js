import Mock from "./mock";
import "./db/database";                 //importation des configurations de base de données et des données mockées

Mock.onAny().passThrough();             //Configure mock pour laisser passer toutes les requêtes non spécifiées vers le véritable serveur