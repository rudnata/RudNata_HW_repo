////////////////////////////////////////////////////////////////

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //ДЗ 1
function myBlend (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      var result = arr[i];
      arr[i] = arr[rand];
      arr[rand] = result;
    }
    return arr
  }; 
  myBlend(arr);

  ////////////////////////////////////////////////////////////////
  // ДЗ-2 findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

  const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


var b= company.clients;
var x=company.clients.length;
company.clients.forEach(compInfo)

function compInfo (companyName){
    for (var i = x - 1; i >= 0; i--)
 
if (companyName===company.clients[i].name){
return company.clients[i];}
else if ('partners' in b[i]){
var c= b[i].partners;
var l = c.length;


c.forEach (function(){
if (c.length!==0){
    var d= c.pop();
    console.log(d.name);
    var title= d.name;
    if(companyName===title){
        console.log(title); // отримую undefined
    }
    
}; 


})}
else if ('partners' in c[l]){ // // отримую undefined
    var k =c[l].partners;
    for (var y=k.length; y>0; y--) {
        if (companyName===k.name){
        return k.name;}

};
}
}
compInfo ('Клієнт 1.2.3');
