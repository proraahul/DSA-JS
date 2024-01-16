function winner(arr, n){
    // code here
    let ans = '';
    let count = 0;
    let mm = new Map();
    
    for(let i=0; i<n; i++){
        if(!mm.has(arr[i])){
            mm.set(arr[i], 0)
        }
        mm.set(arr[i], mm.get(arr[i]) + 1);
        if(count <= mm.get(arr[i])){
            if(count === mm.get(arr[i])){
                if(ans.localeCompare(arr[i]) > 0){
                    ans = arr[i];
                }
            }else{
                ans = arr[i];
            }
            count = mm.get(arr[i])
        }
    }
    let res = [];
    res[0] = ans;
    res[1] = count.toString();
    return res;
}

let n = 13;
let arr = ['john','johnny','jackie','johnny','john',
    'jackie','jamie','jamie','john','johnny','jamie',
    'johnny','john']
let result = winner(arr, n);
console.log(result);