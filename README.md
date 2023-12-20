# Test Technique TooSmart

## instruction 

Vous devez écrire une fonction qui prend en entrée une chaîne de caractères et un entier, qui représente le nombre de positions de décalage.

L'algorithme consiste à décaler chaque lettre de la chaîne de caractères par un certain nombre de positions, défini par l'entier donné en entrée. Par exemple, si l'entier est 3, chaque lettre de la chaîne doit être décalée de 3 positions vers la droite dans l'alphabet.

La fonction doit prendre en compte les majuscules, les minuscules et les caractères spéciaux. Si un caractère spécial ou un espace est présent dans la chaîne, il doit être laissé tel quel.

Exemples :

Entrée : "Bonjour le monde!", 5
Sortie : "Gtsotwz qj itsaj!"

Entrée : "AlgoRiThmeS en folie", 2
Sortie : "CniqTkVjogU gp hnmgf"

## commentaire

J'ai essayé au maximum de créer de petite fonctions qui n'ont qu'une seul tache pour la simplicité de compréhention et de refacto. 
Pour plus de simplicité j'ai utilisé jsdoc plutôt Typescript pour typer et documenter.
 
## Lancement du projet 

Vous aurez d'abord besoin d'installer [nodjs](https://nodejs.org/en/download)

Pour utiliser le projet vous pouvez utiliser la commande ```node enigma.js``` à la racine du dossier.
