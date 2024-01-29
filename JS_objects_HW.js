///////////////////////////////////////////////////////////////////////////
//ДЗ1 Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
var gameOfThrones = {
    Tyrion: "Peter Dinklage",
    Daenerys: "Emilia Clarke",
    JonSnow: "Kit Harington",
    KhalDrogo: "Jason Mamoa",
    getInfo: function(){
        for (var key in gameOfThrones) {
            if (typeof gameOfThrones[key]!="function"){
            console.log(key + ': ' + gameOfThrones[key]); 
            }
                    }
            }}
user.getInfo();

///////////////////////////////////////////////////////////////////////////
//ДЗ2 Сума вартості послуг
var services = {
    haircut: "60 uah",
    shaving: "80 uah",
    hairWash: "40 uah",
    hairStyling: "100 uah",
    manicure: "120 uah",};
     
function totprice (object){ 
let sumt=0;   
for (val in services) {
sumt += Number.parseInt(services[val])        
    };
return "total price: " + sumt + " uah"; 
};

let x =Object.values(services);
var min=Number.parseInt(x[0]);
var max=Number.parseInt(x[0]);

function minPrice(object){
for (var val in services){
    if (min>Number.parseInt(services[val]))
        min=Number.parseInt(services[val])
    };
return "min price: " + min + " uah";
};      
               
function maxPrice(object){
for (var val in services){
if (max<Number.parseInt(services[val]));
    max=Number.parseInt(services[val]);
    };
return "max price: " + max + " uah"; 
};
       
totprice(services);
//minPrice(services);
//maxPrice(services);