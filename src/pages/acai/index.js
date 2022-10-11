import { useState , useRef, useEffect } from 'react';

export default function Index(){

    const [pequeno, setPequeno ] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);

    const [total, setTotal] = useState('');


    const [resposta, setResposta] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('')
    const ref = useRef();

    
    function compra(acai1, acai2, acai3, desconto){


        let pequeno= acai1 * 13.50;
        let medio = acai2 * 15.00;
        let grande = acai3 * 17.50;
        let x= pequeno+medio+grande;
        let y = (pequeno + medio + grande ) * desconto / 100;
        let final = x-y;
        return final
        setTotal (final); 
    
    if (acai1 < 0 ||  acai2 < 0 ||  acai3 < 0 || desconto < 0 ){
        setTotal('Valor invalido')
    }

    else if(desconto === 100){
        setTotal('Free sale')
    }

}

    function calcularClick(){
        let x = compra(pequeno, medio, grande, desconto);
        setResposta(x);
    }

    

    return(
        <main>
            <h1>Compra Açai</h1>
            <div>
        
        <input type="text" value={pequeno} onChange={e => setPequeno(Number(e.target.value))} ></input>
        <input type="text" value={medio} onChange={e => setMedio(Number(e.target.value))}></input>
        <input type="text" value={grande} onChange={e => setGrande(Number(e.target.value))}></input>
        </div>

        <div>
        <input type='text' value={desconto} onChange={e => setDesconto(Number(e.target.value))}></input>
        </div>

        <div>
        <button className='' onClick={calcularClick} disabled={carregando}>
            Calcular
        </button>
        </div>

        <div>
            O total é <span> {resposta} </span>
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
}