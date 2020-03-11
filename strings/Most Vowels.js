/*
Most Vowels
Define a function, mostVowels, that accepts one argument, a string of words.

mostVowels should return the word that has the most vowels.

mostVowels('I am a keeper with some real rhythms'); // => keeper
If none of the words have any vowels, return an empty string.

mostVowels('try my gym'); // => ''

NOTES:  Can you do it without arrays.
PSEUDOCODE: 
    1. loop through the string:
        - check if char !== " " && i !== str.length-1 then:
            - concatenate the char to the curWord 
            - check if(char isVowel) curCount ++
        - else check if(curVowelCount >  maxVowelCount) {
            maxVowelCount = curVowelCount 
            maxWord = curWord;
        }
        also reset the curWord and curVowelCount
    2. return maxWord
*/
function mostVowels(str) {
  let curWord = "",
    curVowelCount = 0,
    maxWord = "",
    maxCountVowel = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== " " && i !== str.length - 1) {
      curWord += char;
      if (isVowel(char)) curVowelCount++;
    } else {
      if (curVowelCount > maxCountVowel) {
        maxCountVowel = curVowelCount;
        maxWord = curWord;
      }

      //reset curWord & curVowelCount
      curWord = "";
      curVowelCount = 0;
    }
  }
  return maxWord;
}

function isVowel(char) {
  let vowels = "aeiouAEIOU";
  if (vowels.includes(char)) return true;
  else return false;
}

// USING ARRAYS
function mostVowels(str) {
  let mostVowels = 0;
  let idxToReturn = -1;
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let counter = 0;
    for (let char of word) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        counter++;
      }
    }
    if (mostVowels < counter) {
      mostVowels = counter;
      idxToReturn = i;
    }
  }

  if (idxToReturn == -1) return "";
  if (arr.length - 1 === idxToReturn) {
    let wordEdited = arr[idxToReturn].slice(0, arr[idxToReturn].length - 1);
    return wordEdited;
  } else return arr[idxToReturn];
}

describe("mostVowels", () => {
  it("is a function", () => {
    expect(typeof mostVowels).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = mostVowels(
      "Wit beyond measure is man's greatest treasure."
    );
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns the word with the most vowels", () => {
    let returnedValue = mostVowels(
      "Wit beyond measure is man's greatest treasure."
    );
    expect(returnedValue).toEqual("measure");
  });

  it("returns the word with the most vowels even if it's the last string in the sentence", () => {
    let returnedValue = mostVowels("Give her hell from us, Peeves.");
    expect(returnedValue).toEqual("Peeves");
  });

  it("returns an empty string if none of the inputted words have vowels", () => {
    let returnedValue = mostVowels("why dry my sly lynx?");
    expect(returnedValue).toEqual("");
  });
});
