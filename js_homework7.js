//////ДЗ 1: Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)
var context="sdfg*(a;ljkh@#$%^&*() A l14А"
const regex=/[^AaАа]{6,}/
console.log(regex.test(context));
console.log(context.search(regex));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ДЗ-2 

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var regexp=/^[a-zA-Z\d]+(\.[a-zA-Z\d]+)?@(gmail\.com|yahoo\.com)$/;

var newarr=[];
arr.forEach((h) => {
    console.log(h.email)
    if (regexp.test(h.email)==true){
        var x = newarr.push(h.email) 
    }
});
console.log(newarr);
