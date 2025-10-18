const name = "Prashant"
const repoCount = 4
// console.log(name + repoCount +"value");

console.log(`this is my name ${name} these are my repo count ${repoCount}`);


const value = new String("pras-ha-n-t-t")

// console.log(value[0]);
// console.log(value.__proto__);

// console.log(value.length);
// console.log(value.toLocaleUpperCase());
console.log(value.charAt(2));// string ke andar chater kis position pe h
console.log(value.indexOf('t'));// t kis postion pe h ye pata karna h toh ye use hota 

const newstring = value.substring(0,4)
console.log(newstring);// divide karne ke liye string ko 

const anotherString = value.slice(-8,4)
console.log(anotherString);

let str3 = "    prashant    "
console.log(str3);
console.log(str3.trim());// agge piche sabhi spaces ko hata dete h 



let url = "https://prashant.com/hitesh%20pandey"
console.log(url.replace('%20',' '));// jab website pe koi bhi space khali dalenge toh usme ayega ki % koi bhi dal dega uski jagah browser toh usko permanet chanege ke ke liye replace ka use karte h 

console.log(url.includes("prashant"))// ye batata h ki ye keyword value uske andar h ki nahi 

console.log(value.split('-'));// arrays m convert kar deta h string ko jaha se carna h wahi se kar deta h jese yaha sperator h -







// >>>>>>>>>>>>>>>>>>>>PROTOTYPE        <<<<<<<<<<<<<<<<<<<<

let str10 = 'cscscwec-cscsc-eewfwfef--efsdcece-e'
console.log(str10.anchor("prashant"));// ye convert kar deta h anchor html format m 

console.log(str10.at(-10));// ye bata deta h iss position pe konsa string value h
console.log(str10.big());// ye ek html tag h jo ki big ke nadar dal deta h 

console.log(str10.repeat(1));// repeat kar deta h jitne baar isko bologe 

console.log(str10.match(/-/));// This finds only the first occurrence of the dash (-) in the string str10.
console.log(str10.match(/-/g));// : The g flag stands for global search. This statement finds all occurrences of the dash in the string str10. match off rah gya h 
