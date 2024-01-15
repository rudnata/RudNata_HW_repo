var yearOfBirth = prompt ("Вкажіть ваш рік народження", "1989");
if (isNaN(yearOfBirth) || yearOfBirth < 0 || yearOfBirth==="") {
    console.log("Дата введена невірно.")
} 
else {
    let currentYear = 2024
    let userAge = currentYear - yearOfBirth
    if (userAge ===1 || userAge ===21 || userAge ===31 || userAge ===41 || userAge ===51 || userAge ===61 || userAge ===71 || userAge ===81 ||userAge ===91 || userAge ===101) 
    {
    console.log("Вам " + userAge + " рік.");}
    else if ((userAge >=2 && userAge <=4) || (userAge >=22 && userAge <=24) || (userAge >=22 && userAge <=24) || (userAge >=32 && userAge <=34) || (userAge >=42 && userAge <=44) || (userAge >=52 && userAge <=54) || (userAge >=62 && userAge <=64) || (userAge >=72 && userAge <=74) || (userAge >=82 && userAge <=84) || (userAge >=92 && userAge <=94)) 
    {
    console.log("Вам " + userAge + " роки.");}
    else if ((userAge >=5 && userAge <=20) || (userAge >=25 && userAge <=30) || (userAge >=35 && userAge <=40) || (userAge >=45 && userAge <=50) || (userAge >=55 && userAge <=60) || (userAge >=65 && userAge <=70) || (userAge >=75 && userAge <=80) || (userAge >=85 && userAge <=90) || (userAge >=95 && userAge <=100) || userAge ===0)
    {
    console.log("Вам " + userAge + " років.");}
    else {
    console.log("Вам більше 101 років!");}
}

