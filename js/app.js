let secretNumber = 0;
let attempt = 0;
let randomNumberList = [];
let maxNumber = 100;
let maxAttempts = 7;

function assignTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
  return;
}

function verifyOption() {
  let userNumber = parseInt(document.getElementById("userValue").value);

  if (userNumber === secretNumber) {
    assignTextElement(
      "p",
      `you got the number right in ${attempt} ${attempt === 1 ? "time" : "times"}`,
    );
    document.getElementById("restart").removeAttribute("disabled");
  } else {
    if (attempt === maxAttempts) {
      assignTextElement(
        "p",
        `you have reached the max number of attempts. The secret number was ${secretNumber}.`,
      );
      document.getElementById("restart").removeAttribute("disabled");
    } else {
      if (userNumber > secretNumber) {
        assignTextElement("p", "The secret number is less, try again");
      } else {
        assignTextElement("p", "the secret number is higher, try again");
      }
      attempt++;
      cleanBox();
    }
  }
  return;
}

function cleanBox() {
  document.getElementById("userValue").value = "";
}

function generateSecretNumber() {
  let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;

  console.log(generatedNumber);
  console.log(randomNumberList);

  if (randomNumberList.length == maxNumber) {
    assignTextElement("p", "All possible numbers have already been drawn.");
  } else {
    if (randomNumberList.includes(generatedNumber)) {
      return generateSecretNumber();
    } else {
      randomNumberList.push(generatedNumber);
      return generatedNumber;
    }
  }
}

function initGame() {
  assignTextElement("h1", "Secret Number Game!");
  assignTextElement("p", `Chose a number between 1 and ${maxNumber}`);
  secretNumber = generateSecretNumber();
  attempt = 1;
  console.log(secretNumber);
}

function restartGame() {
  cleanBox();
  initGame();
  document.getElementById("restart").setAttribute("disabled", "true");
}

initGame();
