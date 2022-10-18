import { useState, useRef} from 'react';
import './index.scss';

export default function Index(){

    const [tamanho, setTamanho] = useState('');
    

    const [resposta, setResposta] = useState('');
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const [arr, setArr] = useState([]);
    const ref = useRef();
    

    
    function  Linha(tamanho){
        try{
        let linha = 0;
        let array = []
        while(linha < tamanho){
            array[linha] = "*"
            linha++
    
        }
        setArr(array)
    }
      
    catch (err) {
       
    }
}

    
    

    function VerificarClick(){
        let x = Linha(tamanho);
        setResposta(x);
    }

    

    return(
        <main className='main5'>
            

            <div className='div1'>
            <h1>Linhas</h1>

            
        
        <input type="text" value={tamanho} onChange={e => setTamanho(e.target.value)} ></input>
        
        </div>

      
        <div>
        <button className='' onClick={VerificarClick} disabled={carregando}>
            OK
        </button>
        </div>

        <div className="div-1">
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
