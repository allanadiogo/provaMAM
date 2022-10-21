import { useEffect, useState } from 'react'
import './index.scss'
import{  CalcularCafe  } from '../../pages/cafe/conta.js'

export default function Cafe(){
    const[estudante, setEstudante] = useState(0)
    const [recipiente, setRecipiente] = useState(0)
    const[milimetros,setMilimetros] = useState(0)
    const[resposta, setResposta] = useState(0)


    function Cafe(){
        try {
            let final = CalcularCafe(estudante,recipiente,milimetros)
            setResposta(final)
        }

        catch (err) {
            setResposta(err.message)
        }
    }

    useEffect(() =>{
        Cafe()
    },[estudante,recipiente,milimetros])

    return(
        <main className='sim'>
            <h1> Café </h1>

            <div>
            Insira a Quantidade de Estudantes <input type='number' min={0} value={estudante} onChange={e => setEstudante(e.target.value)} />
            </div>
            <div>
            Insira a Quantidade de Litros do recipiente <input type='number' min={0} value={recipiente} onChange={e => setRecipiente(e.target.value)} />
          </div>
          <div>
            Insira a Quantidade de mililitros <input type='number' min={0} value={milimetros} onChange={e => setMilimetros(e.target.value)} />
          </div>

          <div>
            <span> {resposta} </span>
        </div>
          
            </main>

    )}