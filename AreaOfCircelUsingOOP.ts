class Circle
{
    PI : number;
    Radius : number;

    constructor(Radius : number)
    {
        this.Radius = Radius;
        this.PI = 3.14;
    }

    Area()
    {
        return this.PI*this.Radius*this.Radius;
    }
}

var obj1 = new Circle(10);
var iRes : number;
iRes = obj1.Area();
console.log("Area of circle by using obj1 : ",iRes);

var obj2 = new Circle(15);
iRes = obj2.Area();
console.log("Area of circle by using obj2 : ",iRes);