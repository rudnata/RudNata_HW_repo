//ДЗ1: намалювати в консолі прямокутний трикутник із зірочок. V-1
function triangle(hight,symb) {
    for (let b = symb; hight>0; b += symb) {
        console.log(b);
        hight--;
    }
   }
triangle(6,"*")

/////////////////////////////////////////////////////////////////////////////////////////////

 //ДЗ1: намалювати в консолі прямокутний трикутник із зірочок. V-2
function triangle(f,symb) {
    let g = symb;
    do{
    console.log(g)
    g+=symb;
    f-- 
}
while(f>0);
   }
triangle(6,"*")

/////////////////////////////////////////////////////////////////////////////////////////////

//ДЗ 2 Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3
function summ (){
    for(var sum=0, number=1; number<=100; number++){
        if(number%3===0) continue;
        sum+=number;
        }
    return sum
}
summ();

///////////////////////////////////////////////////////////////////////////////////////////////

//ДЗ 3: Написати функцію pow(x,y) яка буде приймати 2 числа, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
function pow(number,powerOf){
    if(powerOf===0){
        console.log("number**0=1")
    }
    else{
        for(var i=number; powerOf>1; powerOf--){
            i*=number;
        }
        return i
    }
}
pow(2,3);