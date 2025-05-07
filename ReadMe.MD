# argentbank

objectif : utiliser une API pour un compte utilisateur bancaire avec React

## utilisation
#### 1. Cloner et lancer l’API
télécharger l'api [bank-api](https://github.com/uu-0/argent-bank-api)
```bash
# installer les dépendances
npm install

# démarrer le serveur local
npm run dev:server

# alimenter la base de données avec 2 utilisateurs
npm run populate-db
```
#### 2. Lancer le front-end
 aller sur [argentbank](https://uu-0.github.io/argentbank/)
se connecter avec les informations suivantes 
```bash
# Tony Stark
First Name: Tony
Last Name: Stark
Email: tony@stark.com
Password: password123

# Steve Rogers
First Name: Steve,
Last Name: Rogers,
Email: steve@rogers.com,
Password: password456
```

## description

Ce projet consiste à développer le front-end d’une application bancaire fictive en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive
>
#### Mission principale : intégrer le front-end avec le back-end via des appels API
>
>  - écrire des appels à l'API REST pour connecter les deux parties de l'application, pour une communication fluide entre le client et le serveur
>
>  - utilisation de React pour développer l'interface utilisateur de l'application bancaire, en vous créant un tableau de bord complet et responsive pour les utilisateurs
>
>  - utilisation de Redux pour gérer les données de l'application, cela permettra de maintenir un état global cohérent à travers l'application
>
>  - utilisation de Swagger pour définir les points d'accès de l'API et modéliser les interactions avec les données des transactions  (outil pour décrire les différentes routes et actions nécessaires pour l'API)
>
>  - utilisation Node.js pour exécuter le code JavaScript côté serveur, cela  donnera une expérience pratique de la gestion d'une application full-stack

## étapes de réalisation
- Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
- Phase 2 : Transactions - Spécifications des endpoints d’API nécessaires pour une éventuelle deuxième mission

## détails
### phase 1 : authentification des utilisateurs

- Créer l’application web complète et responsive avec React. Point de départ : HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Ce que doit faire l’application (voir les détails pour chacune sur les GitHub Issues) :
1. L'utilisateur peut visiter la page d'accueil
2. L'utilisateur peut se connecter au système
3. L'utilisateur peut se déconnecter du système
4. L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
5. L'utilisateur peut modifier le profil et conserver les données dans la base de données. 

### phase 2 : transactions
- Mettre au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :

1. de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
2. de visualiser les détails d'une transaction dans une autre vue ;
3. d'ajouter, de modifier ou de supprimer des informations sur une transaction.

>-> Fournir un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. 
>
>Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :
>
>- La méthode HTTP (ex. : GET, POST etc.)
>- La route (ex. : /store/inventory)
>- La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
>- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
>- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).
>