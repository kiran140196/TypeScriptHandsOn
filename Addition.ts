//positional parameter
function Addition(Num1:number,Num2:number) : number {
    var ans : number = 0;
    var ans = Num1 + Num2;
    console.log("i : " + i);
    return ans;
}

//default argument-assign shld be right to left
function Area(Radius : number,PI : number = 3.14){
    var ans : number = 0;
    ans = PI*Radius*Radius;
    return ans;
}

//optional argument
function fun(Name:string,passport?,nationality : string = "Indian"){
    console.log("Name is : " + Name);
    if(passport == undefined){
        console.log("Sorry I don't have passport");
    }
    else{
        console.log("Passport number is : " + passport);
    }
    console.log("Nationality is : " + nationality);
}

//Varaiable no of argument or rest argument
function fun1(...data:number[]){
    console.log(data);
}

var i : number = 20;
var j : number = 11;
var ret : number;
ret = Addition(i,j);
console.log("Addition is : " + ret);

var no : number = 10.2;
var ret : number = 0;
ret = Area(no,7.12);
console.log("Area is : " + ret);
ret = Area(no);
console.log("Area is : " + ret);

fun("Kiran",3434334,"American");

fun1(10,20,30,40,50);