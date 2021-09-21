let translateButton = document.querySelector("#btn-translate");
let inputArea = document.querySelector("#txtarea--input");
let outputArea = document.querySelector("#txtarea--output");
const serverURL = 'https://api.funtranslations.com/translate/dothraki.json';

function translate(text) { //make api call 
    return serverURL + "?text=" + text;
}
function handleError() {
    console.log("Error occured ");
    alert("Error occured while fetching. Try after sometime");
}

function handleClick() {
    // outputArea.innerHTML = (inputArea.value)
    let inputText = inputArea.value;
    fetch(translate(inputText))
        .then(response => response.json()) //convert response to json
        .then(json => {
            let translatedText = json.contents.translated
            outputArea.innerHTML = translatedText;
        })
}

translateButton.addEventListener("click", handleClick) //added click event handler