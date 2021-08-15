function Summation(brr : number[]):number{
    var iSum : number = 0;
    for(var iCnt : number = 0 ; iCnt < brr.length ; iCnt++){
        iSum = iSum + brr[iCnt];
    }
    return iSum;
}

function main(){
    var arr : number [] = [23,6,7,4,5,7];
    var iSum : number;
    iSum = Summation(arr);
    console.log("Summation of all no in array is : " + iSum);
}

main();