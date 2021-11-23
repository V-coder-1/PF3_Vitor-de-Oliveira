const calcular = document.getElementById('calcular');


function imc () {
    const mensalmente= document.getElementById('mensalmente').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (mensalmente !== '*(1+i)**-1/i' && juros !== '' && parcelas !== '') {

        const valorJuros = (mensalmente(juros**2 ,parcelas)).toFixed(1);
        
        let classificacao = '';

        resultado.textContent = ` ${mensalmente}${juros}${parcelas} ${valorJuros} ${classificacao}`;

    }
}
calcular.addEventListener('click', imc);