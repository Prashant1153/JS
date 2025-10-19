// // Dates 

// let myDate = new Date()
// console.log(myDate.toString());// iske andar day month date year time ata h lekin  cordinated universal time ata h 
// console.log(myDate.toDateString()); //sirf date ati h 
// console.log(myDate.toISOString());// date ati h lekin kuch ajib sa ata h 
// console.log(myDate.toJSON());// ye same h iso ke 
// console.log(myDate.toLocaleDateString());//proper format m ati h date only in number not in string 
// console.log(myDate.toLocaleString()); // isme bhi proepr time ata ache se lekin time ke sath 
// console.log(myDate.toTimeString()); // only time but coordinated universal ke sth 
// console.log(typeof myDate);// date h 
// let myCreatedDate = new Date(2025,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());


let date = new Date("01-23-2025")
let mytimestamp =  Date.now()
// console.log(mytimestamp);
// console.log(date.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default')