function countFreq(str, txt){	 
	let a = str.length;	 
	let b = txt.length;	 
	let res = 0;

	for(let i = 0; i<a; i++){

		// for(let j = 0; j<i; j++){

			if(str[i] == txt[i]){ 
				res++;
			}
			break;
		}
		return res;
	// }
}

let string = "the quick brown fox jumps over the lazy dog";
let text = "the"; 

console.log(countFreq(string, text));