function CheckPrime(iValue : number):boolean{
    var iCnt = 2;
   for(iCnt;iCnt<=iValue/2;iCnt++){
        if (iValue % iCnt == 0)
            return false;
    }
    if(iCnt == Math.round(iValue/2))
        return true;
}

function main(){
    var no : number = 11;
    var iRes : boolean;
    iRes = CheckPrime(no);
    if (iRes == true){
        console.log("It is prime number");
    }
    else{
        console.log("It is not prime number");
    }
}

main();