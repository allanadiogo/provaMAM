import { useState, useRef } from 'react';
import './index.scss';



export default function Index() {

    const [alunos, setAlunos] = useState('');
    const [qtdalunos, setQtdalunos] = useState('');
    const [resposta, setResposta] = useState([]);

    const [arr, setArr] = useState([]);



    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();

    function maior() {
        let x = 0;
        let item = []
        for (item of alunos) {

            if (x < item) {
                x = item;
            }
        }
        return x;
    }

    function media() {
        let x = 0;
        let item = []
        for (item of alunos) {
            x = x + item;
        }
        return x / alunos.length;
    }

    function menor() {
        let x = Infinity;
        let item = []
        for (item of alunos) {

            if (x > item) {
                x = item;
            }
        }
    }

    function calcularalunos() { 
        let array = []      
           for (let cont = 1; cont <= qtdalunos; cont++)
            { array[cont] = cont } 
            setResposta(array) }







    return (
        <main className='main-media'>
            <h1>Calcular Media</h1>

            <div className='div1'>
            <div>
                <p>Quantidade de Alunos:</p>
                <input type="text"  value={qtdalunos} onChange={e => setQtdalunos(e.target.value)} ></input>
                <button onClick={calcularalunos}>OK</button>
            </div>

            <div className="div-1">
             {resposta.map(item => <div>
                <p>Aluno  {item}</p> 
                <input className='' disabled={carregando}/>
            </div>)}
        </div>

          

            <div>
                {erro}
            </div>

            </div>
        </main>
    )
}