function minAnd2ndMin(arr,n){
    //code here
    let first = arr[0];
    let second = arr[0];
    
    if(n<2)
        return arr;
    
    for(let i=0; i<n; i++){
        if(arr[i] < first)
            first = arr[i];
        
    }
    
    for(let i=0; i<n; i++){
        if(arr[i]<second && arr[i]>first)
            second = arr[i];
        
    }
    
    return [first, second];
}
    
    
    let arr=[3,4,7,8,2,5,8];
    let n = arr.length;
    
    let result = minAnd2ndMin(arr,n);
    console.log(result);