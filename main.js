var elForm = document.querySelector(".form");
var elFirst = document.querySelector(".calc__input-first");
var elSelect = document.querySelector(".calc__select");
var elSecond = document.querySelector(".calc__input-second");
var elBtn = document.querySelector(".calc__btn");
var elBtnReset = document.querySelector(".calc__btn-reset");
var elResult = document.querySelector(".calc__result");


elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    elFirstValue = Number(elFirst.value.trim());
    elSecondValue = Number(elSecond.value.trim());
    elSelectValue = elSelect.value;

    switch(elSelectValue){
        case "+":
        elResult.textContent = elFirstValue + elSecondValue;
        break;

        case "-":
        elResult.textContent = elFirstValue - elSecondValue;
        break;

        case "*":
        elResult.textContent = elFirstValue * elSecondValue;
        break;

        case "/":
        elResult.textContent = elFirstValue / elSecondValue;
        break;

        case "%":
        elResult.textContent = elFirstValue % elSecondValue;
        break;
    }
})

elBtnReset.addEventListener("submit" , function(evt){
    evt.preventDefault();

    elResult.value = "";
})

// ============================ Calculator ================================


var num1 = Number(prompt("1-Sonni kiriting!!"));
var amal = prompt("Amal kiriting + - * /");
var num2 = Number(prompt("2-Sonni kiriting!!"));

if(amal === "+"){
   alert(num1 + num2);
}else if(amal === "-"){
   alert(num1 - num2);
}else if(amal === "*"){
   alert(num1 * num2);
}else if(amal === "/"){
   alert(num1 / num2);
}else{
    alert("Amal kiritmadiz!!")
}



var text = "jamshid";

console.log(text[0].toUpperCase() + "amshid");