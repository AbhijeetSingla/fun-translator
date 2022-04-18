var translateButton = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-text-holder");
var textOutput = document.querySelector("#text-output-holder");
let selectOption = document.getElementById("character-selector");
let insultLanguage = document.querySelector("#insultlanguage");
let translateServerUrl = `https://api.funtranslations.com/translate/${selectOption.value}.json?text=${textInput.value}`;
let insultUrl = `https://evilinsult.com/generate_insult.php?lang=${insultLanguage.value}&type=json`;
let testServerUrl = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput.value}`;

function printToDiv (text){
  textOutput.innerText = text;
}

function fetchData (serverUrl) {
  fetch(serverUrl);
}

function acknowledgeClick() {
  printToDiv(fetchData(testServerUrl, textInput.value));
}

function insultcheck() {

  console.log(typeof selectOption.value);
  if (selectOption.value === "insultplease") {
    textInput.innerText = "";
    document.querySelector("#insult-language-select-form").setAttribute("style", "display: block;");
    textInput.setAttribute("style", "display: none;")
    document.querySelector("#character-selector-label").innerText = "I want to :";
    translateButton.innerText = "Generate Insult"
  }
}


// function acknowledgeClick() {
//   console.log(selectOption.value);
//   switch (selectOption.value) {
//     case "testing":
//       fetch(testServerUrl)
//       .then(response => response.json())
//       .then(data => textOutput.innerText = data.contents.translated)
//       break;
  
//     default:

//       break;
//   }
  // if (selectOption.value === "testing" && textInput.value != "") {
  //   var toBeTranslated = testServerUrl + "?text=" + textInput.value;
  //   fetch(toBeTranslated)
  //   .then(response => response.json())
  //   .then(data => textOutput.innerText = data.contents.translated)
  // } else if (selectOption === "insultplease" && textInput.value != "") {
  //   fetch(insultUrl)
  //   .then(response => response.json())
  //   .then(data => textOutput.innerText = data.contents.insult)
  // } else if (selectOption.value != "testing" && selectOption.value != "insultplease" && textInput.value != "") {
  //   var toBeTranslated = serverUrl + selectOption.value + ".json?text=" + textInput.value;
  //   fetch(toBeTranslated)
  //     .then(response => response.json())
  //     .then(data => textOutput.innerText = data.contents.translated)
  // } else {
  //   textOutput.innerText = "Error: Text is missing! (╯°□°)╯︵ ┻━┻"
  // }
// }



// console.log(fetch())

// translateButton.addEventListener("click", acknowledgeClick);