// Queue class
class Queue{
 
    // Array is used to implement a Queue
    constructor(){
        this.items = [];
    }

    // check if the queue is empty
    isEmpty(){
        // return true if the queue is empty
        return this.items.length == 0;
    }

    // add element to the queue
    enqueue(element){
        this.items.push(element);
        console.log(element, + 'enqueued to queue');
    }

    // remove the element from the queue
    dequeue(element){
        // return underflow when called on empty queue
        if(this.isEmpty())
        return 'underflow';

        return this.items.shift();
    }

    // view the first element
    front(){
        // return the front element without removing it.
        if(this.isEmpty())
        return 'No elements in Queue';
        return this.items[0];
    }

    // view the last element
    rear(){
        // return the rear element of the queue without removing it.
        if(this.isEmpty())
        return 'No elements in Queue';
        return this.items[this.items.length-1];
    }

    // the size of the queue
    size(){
        return this.items.length;
    }

    // empty the queue
    clear(){
        this.items = [];
    }
}

// creating object for queue class
let queue = new Queue();

console.log('Queue is empty :', queue.isEmpty());

// Adding element to the queue:
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.items) //queue contains [10,20,30,40]

// remove 10
console.log(queue.dequeue() + ' dequeue from queue');

// queue contain [20,30,40]
// front is now 20
console.log('Front item is: '+ queue.front());

// printing the rear element Rear is 40
console.log('Rear item is: ' + queue.rear());

console.log('Queue is empty: ' + queue.isEmpty());

console.log('size of the queue: ' + queue.size());

console.log('Element present in queue: ' + queue.items);

queue.clear();

console.log('Element present in queue: ' + queue.items);

