import React, { useState } from 'react';
import '../css/App.css';
import Grille from './Grille';

function App() {
  const [joueur, setJoueur] = useState("X");
  const [grille, setGrille] = useState(["", "", "", "", "", "", "", "", ""]);
  const [vainqueur, setVainqueur] = useState(0);

  const changeJoueur = (newJoueur) => {
    setJoueur(newJoueur);
  }

  const calculateWinner = (grille) => {
    const winCombi = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombi.length; i++) {
      const [a, b, c] = winCombi[i];
      if (grille[a] === grille[b] && grille[a] === grille[c] && grille[a] !== "") {
        return grille[a];
      }
    }
    return 0;
  }

  const resetGrille = () => {
    let grilleVide = ["", "", "", "", "", "", "", "", ""]
    setGrille(grilleVide);
    setVainqueur(0);
  }

  const remplirGrille = (newGrille) => {
    setGrille(newGrille);
    setVainqueur(calculateWinner(grille));
    console.log(calculateWinner(grille));
  }

  return (
    <>
      { vainqueur === 0 ?
        <div>
          <p>Tour du joueur : {joueur}</p>
          <Grille grille={grille} changeJoueur={changeJoueur} remplirGrille={remplirGrille} joueur={joueur} />
        </div>
        :
        < p > Le vainqueur est {vainqueur} !!</p>}
      <button onClick={resetGrille}>Reset</button>
    </>
  );
}

export default App;
