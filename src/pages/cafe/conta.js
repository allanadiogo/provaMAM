export function CalcularCafe(estudante,recipiente,mililitros){
    if(estudante,recipiente,mililitros === 0 ) throw new Error("Digíte os números")
    let L = (estudante * mililitros ) / 1000;
    let teste = L/recipiente;
    let final = Math.ceil(teste) * recipiente
 
    return final

}