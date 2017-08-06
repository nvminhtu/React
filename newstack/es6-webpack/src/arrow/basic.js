// in ES6
export function basicArrow() {
	let squares = [1,2,3].map(x => x*x);
	console.log(squares); 	
}

// in ES5
/* function basicArrow() {
	var squares = [1,2,3].map(function(x){
		return x*x;
	});
	console.log(squares);	
} */
