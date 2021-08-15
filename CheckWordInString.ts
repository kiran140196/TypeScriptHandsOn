function CheckWord(str : string,key : string):boolean{
    if(str.indexOf(key) != -1)
        return true;
    else
        return false;
}

function main(){
    var str : string = "Pune Kothrud Marvellous Infosystems";
    var iRes : boolean;
    iRes = CheckWord(str,"Marvellous");
    if(iRes == true)
        console.log("String contains word in it");
    else
        console.log("String doesen't contain word in it");
}

main();