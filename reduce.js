// const array = [1,2,3,4,5];

// const newArr = array.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// const newArr = array.reduce( (acc,curr) => acc + curr ,0 )
// console.log(newArr);


const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "py course",
        price: 999
    },
    {
        item: "mobile dev course",
        price: 5999
    },
    {
        item: "Data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc,shop) => {
    console.log(`acc: ${acc} and price: ${shop.price}`);
    return  acc + shop.price ;
},0)
console.log(total);