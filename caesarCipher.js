function caesarCipher(str, num) {
  num = num % 26; // ensure num is within the range of 0-25

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        // uppercase letters
        char = String.fromCharCode(((code - 65 + num) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // lowercase letters
        char = String.fromCharCode(((code - 97 + num) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

module.exports = caesarCipher;
