import React, { useState, useEffect } from "react";

function Dog(){
 /* 
  const [nome, setNome] = useState("Nancy");
  const [raca, setRaca] = useState("Buldog Francês");
  const [foto, setFoto] = useState("https://placedog.net/300/?id=21");
  const [idade, setIdade] = useState(3);
  const [peso, setPeso] = useState(9.5);
  */

  const [dog, setDog] = useState({
    nome: "Nancy",
    raca: "Buldog Francês",
    foto: "https://placedog.net/300/?id=21",
    idade: useState(3),
    peso: useState(9.5)
  });

  const atualizaHookState = () => {
    setDog(previousState => {
      return { ...previousState, idade: 4, peso: 10.5 }
    });
  }

  return (
    // Na Linha abaixo o <> e usado para envolver o retorno
    <>
      <div>                
        <h1>{dog.nome}<br/><small>Meu cãozinho</small></h1>                
        <p>
          <img src={dog.foto} alt={dog.nome}/>
        </p>
        <ul>
          <li><strong>Raça:</strong> {dog.raca}</li>
          <li><strong>Idade:</strong> {dog.idade} anos</li>
          <li><strong>Peso:</strong> {dog.peso} quilos</li>
        </ul>
      </div>
      <button 
          type="button"                
          onClick={atualizaHookState}
        >Aniversário!</button>
    </>
  );
}

function HookEffect() {
    const [count, setCount] = useState(() => {
        console.log('passou aqui');

        return 0;
    });
    const [calculation, setCalculation] = useState(0);
  
    useEffect( () => {
      setCalculation( () => count * 2 );
      console.log('REDENDER');
    }, [count]);
  
    return (
      <>
        { console.log('RENDER')}
        <p>Contando: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  


function HookState() {
    /*
    *Abaixo esta o estado incial.
    */
  const [cor, setCor] = useState("vermelho");

  const handleOnClick = () => {
    if(cor === 'vermelho'){
        setCor('azul');

        return;
    }
    setCor('vermelho');
  }

  return <div>
    <HookEffect />
    <hr />
    <p>Minha cor favorita é: <strong>{cor}</strong>.</p>
    
    <button
        type="button"
        onClick={handleOnClick}
        >Mudar para {cor === 'vermelho' ? 'azul':'vermelho'}</button>
        <Dog />
  </div>
}

export default HookState;
