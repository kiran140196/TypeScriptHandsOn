function DisplayFactors(value1 : number) : any{
    var iCnt : number = 1;
    var s = "";
    while(iCnt <= value1/2){
        if (value1 % iCnt == 0)
            s += iCnt + " ";
        iCnt++;
    }
    console.log(s);
}

function main(){
    var no : number = 20;
    DisplayFactors(no);
}

main();