const input = document.querySelector("input");
const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");

lowerCaseOutput.innerText = input.value.toLowerCase();
upperCaseOutput.innerText = input.value.toUpperCase();

function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(string) {
  //   const lowerCaseString = string.toLowerCase();
  //   const wordsArray = lowerCaseString.split(" ");
  //   return wordsArray;
  return string.toLowerCase().split(" ");
}

input.addEventListener("input", () => {
  lowerCaseOutput.innerText = input.value.toLowerCase();
  upperCaseOutput.innerText = input.value.toUpperCase();
});
