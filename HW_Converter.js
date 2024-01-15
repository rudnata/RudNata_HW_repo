let measurmentUnit = "км" // обчислювані одиниці вимірювання: "км","год" або "кг"
let qty =2 // введіть кількість
switch(measurmentUnit){
    case "км":
        console.log(qty + " " + measurmentUnit + " це " + qty*1000 + " м.");
        break;     
    case "год":
        console.log(qty + " " + measurmentUnit + " це " + qty*60 + " хв.");
        break; 
    case "кг":
        console.log(qty + " " + measurmentUnit + " це " + qty*1000 + " г.");
        break;
    default: console.log("Невідома одиниця вимірювання.")}
    