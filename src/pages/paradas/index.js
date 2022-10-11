import { useState, useRef, useEffect} from 'react';

export default function Index(){

    const [Capac, setCapac] = useState();
    const [Con, setConsumo] = useState();
    const [Dist, setDistancia] = useState();


    const [resposta, setResposta] = useState('');
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();
    

    
    function GasolinaParadas(){
        try{
            let x = Dist / Capac;
            let y = x / Con

            setResposta(Math.ceil(y))
    }
    catch (err) {
        ref.current.complete()
        setCarregando(false)
        if (err.message.status === 401) {
            setErro(err.message.data.Erro)
        }
    }
}

useEffect(() => {
    GasolinaParadas()
}, [Capac, Con, Dist])

    
    



    

    return(
        <main>
            <h1>Verificar quantas paradas precisam ser feitas</h1>

            <div>

            
        
        <input type="text" value={Con} placeholder="consumo" onChange={e =>  setConsumo(e.target.value)} ></input>
        
        </div>

        <div>
        <input type='text' value={Capac}  placeholder="capacidade" onChange={e =>  setCapac(e.target.value)}></input>
        </div>

        <div>
        <input type='text' value={Dist}  placeholder="distancia" onChange={e =>  setDistancia(e.target.value)}></input>
        </div>

        <div>
        <button className='' onClick={GasolinaParadas} disabled={carregando}>
            Verificar
        </button>
        </div>

        <div>
            Quantas paradas eu preciso fazer?  <span> {resposta} </span>
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
}