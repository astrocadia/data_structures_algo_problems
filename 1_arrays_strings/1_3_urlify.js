// write a method to replace all the spaces in a string with '%20'

function urlify(str, trueLength) {
  let spaces = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === " ") {
      spaces++;
    }
  }
  let index = trueLength + spaces * 2 - 1;
  const strArray = Array(index);
  for (let i = trueLength - 1; i > -1; i--) {
    if (str[i] === " ") {
      strArray[index] = "0";
      strArray[index - 1] = "2";
      strArray[index - 2] = "%";
      index = index - 3;
    } else {
      strArray[index] = str[i];
      index--;
    }
  }
  return strArray.join("");
}

console.log(urlify("this is a test  ", 10));
