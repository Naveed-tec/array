// let array = [1,2,3,4,5,"Naveed",7,8];
// console.log(array);

// console.log(array.push(15)); //tells element no. of array not add element
// let a = array.push("Mughal",20);
// console.log(array);

// let a = array.pop();
// console.log(array);
// console.log(array.pop());
// console.log(array);

// let a = array.unshift("Hello");
// console.log(array);

// let b = array.shift();
// console.log(array);

// let a = [...array].reverse();//it will make a copy of array and then print the array
// console.log(a);
// console.log(array);

// let a = array.slice(2,5);
// console.log(a);
// console.log(array);

// let b = array.splice(3,5);
// console.log(b);
// console.log(array);

                     //array.map()
// function cube(ele){
//     return ele*ele*ele;
// }
// let a = array.map(cube);
// console.log(a);

// let b = array.map((ele) => ele-1)
// console.log(b);

// let c = array.map((ele) => {if(ele%2 == 0){console.log(ele)}});

                     //array.filter()
// let a = array.filter((ele) => {if(ele %2 != 0){return ele}});
// console.log(a);

                    //array.sort/reverse
// let brray = [4,3,-25,18,17];
// let a = brray.sort((a,b) => a-b);
// console.log(a);

// let b = brray.sort((a,b) => b-a);
// console.log(b);

// let c = brray.reverse();
// console.log(c);

// let arr = [[2,3,4],["naveed","mughal","ali"]];
// for(let i = 0; i < 2; i++){
//     for(let j = 0; j < 3; j++){
//         console.log(arr[i][j]);
//     }
// }
// console.log(arr);

                    //Merging two arrays
// let array = [1,2,3];
// let brray = ["Naveed","Mughal"];
// array.push(brray);
// console.log(array);

                    //concat method
// let a = array.concat(brray);
// console.log(a);

                    //spread method
// let a = [...array , ...brray];
// console.log(a);


                    //concat all the arrays as a single array
// let array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]];
// let a = array.flat(Infinity);
// console.log(a);

                //tells whether a array or not
// console.log(Array.isArray("Naveed"));

                //converts into array
// console.log(Array.from("Naveed"));

//             //also makes an array
// let a = 100;
// let b = 200;
// let c = 300;

// console.log(Array.of(a,b,c));

