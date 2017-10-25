# bmjs-engpronouns
A object with functions designed for retrieving different pronoun forms.

active():
Input: (pronoun: String). Output: (String).

passive():
Input: (pronoun: String). Output: (String).

reflex():
Input: (pronoun: String, plural: Bool). Output: (String).

possessive():
Input: (pronoun: String). Output: (String).

article():
Input: (pronoun: String). Output: (String).

*Example usage:*
```javascript
const pronoun = require('bmjs-engpronouns');

let exampleOne = pronoun.active("him");
console.log(exampleOne); // returns 'he'

let exampleTwo = pronoun.passive("he");
console.log(exampleTwo); // returns 'him'

let exampleThree = pronoun.reflex("you",true);
console.log(exampleThree); // returns 'yourselves'

let exampleFour = pronoun.possessive("I");
console.log(exampleFour); // returns 'mine'

let exampleFive = pronoun.article("I");
console.log(exampleFive); // returns 'my'
```
