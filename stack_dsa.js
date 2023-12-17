// stack Class
class Stack{

    // Array is used to implement to stack
    constructor(){
        this.items = [];
    }

    // check if the stack is empty
    isEmpty(){
        return this.items.length == 0;
    }
    //  add element to stack
    add(element){
        this.items.push(element);
        console.log(element + ' pushed into stack');
        return true;
    }

    // remove element from stack 
    remove(){
        if(this.items.length > 0)
        return this.items.pop();
    }

    // view the last/Top element
    peek(){
        return this.items[this.items.length-1]
    }

    // the size of the stack
    size(){
        return this.items.length;
    }

    // empty the stack
    clear(){
        this.items = [];
    }
}

// creating object for stack class
let stack = new Stack();

console.log('Stack is empty: ' + stack.isEmpty());

stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);

console.log('Elements present in stack: ' + stack.items);

console.log(stack.remove() + ': popped from stack');
console.log('Top element is: ' + stack.peek());
console.log('stack is empty: ' + stack.isEmpty());
console.log('size of the stack: ' + stack.size());
console.log('Elements present in stack: ' + stack.items);
stack.clear();
console.log('Elements present in stack: ' + stack.items);