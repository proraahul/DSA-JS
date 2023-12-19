// write a program to find tha maximum element in queue in javascript:

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if (this.isEmpty()) {
            return "Queue is empty";
          }
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.items[0];
    }

    isEmpty(){
       return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join(' '));
    }
}

function findMaximumElement(queue){
    if(queue.isEmpty()){
        return "Queue is empty";
      }

    let max = queue.front();

    while(!queue.isEmpty()){
        let curEle = queue.dequeue();
        if(curEle > max){
            max = curEle;
        }
    }
    return max;
}

let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);
myQueue.enqueue(8);

console.log("Original Queue:");
myQueue.print();

const maxElement  = findMaximumElement(myQueue);
console.log("\nMaximum Element:", maxElement);





