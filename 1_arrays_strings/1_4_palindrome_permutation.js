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

function isPalindromeBitArray(str) {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    checker ^= 1 << str.charCodeAt(i);
  }
  return !((checker - 1) & checker);
}

console.log(isPalindromeBitArray("tacocat"));
console.log(isPalindromeBitArray("tacocet"));
console.log(isPalindromeBitArray("tacocoatateea"));
