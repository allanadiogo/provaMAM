import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'

export default function Juros() {
    const [capital, setCapital] = useState();
    const [entrada, setEntrada] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();

    const [montante, setMontante] = useState();
    const [juros, setJuros] = useState();
    const [parcela, setParcela] = useState();
    const [resposta, setRes] = useState();
    const navigate = useNavigate();


    function Montante() {

        try {
            if (capital >= 0 && taxa >= 0 && tempo >= 0) {
                let entradacap = capital - entrada;
                let newtaxa = taxa / 100;
                let mont = entradacap * ((1 + newtaxa) ** tempo);
                let juro = mont - entradacap;
                let parc = mont / (tempo * 12);




                setJuros(juro.toFixed(2));
                setParcela(parc.toFixed(2));
                setMontante(mont.toFixed(2));
            }
            else {
                setRes("apenas números positivos")

            }

        }
        catch {


        }

    }
    useEffect(() => {
        Montante()
    }, [entrada, capital, taxa, tempo])


    return (
        <main className="mainCompostos">
            <h1>JUROS COMPOSTOS</h1>
            <div className="div1">
                <input placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} />
                <input placeholder="Entrada" value={entrada} onChange={(e) => setEntrada(e.target.value)} />
                <input placeholder="Taxa" value={taxa} onChange={(e) => setTaxa(e.target.value)} />
                <input placeholder="Tempo em anos " value={tempo} onChange={(e) => setTempo(e.target.value)} />
                <input placeholder="Montante" disabled="disabled" value={montante} />
                <input placeholder="Juros" disabled="disabled" value={juros} />
                <input placeholder="Parcela" disabled="disabled" value={parcela} />
                <div>{resposta}</div>

                <div className="div-btn-acai">
                    <button className='' onClick={Montante} >
                        OK
                    </button>
                </div>

            </div>
        </main>
    )

}