export  function VerificarGanhos(ganhos, gastos) {
    let porcentagemGastos = (gastos / ganhos) * 100;
    console.log(porcentagemGastos)
    if (porcentagemGastos <= 30) {
        return "Parabéns, está gerenciando bem seu orçamento!";
    }
    else if (porcentagemGastos <= 50) {
        return "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
    }
    else if (porcentagemGastos <= 80) {
        return "Atenção, melhor conter os gastos!";
    }
    else if (porcentagemGastos <= 100) {
        return "Cuidado, seu orçamento pode ficar comprometido!";
    }
    else if(porcentagemGastos > 100) {
        return "Orçamento comprometido! Hora de rever seus gastos!";
    }

} 