
import './index.scss'
import { useState, useRef,useEffect} from 'react';
import { VerificarGanhos }  from '../../services/index.js'
export default function Index(){

    const [gastos, setGastos] = useState(0);
    const [ganhos, setGanhos] = useState(0);

    const [resposta, setResposta] = useState('');
    console.log(resposta)
    

    function Verificar (){
         try {
            
        let chamada = VerificarGanhos(ganhos, gastos)
        setResposta(chamada)
            
         } catch (err) {
            setResposta(err.message)            
         }
    }
    
 
      
        useEffect(() => {
           Verificar()
        }, [])
        


    

    return(
        <main className='todo-familia'>

            <h1>Verificar ganhos e gastos </h1>

            <div>

          
        <h1> Gastos </h1>
        <input  value={gastos} type='number' min={0} onChange={e => setGastos(e.target.value)} ></input>
        
        </div>

        <div>
            <h1> Ganhos </h1>
        <input  value={ganhos} type='number' min={0} onChange={e => setGanhos(e.target.value)}></input>
        </div>

        <div>
        <button  onClick={Verificar}>
            Verificar 
        </button>
        </div>

        <div>
           <span> {resposta} </span>
        </div>

        
        </main>
    )
    }
