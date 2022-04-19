let translateButton = document.querySelector("#translate-button");
let textInput = document.querySelector("#translate-text-holder");
let textOutput = document.querySelector("#text-output-holder");
let selectOption = document.getElementById("character-selector");
let insultLanguage = document.querySelector("#insultlanguage");
let translateServerUrl = "";
let insultUrl = "";
let testServerUrl = "";
let fallbackInsultUrl = "";

function setAttributes(element, attributes) {
  for(var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function removeAttributes (element, attributes) {
  for (var key of attributes) {
    element.removeAttribute(key);
  }
}

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
      insultUrl = `https://evilinsult.com/generate_insult.php?lang=${insultLanguage.value}&type=plain`;
      fallbackInsultUrl = `https://insult.mattbas.org/api/en/insult.txt`;
      fetch(insultUrl)
      .then(response => {console.log(response); return response.text()})
      .then(data => {console.log(data); textOutput.innerText = data})
      .catch(() => {
        insultFallbackMesaures(); 
        fetch(fallbackInsultUrl).then(response => response.text())
        .then(data => textOutput.innerText = data)
        .catch(error => textOutput.innerText = `${error} (╯°□°)╯︵ ┻━┻`)
      })
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
    setAttributes(document.querySelector("#insult-language-select-form"), {"style": "display: block;","aria-hidden": "false"});
    setAttributes(textInput, {"style": "display: none;","aria-hidden": "true"});
    document.querySelector("#character-selector-label").innerText = "I want to :";
    setAttributes(document.querySelector("#fallbackwarning"), {"style": "display: block;","aria-hidden": "false"});
    setAttributes(document.querySelector("#translatorbriefing"), {"style": "display: none;","aria-hidden": "true"});
    translateButton.innerText = "Generate Insult"
  } else {
    setAttributes(document.querySelector("#insult-language-select-form"), {"style": "display: none;","aria-hidden": "true"});
    removeAttributes(textInput, ["style", "aria-hidden"]);
    document.querySelector("#fallbackalert").innerText = "in";
    setAttributes(document.querySelector("#fallbackwarning"), {"style": "display: none;","aria-hidden": "true"});
    setAttributes(document.querySelector("#translatorbriefing"), {"style": "display: block;","aria-hidden": "false"});
  }
}

function insultFallbackMesaures () {
  setAttributes(document.querySelector("#insultlanguage"), {"style": "display: none;","aria-hidden": "true"});
  setAttributes(document.querySelector("#insult-language-select-form"), {"style": "display: block;","aria-hidden": "false"});
  document.querySelector("#fallbackalert").innerText = "Sorry! Main server is down, falling back to redundant server";
}