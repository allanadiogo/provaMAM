import { useState, useEffect} from 'react';
import './index.scss'

export default function Index(){

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacional, setNacional] = useState(false);


    const [resposta, setResposta] = useState('');


    function ingressosCinema(inteiras, meias, diaSemana, nacional) {

        try{
            
        
        let total = 0;
        let msg = 'O total a se pagar pelos ingressos é de R$';
    
        if (nacional === true) {
            total =  (meias + inteiras) * 5.0;
            return msg + total
        }
            
        else if (diaSemana === "quarta-feira") {
            total = (inteiras + meias) * 14.25
            return msg + total            
            }
            else {
                total = (inteiras * 28.5) + (meias * 14.25 ) ;
            }
            return total;
       
        } 
    catch (err) {
            setResposta(err.message)            
         }

    function calcularClick(){
        let x = ingressosCinema(inteiras,meias,diaSemana, nacional);
        setResposta(x);

    }

    


    


    return(
        <main className='todo-tem'>
            <h1>Total Compra ingresso</h1>



        <p>Digite quantas inteiras deseja: </p>

        <input type="number" min={0} value={inteiras} onChange={e => setInteiras(Number(e.target.value))} ></input>


        <p>Digite quantas meias deseja: </p>
        <input type="number" min={0} value={meias} onChange={e => setMeias(Number(e.target.value))} ></input>

        <p>Que dia da semana deseja assistir?: </p>
        <select  type="text" value={diaSemana} onChange={e => setDiaSemana(e.target.value)}  >
            <option >segunda-feira</option>
            <option >terça-feira"</option>
            <option >quarta-feira</option>
            <option  >quinta-feira</option>
            <option >sexta-feira</option>
            <option >sabado</option>
            <option >domingo</option>
        </select>



<p>Nacional? </p>

<input type="checkbox" value={nacional} onChange={e => setNacional(e.target.checked)} ></input>



        <div>
        <button className='botao-tem' onClick={calcularClick} >
           Verifique
        </button>
        </div>

        <div className='resposta-tem'>
       <span> {resposta}  </span>
        </div>



        </main>
    )

    }
}