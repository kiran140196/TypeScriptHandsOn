function Maximum(value1 : number, value2 : number, value3 : number):number{
    var iMax : number;
    iMax = (value1 > value2 ? (value1 > value3 ? value1 : value3): (value2 > value3 ? value2 : value3));
    return iMax;
}

function main(){
    var no1 : number = 23;
    var no2 : number = 89;
    var no3 : number = 6;
    var iRes : number;
    iRes = Maximum(no1,no2,no3);
    console.log("Maximum number is : " + iRes);
}

main();