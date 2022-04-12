var translateButton = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-text-holder");
var textOutput = document.querySelector("#text-output-holder");
var selectOption = document.getElementById("language-selector");
translateButton.addEventListener("click", acknowledgeClick);

const serverUrl = "https://api.funtranslations.com/translate/"
const testServerUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function acknowledgeClick() {
  console.log(selectOption.value);
  if (textInput.value != "" && selectOption.value != "testing") {
  var toBeTranslated = serverUrl + selectOption.value + ".json?text=" + textInput.value;
  fetch(toBeTranslated)
    .then(response => response.json())
    .then(data => textOutput.innerText = data.contents.translated)
  } else if (selectOption.value === "testing" ) {
    var toBeTranslated = testServerUrl + "?text=" + textInput.value;
    fetch(toBeTranslated)
    .then(response => response.json())
    .then(data => textOutput.innerText = data.contents.translated)
  }
  else {
    textOutput.innerText = "Error: Text is missing!"
  }
}
