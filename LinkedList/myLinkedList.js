class newNode{

    constructor(value){
        this.value = value;
        this.next = null;
    }

    getValue(){
        return this.value
    }

    setNext(newNode){
        this.next = newNode;
    }

    getNext(){
        return this.next;
    }
}

class linkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value){
        // created new newNode
        const newNode = new newNode(value)

        // check if the linked list empty:
        if(this.size == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            // when linked list not empty:
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}