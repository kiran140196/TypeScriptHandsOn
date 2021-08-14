var tuple = [10,"Marvellous",20,30];
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);
console.log(tuple[3]);
tuple.push("Infosystems");
console.log("Tuple length after push : "+ tuple.length)
console.log(tuple[4]);
tuple.pop();
console.log("Tuple length after pop : "+ tuple.length);
tuple[0] = "Pune";
console.log(tuple);