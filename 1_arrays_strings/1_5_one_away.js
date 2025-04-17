// write a function to determine if two strings are one edit away

function oneAway(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }
  if (s1.length === s2.length) {
    let dif = false;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
        continue;
      }
      if (dif) {
        return false;
      }
      dif = true;
    }
    return true;
  }
  const charOccurances = {};
  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    charOccurances[s1[i]] = !charOccurances[s1[i]];
    charOccurances[s2[i]] = !charOccurances[s2[i]];
  }
  let dif = false;
  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    if (!charOccurances[i]) {
      continue;
    }
    if (dif) {
      return false;
    }
    dif = true;
  }
  return true;
}

console.log(oneAway("this is", "this ai"));
console.log(oneAway("this is", "this s"));
console.log(oneAway("this i", "this ai"));
console.log(oneAway("this is", "thas is"));
console.log(oneAway("this ", "this ai"));
console.log(oneAway("this is", "is ai"));
console.log(oneAway("this is", "abcd is"));
console.log(oneAway("this is", "thisi s"));
