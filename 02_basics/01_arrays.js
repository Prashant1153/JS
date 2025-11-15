// // array
// // new only for streak

// const myarray = [0,1,2,3,4,5];
// const newrray = [0,1,2,3,4,5];
// console.log(myarray == newrray); 
// console.log(JSON.stringify(myarray) === JSON.stringify(newrray));// ye true dega kyuki 

// myarray.push(67);
// const lastvalue = myarray.pop(8);
// console.log(myarray);
// console.log(lastvalue);

// /// +++++++++++++++++++
// function isOddOrEven(number) {
//     if( number % 2 !== 0){
//         return"it is an odd number";
//     }
//     else {
//         return "it is even number";
//     }
// }

// console.log(isOddOrEven(5));


/// +++++++++++++++++ convert old string to template literal

const user = "prashant"
const points = 120;
const message = "hey"+user+"you have "+points+"points!"
console.log(message);


// +++++++understaing javascript object ++++++++
const person = {
    firstname: "Prashant",
    lastname:"Pandey",
    age:20,
   introduce: function() {
    console.log(`hi my name is ${this.firstname}${this.lastname} and age is ${this.age}`)
   }
}
console.log(person.firstname);
console.log(person.lastname);
person.introduction();