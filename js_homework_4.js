//////////////////////////////////////////////////////////////////
//ДЗ-1: реалізацію функції isNaN

function myIsNaN(a){ 
    var number = Number(a);
    if(number===number){
        console.log(number, typeof number);
        console.log(a + " це не NaN");
                    }
    else{ console.log(number, typeof number);
        console.log(a + " це NaN");
    }
}
myIsNaN('123');

////////////////////////////////////////////////////////////////////
// ДЗ-2: Перевірка теорії ймовірності. 

function checkProbabilityTheory(count){
    console.log("Кількість згенерованих чисел: " + count);
    for(var round=1, evenqty=0;round<=count; round++){
        var random = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        console.log(random);
        if(random%2===0){ 
        evenqty+=1;
        }
    }
    console.log("Кількість парних: " + evenqty);
    var oddqty = count - evenqty;
    console.log("Кількість непарних: " + oddqty);
    var probabilityO = Math.round(oddqty*100/count);
    var probabilityE = 100 - probabilityO;
    console.log("Відсоткове співвідношення парних до непарних: " + probabilityE +"%" + " VS " + probabilityO + "%");
    }
checkProbabilityTheory(5);