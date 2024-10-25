// Map basically agar mujhe aik array se aik or array bnana hai ussi se related with some specific changes

// let arr = [2,3,4,5];
// console.log(arr);

// let brr = [];
// for(const ele of arr){
//     brr.push(ele*2);
// }
// console.log(brr);

// function twice(ele){
//     return ele*2;
// }
// function square(ele){
//     return ele*ele;
// }
// let brr = arr.map(twice);
// let brr = arr.map(square);
// console.log(brr);


// let brr = arr.map(function(ele){
//     return ele*ele;
// });
// console.log(brr);

// let brr = arr.map((ele)=>{     //this is arrow function
//     return ele*ele;
// });
// console.log(brr);


// arr = arr.map(function(ele){
//     return ele*ele;
// });
// console.log(arr);


// let brr = arr.map(ele => ele*3);
// console.log(brr);

              //we have seen the above methods which i am going to write down

function twice(ele){
    return ele*ele;
}   

let arr = [2,3,4,5];
console.log(arr);

arr = arr.map(twice);
console.log(arr);

arr = arr.map(function(ele){
    return ele+10;
});
console.log(arr);

arr = arr.map((ele)=>{
    return ele/10;
});
console.log(arr);

arr = arr.map(ele => ele*10);
console.log(arr);