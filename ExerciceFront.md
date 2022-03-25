# Exercice Front-end : La bibliothèque d'Henri Potier

### L’énoncé

> Il était une fois, une collection de sept livres racontant les histoires d’un formidable héro nommé Henri Potier. Tous les enfants du monde trouvaient les histoires de cet adolescent fantastiques. L’éditeur de cette collection, dans un immense élan de générosité (mais aussi pour booster ses ventes :wink:), décida de mettre en place des offres commerciales aussi aléatoires que l’issue des sorts de Ron Weasley.

L’éditeur vous demande de développer un site web de e-commerce comprenant deux interfaces :
* La première permet d’afficher les livres que l’on souhaite acheter et d’effectuer une recherche libre
* La seconde récapitule le panier où sera appliquée __la meilleure offre commerciale possible__.

Sachez que l’éditeur attachera une attention toute particulière à __la qualité de votre programmation__.
&nbsp;

### Les ressources

La liste des livres Henri Potier est accessible à l’adresse https://henri-potier.techx.fr/books en GET.

Les offres commerciales associées sont disponibles (depuis n’importe quel domaine) en GET à l’adresse suivante: https://<i></i>henri-potier.techx.fr/books/{ISBN1, ISBN2, ...}/commercialOffers
&nbsp;

### Un exemple

#### Calcul
Pour deux livres (à 35 et 30€), la requête ressemblera à : https://henri-potier.techx.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers

Le service enverra les offres applicables à ce panier sous le format JSON suivant :
```json
{
  "offers": [
    { "type": "percentage", "value": 5 },
    { "type": "minus", "value": 15 },
    { "type": "slice", "sliceValue": 100, "value": 12 }
  ]
}
```
Dans cet exemple, la promotion la plus intéressante pour le client est la promotion de type `minus`, le prix du panier attendu est donc de `65€ - 15€`, soit `50€`.

#### Quelques explications
* La première offre identifiée par un type __‘percentage’__ est une réduction s’appliquant sur le prix de l’ensemble des livres. Le montant de la réduction est dans __‘value’__;

* La deuxième offre identifiée par un type __‘minus’__ est une déduction directement applicable en caisse d’un montant de __‘value’__;

* La troisième offre identifiée par un type __‘slice’__ est un remboursement par tranche d’achat. Dans cet exemple, on rembourse 12€ par tranche de 100€ d’achat.


*Au-delà de « l’exercice imposé », toute idée originale supplémentaire sera appréciée.*
