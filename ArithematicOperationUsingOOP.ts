class Arithematic
{
    iNo1 : number;
    iNo2 : number;
    iRes : number;

    constructor(x : number, y : number)
    {
        this.iNo1 = x;
        this.iNo2 = y;
        this.iRes = 0;
    }

    Addition()
    {
        this.iRes = this.iNo1 + this.iNo2;
        return this.iRes;
    }

    Subtraction()
    {
        this.iRes = this.iNo1 - this.iNo2;
        return this.iRes;
    }

    Multiplication()
    {
        this.iRes = this.iNo1 * this.iNo2;
        return this.iRes;
    }

    Division()
    {
        this.iRes = this.iNo1/this.iNo2;
        return this.iRes;
    }
}

var iRet : number = 0;
var obj1 = new Arithematic(20,10);
iRet = obj1.Addition();
console.log("Addition using first object : " + iRet);
iRet = obj1.Subtraction();
console.log("Subtraction using first object : " + iRet);
iRet = obj1.Multiplication();
console.log("Multiplication using first object : " + iRet);
iRet = obj1.Division();
console.log("Division using first object : " + iRet);

var obj2 = new Arithematic(10,5);
iRet = obj2.Addition();
console.log("Addition using second object : " + iRet);
iRet = obj2.Subtraction();
console.log("Subtraction using second object : " + iRet);
iRet = obj2.Multiplication();
console.log("Multiplication using second object : " + iRet);
iRet = obj2.Division();
console.log("Division using second object : " + iRet);
