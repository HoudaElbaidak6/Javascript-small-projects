/* let success = true;

let promesse = new Promise(function (resolve, reject) {
  if (success) {
    let a = 2;
    let b = 7;
    let res = a + b;
    resolve(res);
  } else {
    reject("erreur de calcul");
  }
});
 */

/* function NombreEntier(nbre) {
  let promesse = new Promise(function (resolve, reject) {
    if (nbre % 2 == 0) {
      res = nbre * nbre;
      resolve(res);
    } else {
      reject("erreur : Nombre impaire");
    }
  });
  return promesse;
}

let prom = NombreEntier(4);
prom
  .then((resultat) => {
    console.log(resultat);
  })
  .catch((erreur) => {
    console.log(erreur);
  });
 */

/* function sommeTab(n) {
  let tab = [2, 10, 30, 4, -1, 0];
  let somme = 0;
  let promesse = new Promise(function (resolve, reject) {
    if (n <= tab.length && n > 0) {
      for (let i = 0; i < tab.length; i++) {
        somme = somme + tab[i];
      }
      resolve(somme);
    } else {
      reject("Index of Array out of bounds");
    }
  });
  return promesse;
}

let prom = sommeTab(4);
prom
  .then(function (res) {
    console.log(res);
  })
  .catch(function (res) {
    console.log(res);
  }); */

/* let promesse = new Promise(function (resolve, reject) {
  let phrase = " I hate Bissara ";
  if (phrase.length > 5) {
    let regex = /(\w+) (\w+) (\w+)/;
    resolve(phrase.replace(regex, "$3 $2 $1"));
  } else {
    reject("Phrase incorrect");
  }
});

promesse
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
 */

function RemplirTab(n) {
  let tab = [];

  let promesse = new Promise(function (resolve) {
    for (let i = 0; i < n + 1; i++) {
      tab[i] = i + 1;
    }
    resolve(tab);
  });
  return promesse;
}
let prom = RemplirTab(4);
prom.then((rem) => {
  console.log(rem);
});



