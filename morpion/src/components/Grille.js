import React, { useState } from 'react';
import '../css/App.css';
import '../css/Grille.css';
import CaseM from './CaseM';

function Grille(props) {
    const [textP, setTextP] = useState("");

    const changeP = (newText) => {
        setTextP(newText)
    }

    const renderCaseM = (i) => {
        return (
            <>
                <CaseM num={i} grille={props.grille} changeP={changeP} remplirGrille={props.remplirGrille} changeJoueur={props.changeJoueur} joueur={props.joueur} />

            </>)

    }

    return (
        <div>
            <div className="board-row">
                {renderCaseM(0)}
                {renderCaseM(1)}
                {renderCaseM(2)}
            </div>
            <div className="board-row">
                {renderCaseM(3)}
                {renderCaseM(4)}
                {renderCaseM(5)}
            </div>
            <div className="board-row">
                {renderCaseM(6)}
                {renderCaseM(7)}
                {renderCaseM(8)}
            </div>
            <br />
            { textP}
        </div >
    );
}

export default Grille;