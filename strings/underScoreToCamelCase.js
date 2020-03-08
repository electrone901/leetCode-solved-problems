/*

Underscore To Camel Case

Write a function to convert a variable name from under_score format to camelCase.

Make sure you support an unlimited number of underscores in the input!


#### Examples:

```js
- INPUT: underToCamel("first_name");
- OUTPUT: "firstName"


- INPUT: underToCamel("my_income_tax_from_2015");
- OUTPUT: "myIncomeTaxFrom2015"
```

*/

function underToCamel(str) {
  let arrayStr = str.split("_");
  let finalString = "";

  for (let i = 0; i < arrayStr.length; i++) {
    let element = arrayStr[i];
    let firstLetter = element[0].toUpperCase();
    if (i === 0) {
      finalString += element;
    } else {
      finalString += firstLetter + element.slice(1);
    }
  }
  return finalString;
}
underToCamel("new_york"); //newYork
