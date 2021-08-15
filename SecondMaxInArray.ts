function SecondMax(brr : number[]):number{
    var iMax = brr[0];
    var iSecMax = brr[0];
    for(var iCnt : number = 0; iCnt < brr.length ; iCnt++){
        if (iMax < brr[iCnt])
            iMax = brr[iCnt];
        if(iMax > brr[iCnt] && iSecMax < brr[iCnt])
            iSecMax = brr[iCnt];
    }
    return iSecMax;
}

function main(){
    var arr : number[] = [23,89,6,29,56,45,77,32];
    var iRes : number ;
    iRes = SecondMax(arr);
    console.log("Second maximium no is : " + iRes);
}

main();