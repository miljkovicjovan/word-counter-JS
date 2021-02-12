let form = document.getElementById("form");
let input = document.getElementById("input");
let output = document.getElementById("count");

form.addEventListener("keyup", event => {
  event.preventDefault();
  wordCounter(input);
})

//checks if the str is a word
function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

function wordCounter(text) {
  var text = input.value.split(' ');
  var count = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && isWord(text[i])) {//if it isn't space and it is a word
      count++;
    }
  }
  output.innerText = `The word count is ${count}.`;
}