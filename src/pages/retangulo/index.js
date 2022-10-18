import { useState, useRef} from 'react';


export default function Index(){

    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [carregando, setCarregando] = useState('');

    const [resposta, setResposta] = useState('');
    const ref = useRef();


function desenharretangulo(base,altura) {

    if(base = altura) throw new Error('isso é um quadrado');
    if (isNaN(base) || isNaN(altura) || base < 0 || altura  < 0 ) throw new 
    Error('Digite um número valido!');

    for (let linha = 1; linha < altura; linha++) {
        for (let coluna =1; coluna < base; coluna++) {
            process.stdout.write("*");
        }

    }

    return  process.stdout.write;
}
 


function calcularClick(){
    let x =  desenharretangulo(base,altura);
    setResposta(x);
    
}


return(
    <main>
        <h1>Forma de um Retangulo</h1>

        <div>

        
    
    <input type="text" value={base} placeholder="Digite a base" onChange={e =>  setBase(e.target.value)} ></input>
    
    </div>

    <div>
    <input type='text' value={altura}  placeholder="Digite a altura" onChange={e =>  setAltura(e.target.value)}></input>
    </div>

    <div>
        <button className='' onClick={calcularClick} disabled={carregando}>
            Calcular
        </button>
        </div>

        
        <div>
            <span>{resposta} </span>
        </div>

   
</main>

)
}