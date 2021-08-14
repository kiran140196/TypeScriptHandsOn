import {Addition,Subtraction} from "./Server";
import {fun} from "./Server";
main();

function main()
{
    var x : number = 11;
    var y : number = 20;
    var ret : number = 0;
    ret = Addition(x,y);
    console.log("Addition is : " + ret);
    ret = Subtraction(x,y);
    console.log("Subtraction : " + ret);
    ret = fun(11,20);
    console.log("Addition is : " + ret);
}
