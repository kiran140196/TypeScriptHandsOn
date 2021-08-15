var global : number = 11;
class Demo{
    i : number = 21;
    static j : number = 31;

    static fun() : void{
        console.log("static method");
    }

     Display(): void {
        var local : number = 41;

        console.log("global is : " + global);
        console.log("local is : " + local);
        console.log("instance is : " + this.i);
        console.log("static is : " + Demo.j);
    }
}

var obj = new Demo();
obj.Display();
Demo.fun();

console.log("global out of the class is : " + global);
console.log("instance out of the class is : " + obj.i);
console.log("static out of the class is : " + Demo.j);
