import { useState, useRef, useEffect} from 'react';
import './index.scss'

export default function Index(){

    const [temperatura, setTemperatura] = useState('');
    
    const [resposta, setResposta] = useState('');
    

    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();

    
  
    function TemperaturaVerificar(temperatura){
      try{

    let msg = ""; 
    

    if ( temperatura < 36) {
        msg = "Hiportemia";

    }

    else if(temperatura >= 36 && temperatura < 37.6) {
        msg = "Normal";

    }

    
    else if(temperatura >= 37.6 && temperatura  < 39.6) {
        msg = "Febre";

    }
    
    else if(temperatura >= 39.6 && temperatura  < 41) {
        msg = "Febre Alta";

    }

    else {
    msg= "Hipertemia";
    }
    

    return msg; 

}  catch (err) {
    ref.current.complete()
    setCarregando(false)
    if (err.message.status === 401) {
        setErro(err.message.data.Erro)
    }
   
    }


    function calcularClick(){
        let x = TemperaturaVerificar(temperatura);
        setResposta(x);
        
    }


    return(
        <main className='todo-tem'>
            <h1>Verificar Temperatura</h1>
          
        
       
        <p>Coloque sua Temperatura: </p>
        <input cla type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)} ></input>
       
     

        <div>
        <button className='botao-tem' onClick={calcularClick} disabled={carregando}>
           Verifique
        </button>
        </div>

        <div className='resposta-tem'>
            A situação para a sua temperatura é<span> {resposta}  </span>
        </div>


        <div>
            {erro}
        </div>

        
        </main>
    )
    }
}