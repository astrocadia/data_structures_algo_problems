function isPermutation(s, t) {
  if (s.length != t.length) {
    return false;
  }
  const chars = Array(128).fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (chars[t.charCodeAt(i)]) {
      chars[t.charCodeAt(i)]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPermutation("test", "sett"));
console.log(isPermutation("tes", "sett"));
