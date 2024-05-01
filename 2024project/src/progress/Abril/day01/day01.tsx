// Desafio do Dia: Implementar uma Fila (Queue) em TypeScript e React

import { useState } from "react";

// Neste desafio, você deve criar uma implementação de uma fila (queue) utilizando TypeScript e React. Uma fila é uma estrutura de dados que segue o princípio "primeiro a entrar, primeiro a sair" (FIFO - First In, First Out).

// A fila deve suportar as seguintes operações:

// enqueue(item): Adiciona um item à fila.
// dequeue(): Remove e retorna o primeiro item da fila.
// isEmpty(): Retorna verdadeiro se a fila estiver vazia, falso caso contrário.
// peek(): Retorna o primeiro item da fila sem removê-lo.

class Queue<T> {

    private elements: T[];

    constructor(){
        this.elements = [];
    }
    //add item to queue
    enqueue(item: T): void {
        this.elements.push(item);
    }
    //return the first element to queue
    dequeue(): T | undefined {
        return this.elements.shift();
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    //retorna o primeiro elemento na fila sem remover
    peek(): T | undefined {
        return this.elements[0]
    }
}

const MyQueue: React.FC = () => {
    const [queue] = useState<Queue<number>>(new Queue<number>());

    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(7);

    while(!queue.isEmpty()){
        console.log(queue.dequeue());
    }

    return(
        <div>
            {<MyQueue/>}
        </div>
    );
};

export default MyQueue;

