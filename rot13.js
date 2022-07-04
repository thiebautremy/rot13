function rot13(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const strToArray = str.toLowerCase().split("");
  let strToAscii = [];
  strToArray.forEach((item) => {
    const ascii = item.charCodeAt();
    if (ascii >= 97 && ascii <= 122) {
      strToAscii.push(ascii - 96 + 13);
    } else if (ascii == 32) {
      strToAscii.push(" ");
    } else {
      strToAscii.push(item);
    }
  });
  console.log(strToAscii);
  function convertAsciiToStr(asciiArray) {
    const newStr = [];
    asciiArray.forEach((item) => {
      if (typeof item == "number") {
        if (item <= 26) newStr.push(alphabet[item - 1]);
        else newStr.push(alphabet[item - 27]);
      } else {
        if (item == " ") newStr.push(" ");
        else newStr.push(item);
      }
    });
    return newStr;
  }

  return convertAsciiToStr(strToAscii).join("").toUpperCase();
}

rot13("SERR CVMMN?");
