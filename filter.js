// const array = [1,2,3,4,5,6,7,8,9];
// let num = array.filter( (num) => (num > 5)); //using parentheses will return values automatically
// console.log(num);


const array = [1,2,3,4,5,6,7,8,9];
let num = array.filter( (num) => {
    return num > 5
}); //using curly braces will not return values automatically untill you use return keyword
console.log(num);