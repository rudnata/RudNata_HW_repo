var year = prompt ("Введіть рік", "5");
if (isNaN(year) || year < 0 || year==="") {
    console.log("Рік введено невірно.")
} 
else {
    if (year ===1 || (year % 10===1 && +year!==11)) {
    console.log(year + " рік.");}
    else if ((year >=2 && year <=4) || (year % 10>=2 && year % 10<=4 && year>14)) {
    console.log(year + " роки.");}
    else {
    console.log(year + " років.");}
}
