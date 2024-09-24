// Simple Object
let fruit = {
    name: "Apple",
    color: "Red",
    quantity: 10
};

console.log(fruit.color);
console.log(fruit["name"]);

// type declaration
let fruit1 :{
    name: string,
    color:string,
    quantity:number,
};
fruit1={
    name:"Pineapple",
    color:"yellow",
    quantity:10,
};
console.log(fruit1.name);
console.log(fruit1["color"]);
console.log(fruit1["quantity"]);


