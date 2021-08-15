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

class CircleX extends Circle
{
    cirumference : number;

    constructor(Radius : number)
    {
        super(Radius);
        this.cirumference = 0;
    }

    Cirumference()
    {
        this.cirumference = 2*this.PI*this.Radius
        return this.cirumference;
    }
}

var obj1 = new CircleX(10);
var AreaRes : number;
var CirumferenceRes : number;
AreaRes = obj1.Area();
CirumferenceRes = obj1.Cirumference();
console.log("Area of circle using obj1 : "+AreaRes);
console.log("Cirumference of circle using obj1 : "+CirumferenceRes);

var obj2 = new CircleX(20);
AreaRes = obj2.Area();
CirumferenceRes = obj2.Cirumference();
console.log("Area of circle using obj2 : "+AreaRes);
console.log("Cirumference of circle using obj2 : "+CirumferenceRes);