// Desafio do Dia: Implementar uma Pilha (Stack) em TypeScript e React

// Neste desafio, você irá implementar uma pilha (stack) utilizando TypeScript e React. Uma pilha é uma estrutura de dados que segue o princípio "último a entrar, primeiro a sair" (LIFO - Last In, First Out).

// A pilha deve suportar as seguintes operações:

// push(item): Adiciona um item ao topo da pilha.
// pop(): Remove e retorna o item no topo da pilha.
// isEmpty(): Retorna verdadeiro se a pilha estiver vazia, falso caso contrário.
// peek(): Retorna o item no topo da pilha sem removê-lo.

class Stack<T> {

    private elements: T[];
    
    constructor(){
        this.elements = [];
    }

    push(item: T): void {
        this.elements.push(item);
    }
    
    pop(): T | undefined {
        if(!this.isEmpty()){
            return this.elements.pop();
        }
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    peek(): T | undefined {
        if(!this.isEmpty()){
            return this.elements[this.elements.length-1];
        }
       
    }
}