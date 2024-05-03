import React, { useState } from 'react'

// Desafio: Criar um componente React de contador com TypeScript.

// Crie um componente de contador simples que exiba um número inicial.
// O componente deve ter botões para incrementar e decrementar o número exibido.
// Utilize TypeScript para garantir a tipagem correta das propriedades e do estado do componente.

// Defina uma interface para o estado do componente e para as propriedades, se necessário.
// Utilize o hook useState do React para gerenciar o estado do contador.
// Implemente funções para lidar com o incremento e decremento do contador.
// Renderize o contador e os botões na interface do componente.
// Este exercício permite que você pratique a criação de componentes simples em React,
//  ao mesmo tempo em que utiliza TypeScript para garantir a segurança dos tipos. Espero que goste do desafio!

interface CounterProps {
  inicialValue: number;
}

const Counter: React.FC<CounterProps> = ({inicialValue}) => {
  const [count, setCount] = useState(inicialValue);
  
  return (
    <>
    <p>Contagem: {count}</p>
    <button onClick={() => setCount(count+1)}>Incrementar</button>
    <button onClick={() => setCount(count-1)}>Decrementar</button>
    </>
  )
}

export default Counter;