export function Definition(){
  //spread operator
  var plus = (x,y) => { return x + y; }
  help();

  var values = [1,2];
  var sum = plus(...values); // it will return 3
  console.log(sum);
}

function help() {
  console.log('help information');
}

export function SpreadOutDemo() {
  var a = [2,3,4]; var b=[1,...a,5];
  console.log( b );
}

// default Parameter
export function defaultParameter(x,y) {
        x = x || 11;
        y = y || 31;
        console.log( x + y );
}
export function defaultParaES6(x = 11, y = 31) {
  console.log(x + y);
}
// foo(); // 42
// foo( 5, 6 );  // 11
// foo( 5 ); // 36
// foo( null, 6 ); // 17
