const score = 258
console.log(score);
const balance = new Number(5131)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);// string m change h gya aur length bhi bata raha h 
console.log(balance.toFixed(2));// isse jo precision value h woo fixed ho jati h ..


let othernumber = 1123.8966

console.log(othernumber.toPrecision(4));// ye round of kar deta h aur starting se jitni value chaiye woo hi leta h ye depend nahi karta point ke phele kya h ya point ke badd kya only if jab round of ho raha ho 

let hundreds = 1000000
console.log(hundreds.toLocaleString());// ye zero ko count karne m help karte h number system ki tarah .. US value ati h INDIAN VALUE KE LIYE ...
console.log(hundreds.toLocaleString('en-IN'));// indian type h 



//+++++++++++++++++++++++++++++++MATHS +++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));// sign change kar deta h negative ka positive aur positive positive hi rheta h woo change nahi hota .
// console.log(Math.round(-4.3));
// console.log(Math.ceil(4.2));// agar jara se bhi jada hua 4 se toh next value dedega 
// console.log(Math.floor(4.9));// ye lower hi deta h 
// console.log(Math.min(4,3,994,6,5554,88226,5822,30));// array ke unadr lower value bata deta h 
// console.log(Math.max(4,3,994,6,5554,88226,5822,30));// array ke unadr upper value bata deta h 


console.log(Math.random());// random value ati h 0 se 1 ke beech m 
console.log(Math.floor(Math.random()*10) +1);// point ke ek baad value change ho jayegi aur 10 se multiply kara h value 10 tak ae floor ka use kara h min value h point ke baad ki na aye .

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) +min);// isme range ke liye max - min kar diya h aur + 1 kar diya h zero value ko avoid karne ke liye uske baad min value add kari h jo humko chaiye..

