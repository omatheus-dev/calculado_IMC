import { useEffect, useState } from "react";

import styles from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [avaliacao, setAvaliacao] = useState('');

    function calculaIMC(e) {
        e.preventDefault();
        const res = (peso / (altura * altura))
        setImc(res.toFixed(2))
    }   

    useEffect(() => {
        if (imc < 18.5) setAvaliacao(', Baixo Peso.');
        else if (imc <= 24.9) setAvaliacao(', Peso Normal.');
        else if (imc <= 29.9) setAvaliacao(', Excesso de Peso.');
        else if (imc <= 34.9) setAvaliacao(', Obesidade.');
        else setAvaliacao(', Obesidade Extrema.');
    }, [imc]);

    return (
        <div className={styles.container}>
            <h1>Calculadora de IMC</h1>
            <form>
                <label htmlFor="altura">ALTURA</label>
                <input id="altura" required 
                className={styles.input} type="number"
                onChange={evento => parseInt(setAltura(evento.target.value))}/>
                <label htmlFor="peso">PESO</label>
                <input id="peso" required 
                className={styles.input} type="number"
                onChange={evento => parseInt(setPeso(evento.target.value))}/>
                <button className={styles.button} type="submit" 
                onClick={calculaIMC}>
                Avaliar meu IMC
                </button>
            </form>
            <h2>Avaliação: {imc === 0 ? '' : `${imc}${avaliacao}`}</h2>
        </div>
    )
}

export default Formulario

