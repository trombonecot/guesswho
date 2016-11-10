# guesswho

agafa una foto del google imagenes d'un personatge i parteix la foto en una matrui de 8, 16, 32 quadrats

- tens un buscador de conceptes, cada vegada que escriurs algo, es fa una cerca a google i si apareix entre els 10 primers de la llista aquest personatge et mostra un nou quadradet

- si escrius el nom del personatge et dona l'ok

- nivell:

fàcil: 9 requadres
mitj: 16 requadres
dificil: 25 requadres
super dificil: 25 requadres fotos diferents


- que els hints per cada individu tinguem una llista de 100 paraules relacionaes amb ella, 
tretes de les 100 paraules que més apareixen en les 10 primeres pagines que trobem sobre ell.



- mòdul

  - api que busqui imatge
  - api que busqui les 100 paraules
  - servei que amagui les parts de la imatge
  - controlador que en funció del hints vagi descobrint parts de la imatge
  - controlador que en cas de guess correcte et digui que ho has aconseguit

- modul separat que faci de crawler:

  - BBDD de noms, hints i encerts




npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev
