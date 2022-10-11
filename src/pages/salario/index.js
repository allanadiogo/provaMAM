import { useState, useRef} from 'react';

import './index.scss'

export default function Index(){

    const [salario, setSalario] = useState('');
    const [bonus, setBonus] = useState('');
    const [desconto, setDesconto] = useState('');

    const [resposta, setResposta] = useState('');
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();
    

    
    function salarioL(salario, bonus, desconto ){
        try{
        let x = salario - desconto
        let y = salario / 100 * bonus
        let z = x + y;
        return z;
        }
        catch(err){
            ref.current.complete()
            setCarregando(false)
            if (err.message.status === 401) {
                setErro(err.message.data.Erro)
            }
        }
}

    
    

    function VerificarClick(){
        let x = salarioL(salario, bonus, desconto);
        setResposta(x);
    }

    

    return(
        <main className="main1">

        <a href="/">Voltar</a>   
            

        <div className="div1">
        <h1>Salário líquido</h1>
            <div>

            
        
        <input placeholder="Salário" type="text" value={salario} onChange={e => setSalario(e.target.value)} ></input>
        
        </div>

        <div>
        <input placeholder="Bõnus" type='text' value={bonus} onChange={e => setBonus(e.target.value)}></input>
        </div>

        <div>
        <input placeholder="Desconto" type='text' value={desconto} onChange={e => setDesconto(e.target.value)}></input>
        </div>

        <div>
        <button className='' onClick={VerificarClick} disabled={carregando}>
            Verificar
        </button>
        </div>

        <div>
           Seu Salário líquido é de  <span>R${resposta} </span>
        </div>

        <div>
            {erro}
        </div>

        </div>

        
        </main>
    )
}