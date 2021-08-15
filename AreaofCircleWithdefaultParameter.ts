function Area(radius : number, PI : number = 3.14):number{
    var area : number;
    area = PI*radius*radius;
    return area;
}

function main(){
    var radius : number = 5;
    var PI : number = 7.28;
    var iRes : number;
    iRes = Area(radius);
    console.log("Area of circle without providing PI value is : " + iRes);

    iRes = Area(radius,PI);
    console.log("Area of circle when PI is provided is : " + iRes);
}

main();