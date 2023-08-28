// diffrent way to declare varible 
1.
const accountId=123345;

2.
let accountName="ICICI";
3.
var accountHolder=" Aman Raj";
4.
accountCity=" patna"  // prefer to not use it just like var 
5.
let accountState;  // output undefined

/*

prefer to not use var
 because of scoping 
*/

var unknown;  // undefined 

console.table([accountId,accountHolder,accountName,accountCity,accountState,unknown]);
//  accountId=12344;  not allowed in javascript 
// console.log(accountId);