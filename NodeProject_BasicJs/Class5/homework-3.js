/**
 * Felipe J Ruiz (Phil)
 * homework-3.js 
 *
 *  Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
//let countryName = 'USA USA';
let countryName = 'United States of America'
const foo = countryName.split('').length;
console.log(`Q1 - length of name w/o string-length ${foo}`);


 /**
  * Q2:
  * Count the number of words in the sentence
  * call the split()method it includes spaces
  * split() method returns array here access length property 
  * \w between one & other word char
  * /g global keep counting after 1st match
  */
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let wordCount = sentence.match(/(\w+)/g).length;
console.log(`Q2 - wordcount in sentence ${wordCount}`);
 
 
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
 
 
 
 