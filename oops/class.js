class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }


// Getter
get Area(){
    return this.calcArea();
}

// Method
calcArea(){
    return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square)