import { useState, useRef} from 'react';

export default function Index(){

    const [alunos, setAlunos] = useState('');
    
    const [resposta, setResposta] = useState('');
    const [media, setMedia] = useState('');
    const [maior, setMaior] = useState('');
    const [menor, setMenor] = useState('');


    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();

    
  
 



    return(
        <main className='main-media'>
            <h1>Calcular Media</h1>
            
            
            <div>
        <h1>Quantidade de Alunos:</h1>
        <input type="text" onChange={e => (e.target.value)} ></input>
        <button>OK</button>
        </div>

        <div>

       
        <span>
           Auno 1: {resposta} 
        </span>

        <button className=''  disabled={carregando}>
            Calcular
        </button>
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
    }