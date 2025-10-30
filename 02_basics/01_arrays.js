// array
// new only for streak

const myarray = [0,1,2,3,4,5];
const newrray = [0,1,2,3,4,5];
console.log(myarray == newrray); 
console.log(JSON.stringify(myarray) === JSON.stringify(newrray));// ye true dega kyuki 

myarray.push(67);
const lastvalue = myarray.pop(8);
console.log(myarray);
console.log(lastvalue);