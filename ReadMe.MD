# argentbank

objectif : utiliser une API pour un compte utilisateur bancaire avec React

## description

>Lors de ce projet, vous travaillerez sur le développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.
>
>- Votre mission principale sera d'intégrer le front-end avec le back-end via des appels API.
>
>- Vous écrirez des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication fluide entre le client et le serveur.
>
>- Vous utiliserez React pour développer l'interface utilisateur de l'application bancaire, en vous concentrant sur la création d'un tableau de bord complet et responsive pour les utilisateurs. 
>
>- Redux sera utilisé pour gérer les données de l'application. Cela vous permettra de maintenir un état global cohérent à travers l'application.
>
>- Pour définir les points d'accès de l'API et modéliser les interactions avec les données des transactions, vous utiliserez Swagger. Cet outil vous aidera à décrire les différentes routes et actions nécessaires pour l'API.
>
>- Vous utiliserez Node.js pour exécuter le code JavaScript côté serveur. Cela vous donnera une expérience pratique de la gestion d'une application full-stack.

## étapes de réalisation
- Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
- Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

## détails
### phase 1 : authentification des utilisateurs

- Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Ce que doit faire l’application (voir les détails pour chacune sur nos modèles de GitHub Issues) :
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

>-> Nous avons besoin que vous nous fournissiez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. 
>
>Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :
>
>- La méthode HTTP (ex. : GET, POST etc.)
>- La route (ex. : /store/inventory)
>- La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
>- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
>- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).
>
>Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document est exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans l'outil d'édition de Swagger.