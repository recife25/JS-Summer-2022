// print the last character present in mySentence using substring
/**
 * find the length
 * substring(len-1)
 */
// let mySentenceLength = mySentence.length;
// const lasCharacter = mySentence.substring(mySentenceLength - 1);
let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';

const lasCharacter = mySentence.substring(mySentence.length - 1);
console.log(`\nlast character in mySentence -> ${lasCharacter}`);


const mySentence2 = "Heplo";

const myResult2 = mySentence2.substring(2, 20);
console.log(`\nmyResult2 -> ${myResult2}`);

const myResult3 = mySentence2.substring(-2, 4);    // (0, 4)    Hell
console.log(`\nmyResult3 -> ${myResult3}`);

const myResult4 = mySentence2.substring(-2, -4);    // (0, 0) 
console.log(`\nmyResult4 -> ${myResult4}`);

const myResult5 = mySentence2.substring(3, 1);    // (1, 3)
console.log(`\nmyResult5 -> ${myResult5}`);
