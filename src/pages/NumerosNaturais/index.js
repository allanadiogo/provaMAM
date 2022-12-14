import { useState, useRef} from 'react';
import './index.scss';

export default function Index(){

    const [comeco, setComeco] = useState('');
    const [limite, setLimite] = useState('');

    const [resposta, setResposta] = useState('');
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');

    const [arr, setArr] = useState([]);
    const ref = useRef();
    

    
    function Contar(comeco, limite){
        try{
            let array = [];
            let e = 0;
            let i = '';
            for(i = comeco; i <= limite ; i++){
                array[e]= i;
                e++
            }
           
            setArr(array)
            
            
    }
    catch (err) {
        ref.current.complete()
        setCarregando(false)
        if (err.message.status === 401) {
            setErro(err.message.data.Erro)
        }
    }
}

    
    

    function VerificarClick(){
        let x = Contar(comeco, limite);
        setResposta(x);
    }

    

    return(
        <main className='main4'>
            <a href="/">Voltar</a>
            <h1>Numeros Naturais</h1>

            <div>
            

            
        
        <input type="text" value={comeco} onChange={e => setComeco(e.target.value)} ></input>
        
        </div>

        <div>
        <input type='text' value={limite} onChange={e => setLimite(e.target.value)}></input>
        </div>

        <div>
        <button className='' onClick={VerificarClick} disabled={carregando}>
            OK
        </button>
        </div>

        <div className='div-1'>
            {arr.map((item) => <p>
                {item}
            </p>)}
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
}