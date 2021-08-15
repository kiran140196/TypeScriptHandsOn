function Maximum(brr : number[]) : number{
    var iMax : number = brr[0];
    for(var iCnt : number = 0; iCnt < brr.length ; iCnt++){
        if (iMax < brr[iCnt])
            iMax = brr[iCnt];
    }
    return iMax;
}

function main(){
    var arr : number[] =[23,89,6,29,56,45,77,32];
    var iRes : number ;
    iRes = Maximum(arr);
    console.log("Maximium no from array is : " +iRes);
}

main();