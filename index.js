var translateButton = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-text-holder");
var textOutput = document.querySelector("#text-output-holder");
let selectOption = document.getElementById("character-selector");
let insultLanguage = document.querySelector("#insultlanguage");
let translateServerUrl;
let insultUrl;
let testServerUrl;

function acknowledgeClick() {
  switch (selectOption.value) {
    case "testing":
      testServerUrl = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput.value}`;
      fetch(testServerUrl)
      .then(response => response.json())
      .then(data => textOutput.innerText = data.contents.translated)
      .catch(error => console.error(`Error:${error}`))
      break;
    case "insultplease":
      insultUrl = `https://evilinsult.com/generate_insult.php?lang=${insultLanguage.value}&type=json`;
      fetch(insultUrl)
      .then(response => response.json())
      .then(data => textOutput.innerText = data.contents.insult)
      .catch(error => textOutput.innerText = `${error} (╯°□°)╯︵ ┻━┻`)
      break;
    default:
      let translateValidate = textInput.value.replace(/\s/g,'');
      if (translateValidate != "") {
        translateServerUrl = `https://api.funtranslations.com/translate/${selectOption.value}.json?text=${textInput.value}`;
        fetch(translateServerUrl)
        .then(response => response.json())
        .then(data => textOutput.innerText = data.contents.translated)
        .catch(error => textOutput.innerText = `${error} (╯°□°)╯︵ ┻━┻`)
      } else {textOutput.innerText = "Error: Text is missing! (╯°□°)╯︵ ┻━┻"}
      break;
  }
}

function insultcheck() {
  if (selectOption.value === "insultplease") {
    textInput.innerText = "";
    document.querySelector("#insult-language-select-form").setAttribute("style", "display: block;");
    textInput.setAttribute("style", "display: none;")
    document.querySelector("#character-selector-label").innerText = "I want to :";
    translateButton.innerText = "Generate Insult"
  }
}