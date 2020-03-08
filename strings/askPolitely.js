/*
## Description - Ask Politely

Create the function `askPolitely` that accepts a sentence as an argument. If the last character of the sentence is a question mark, then make sure the question ends with the word "please". 

If a question is _already_ polite (meaning it already ends with "please") or the sentence is _not_ a question, then return the inputted string without modification.

#####Examples

```js
askPolitely("May I borrow your pencil?");
returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
returns "My name is Grace Hopper.";
*/
function askPolitely(sentence) {
  let len = sentence.length - 1;
  let lastChar = sentence[len];
  if (lastChar === "?") {
    if (sentence.includes("please")) return sentence;
    else {
      let result = sentence.slice(0, len);
      result += ` please?`;
      return result;
    }
  } else {
    return sentence;
  }
}
askPolitely("My name is Grace Hopper."); //returns "My name is Grace Hopper."
