import React from 'react';
import '../css/App.css';
import '../css/CaseM.css';

function CaseM(props) {
    const handleClick = () => {
        if (props.grille[props.num] !== "") {
            props.changeP(<p>Case déja choisie !</p>);
        } else {
            let grille = props.grille;
            grille[props.num] = props.joueur;
            props.remplirGrille(grille);
            props.changeP("");
            props.joueur === "X" ? props.changeJoueur("O") : props.changeJoueur("X");
        }

    }
    return (
        <>
            <button value="yo" onClick={((e) => handleClick(e))} className="square">{props.grille[props.num]}</button>
        </>
    );
}

export default CaseM;