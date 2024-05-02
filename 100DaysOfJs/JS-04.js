// write a function called checkTriangleType that takes three parameters representating the lengths of the sides of a triangle. the function should return a string indicating the type of triangles: 'equilateral', 'isosceles', 'scalene' or 'not a triangle'.


function checkTriangleType(a,b,c){
        if(a===b && b==c) return 'equilateral';

        if(a==b || b==c || a==c) return 'isosceles';

        return 'scalene';
}


console.log(checkTriangleType(3,3,3)); //output: 'equilateral'
console.log(checkTriangleType(3,4,3)); //output: 'isosceles'
console.log(checkTriangleType(5,8,6)); //output: 'scalene'


// if all three sides are equal length, return 'equilateral'
//  else if two sides are equal length, return 'isosceles'
//   else return 'scalene' all are different lengths