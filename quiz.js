// 1. ans= Trigger


2.
function secondIndexOf(s1, s2) {
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex + 1);
  }

  console.log(secondIndexOf("WHite rabbit", "it"));

// let a = 100;
// let b = 200;

// 3.
// function equals(a,b){
// if(a===b){
//   return "EQUAL";
//   return "UNEQUAL";}
// }

// console.log(equals(100,1000));

// 4.
// let age = 10;

// if(age>18){
//   console.log("Old enough");
// }else{
//   console.log("Too young");
// }

// // ternary operator: age > 18 ? console.log("Old enough") : console.log("Too young");
// 5.
// function repdigit(num,b){
// let prev = -1;
// while (num != 0) {
//       let digit = num % b;
//       num = parseInt(num/b);
//       if (prev != -1 && digit != prev)
//           return 'No Repdigit!';
//       prev = digit;
//   }
//   return 'Repdigit!';
// }

// 6.
// function unequal(a,b,c){
//   if (a!==b && b!==c && a!==c){
//     return "true";
//   }else{
//     return "false"
//   }
// }

// // ternary operator: 
// //  function unequal (a,b,c){
// //   return (a!==b && b!==c && a!==c )? true:false
// // }

// console.log(unequal(1,2,3));
// console.log(unequal(1,0,2));


// // 7. The first and third alerts are going to execute except the second one which has the result of undefined.

// 8.
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }