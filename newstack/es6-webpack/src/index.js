
// cach 1: require javascript files
/* var variables = require('./variables.js');
variables("Hello world"); */

// cach 2: import module từ 1 file
/* import { speak } from './variables';
console.log(speak()); // => 'moo' */

// cach 3: import multi modules in one file
// 1. Demo CONST, LET DATA --------------------------

// import {
//   PI as PIdata,
//   speak as cowSpeak,
//   eat as cowEat,
//   drink as cowDrink,
//   letVariables as letData
// } from './variables'
// console.log(PIdata);
// console.log(cowSpeak());
// // call Letdata
// letData();

// thử nghiệm function Scope và block Scope
// import {
//   funcScope,
//   blockScope
// } from './variables'
//
// funcScope();
// blockScope();

// 2. DEMO TEMPLATE STRINGS-----------------------------------------
/* import {
  basic as basicTemplate,
  multiline as multiLine,
  multilineBreak as multilineBreak,
  multilineItems as multilineItems
} from './template'

basicTemplate();
multiLine();
multilineBreak();
multilineItems(); */

// 3. ARROW FUNCTION --------------------
// import {
//   basicArrow,
//   mapAndArrow,
//   mathFunc,
//   arrowAndString
// } from './arrow'
//
// basicArrow();
// mapAndArrow();
// mathFunc();
// arrowAndString();

// 4. DEFINITION --------------------
//import { Definition, SpreadOutDemo, defaultParameter, defaultParaES6} from './definition'
//Definition();
//SpreadOutDemo();
// defaultParameter(0,45); //56 => wrong if use this way in es5 (not 42?)
// defaultParaES6();
// 5. CLASS ------------------------

// import { KidsGame } from './class';
//
// // We instantiate our named class
// const game = new KidsGame('2Cards','Tu','2017');
// console.log(game);

// 6. OBJECT DESTRUCTURING -----------------
// import { Destructuring, DestructuringAssign } from './objects';
// Destructuring();
// DestructuringAssign();

// 7. ARRAY DESTRUCTURING ----------------
// import {
//   Destructuring,
//   ArrDestructing
// } from './array';
// Destructuring();
// ArrDestructing();

// end file

// 8. MAPS and SETS
//import { CustomMap, KeyMap, MappingFiltering, CustomSet } from './mapSet';
//CustomMap();
//KeyMap();
//MappingFiltering();
//CustomSet();

// 9. Iterators & Generators
// import { Iterators, showTestIterators } from './iterators.js';
// showTestIterators();
//
// console.log('test');
