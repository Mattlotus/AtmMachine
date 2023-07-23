let userBalance = 30000;
//--------------scree
let buttonOne = document.querySelector("#uno");
let buttonTwo = document.querySelector("#dos");
let buttonThree = document.querySelector("#tres");
let buttonFour = document.querySelector("#quatro");
let buttonFive = document.querySelector("#cinco");
let buttonSix = document.querySelector("#seis");
// ------------------------------------

let optionOne = document.querySelector("#choiceUno");
let optionTwo = document.querySelector("#choiceDos");
let optionThree = document.querySelector("#choiceTres");
let optionFour = document.querySelector("#choiceQuatro");
let optionFive= document.querySelector("#choiceCinco");
let optionSix = document.querySelector("#choiceSeis");
// -----------------------------{screen-setting}
let miniscreen = document.querySelector(".displayScreen");
let answerscreen = document.createElement("div");
answerscreen.setAttribute("class", "nput");

let useraccount;
let accountBalance;

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
  optionOne.innerHTML = "Check BAL";
  optionTwo.innerHTML = "Transfer";
  optionThree.innerHTML = "Withdrawl";
  optionFour.innerHTML = "Deposit";
  optionFive.innerHTML = "Settings";
  optionSix.innerHTML = "Cancel";
};

const selectionAnswer = (text) => {
  answerscreen.innerHTML = text;
  miniscreen.replaceWith(answerscreen);
};
const check_balance = () => {
  selectionAnswer(`Current Balance: ${userBalance}  USD`);
};

const deposit = () => {

  let cash = prompt(" Enter Amount you would like to deposit.");

  selectionAnswer(
    `Current Balance: ${parseInt(userBalance) + parseInt(cash)} USD`
  );
};
const withdraw = () => {

  let cash = prompt(" Enter Amount you would like to withdraw.");
  selectionAnswer(
    `Current Balance: ${parseInt(userBalance) - parseInt(cash)} USD`
  );
};



// const enter = () => {
//   let body = document.querySelector('body')

//   // create a div
//   let firstDiv = document.createElement('div')
//   firstDiv.setAttribute("class", "hu")
//   firstDiv.innerHTML = "HU"
//   // create a div inside the existing div
//   let secondDiv = document.createElement('div')
//   secondDiv.setAttribute("class", "doug")
//   secondDiv.innerHTML = "DOUG"
//   firstDiv.append(secondDiv)

//   body.append(firstDiv)
// }