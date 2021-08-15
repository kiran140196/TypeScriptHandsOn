function CheckArmStrong(no : number):boolean{
    var temp : number;
    temp = no;
    var iSum : number = 0;
    while(temp != 0){
        var idigit : number = temp%10;
        iSum = iSum + idigit*idigit*idigit;
        temp = Math.floor(temp/10);
    }
    if (iSum == no)
        return true;
    else
        return false;
}

function main(){
    var no : number = 153;
    var iRes : boolean;
    iRes = CheckArmStrong(no);
    if (iRes == true)
        console.log("It is Armstrong no");
    else
        console.log("It is not Armstrong no");
}

main();