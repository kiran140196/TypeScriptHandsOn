interface  Maths
{
    no1 : number;
    no2 : number;

    Add();
}

class Demo implements Maths
{
    Add()
    {
        return 10 + 11;
    }
}