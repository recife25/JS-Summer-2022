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
const countryNameL = countryName.split('').length;
console.log(`Q1 - length of name w/o string-length ${countryNameL}`);

 /**
  * Q2:
  * Count the number of words in the sentence
  * call the split()method it includes spaces
  * split() method returns array here access length property 
  * \w between one & other word char
  * /g global keep counting after 1st match
  */
// 
numWords = ('If the function returns a truthy value, the element gets added to the array'.split(' '));
countWords = numWords.length;
console.log(`Q2 - Count the number of words > ${countWords}`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  * 
  */

const word = ('have');
let split_word0 = (word.split(' '));
let first_letterUC = (word.substring(0, 1).toUpperCase());
let rest_letterLC = (word.substring(1).toLowerCase());
let concat = (first_letterUC.concat(rest_letterLC));

const word1 = ('a');
let split_word1 = (word1.split(' '));
let single_letterUC1 = (word1.substring(0, 1).toUpperCase());

const word2 = ('great');
let split_word2 = (word2.split(' '));
let single_letterUC2 = (word2.substring(0, 1).toUpperCase());
let rest_letterLC1 = (word2.substring(1).toLowerCase());
let concat1 = (single_letterUC2.concat(rest_letterLC1));

const word3 = ('day');
let split_word3 = (word3.split(' '));
let single_letterUC3 = (word3.substring(0, 1).toUpperCase());
let rest_letterLC3 = (word3.substring(1).toLowerCase());
let concat2 = (single_letterUC3.concat(rest_letterLC3));
console.log(`${concat} ${single_letterUC1} ${concat1} ${concat2}`);
            
            



 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
 
 
 
 