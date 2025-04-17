function isPalindrome(str) {
  const charOccurances = {};
  for (let i = 0; i < str.length; i++) {
    charOccurances[str[i]] = !charOccurances[str[i]];
  }
  let middleCharFound = false;
  for (let i = 0; i < str.length; i++) {
    if (!charOccurances[str[i]]) {
      continue;
    }
    if (middleCharFound) {
      return false;
    }
    middleCharFound = true;
  }
  return true;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("tacocet"));
