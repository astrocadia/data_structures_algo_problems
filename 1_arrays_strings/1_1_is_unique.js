function isUnique(str) {
  const chars = Array(128).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (chars[str.charCodeAt(i)]) {
      return false;
    }
    chars[str.charCodeAt(i)]++;
  }
  return true;
}

console.log(isUnique("star"));
console.log(isUnique("stars"));
