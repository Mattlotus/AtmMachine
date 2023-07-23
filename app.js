//  Setting User Balance......
let userBalance = 30000;


// grabbing id from HTML.........
let buttonOne = document.querySelector("#uno");
let buttonTwo = document.querySelector("#dos");
let buttonThree = document.querySelector("#tres");
let buttonFour = document.querySelector("#quatro");
let buttonFive = document.querySelector("#cinco");
let buttonSix = document.querySelector("#seis");


//  lets grab more id with query........
let optionOne = document.querySelector("#choiceUno");
let optionTwo = document.querySelector("#choiceDos");
let optionThree = document.querySelector("#choiceTres");
let optionFour = document.querySelector("#choiceQuatro");
let optionFive= document.querySelector("#choiceCinco");
let optionSix = document.querySelector("#choiceSeis");


// screen time , grabbing class with query..........
let miniscreen = document.querySelector(".displayScreen");

//  answer screen Div with some class..........
let answerscreen = document.createElement("div");
answerscreen.setAttribute("class", "nput");

let useraccount;
let accountBalance;

// Entering pin and getting options.......
const beginProcess = () => {
  startDisplay();
  displayMainMenu();
};
const startDisplay = () => {
  let pinNum = prompt("Please Enter Pin");
  let pinConfirm = prompt("Please ReEnter Pin");
  if (pinNum === pinConfirm) {
    alert("PIN CONFIRMED");
    alert(" Welcome User!", useraccount);
    alert(" Please Select One Of the Following Options");
  } else {
    alert("INVALID PIN ,TRY AGAIN LATER");
  }
};
const displayMainMenu = () => {
  optionOne.innerHTML = "Check Balance";
  optionTwo.innerHTML = "Transfer";
  optionThree.innerHTML = "Withdrawl";
  optionFour.innerHTML = "Deposit";
  optionFive.innerHTML = "Settings";
  optionSix.innerHTML = "Cancel";
};

//  switching screens after inputing option.............
const selectionAnswer = (text) => {
  answerscreen.innerHTML = text;
  miniscreen.replaceWith(answerscreen);
};

// lets see how much bread you got playboy!!!..........
const check_balance = () => {
  selectionAnswer(`Current Balance: ${userBalance}  USD`);
};

// put money in a safe place..........
const deposit = () => {

  let cash = prompt(" Enter Amount you would like to deposit.");

  selectionAnswer(
    `Current Balance: ${parseInt(userBalance) + parseInt(cash)} USD`
  );
};

//  withdraw function....aka retail therapy........
const withdraw = () => {

  let cash = prompt(" Enter Amount you would like to withdraw.");
  selectionAnswer(
    `Current Balance: ${parseInt(userBalance) - parseInt(cash)} USD`
  );
};


//  probably missing something..come back later........