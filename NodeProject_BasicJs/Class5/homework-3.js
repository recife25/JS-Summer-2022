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
  * 
  */
// const str = 'have a great day';
// const newStr = str.split()
//     .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//     .join('');
//     console.log(newStr);
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    //create function - map and split 
    //map to index value to lowercase
    //split the str into array 
    //join values with 
    // \b metachar matches at the begining of a word search for the pattern HA = \bHA
    // \w any word char (\w), any non-word char (\W)
    //   /\ regular expressions regex to match
    // /g, means global replaces call to replace all matches
    // s refers to spaces & => arrow function left part denotes input of a function, right part output of a function
}
console.log(titleCase('Q3 - TitleCase > have a great day'));
console.log(titleCase('Q3 - TitleCase > YOu lIVe ONlY ONcE'));

 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * str assigned four letter sentence
  * convert it lowercase
  * split into array 
  * select the first char of a word using index 
  * select first letter of word() w()using loop to travers the array 
  * split into new array only single words 
  * join 0r concat first letters 
  * console.log(abbreviation)
  * 
  */
 
 
 
 
 