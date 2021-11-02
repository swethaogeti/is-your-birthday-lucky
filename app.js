const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const displayMessage = document.querySelector("#output-text");

checkButton.addEventListener("click", checkBirthDateIsLucky);

function checkBirthDateIsLucky() {

    let yourBirthdayDate = CalculateSumOfBirthDate(dateOfBirth.value);
   let yourLuckyNumber = luckyNumber.value;


   if((yourBirthdayDate!==" ") && (yourLuckyNumber!=="")){
if(Math.sign(yourLuckyNumber)===1){
    compareValues(yourBirthdayDate,yourLuckyNumber)
}else if(Math.sign(yourLuckyNumber)=== -1){
    printMessage("Negative number can't be a Lucky Number. Enter positive value.")
}else if(Math.sign(yourLuckyNumber)=== 0){
    printMessage(" Zero can't be a Lucky Number. Enter greater value.")
}
    
   }else {
    printMessage("Input fields can't be empty!")
   }
       
   }
  










function compareValues(dob, luckyNum) {
    if (dob % luckyNum === 0 ) {
printLucky("Your birthday is lucky!🥳🎂")
    } else {
        printNotSoLucky(" Your birthday is not so lucky!😏")
    }
}

function CalculateSumOfBirthDate(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum += Number(dob[i]);
    }
    return sum;
}

function printMessage(msg) {
    displayMessage.innerText = msg;
    displayMessage.style.color="red";
    displayMessage.style.border="2px solid black";
    displayMessage.style.backgroundColor="white";
}

function printLucky(msg) {
    displayMessage.innerText = msg;
    displayMessage.style.color="#ff1493";
    displayMessage.style.border="2px solid black";
    displayMessage.style.backgroundColor="white";
}

function printNotSoLucky(msg) {
    displayMessage.innerText = msg;
    displayMessage.style.color="#FF4500";
    displayMessage.style.border="2px solid black";
    displayMessage.style.backgroundColor="white";
}
