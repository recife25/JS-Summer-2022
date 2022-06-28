/**
 * multi-character
 * 
 * single-character
 * 
 * 
 * numbers 
 *      whole (age, numbeOfHouse, siblings, month, date, year)
 *      decimal (accountBalance, weight, distance, height)
 * 
 * boolean 
 *  true/false
 * 
 * datatypes in programming:
 * 1 string 
 * 2 char
 *  ->Js considers character as string datatype
 * byte, short, long , int 
 * float, double
 *  ->Js considers digits as number datatype
 * 
 * variables
 * in java, if i want to store int-value, so i need int-variable
 * in js, if i want to store int-value, so i need a variable
 * 
 * let myAge = 20;
 * //print my age in the console using myAge-variable
 * console.log(typeof myAge);
 * 
 * 
 * typeof operator helps us to check the typer of any variable
 * 
 * variable can be created using keywords
 * let 
 * var 
 * 
 * var -> allow us to redeclare variable using same-name of existing variable
 * let -> does not allow us to redeclare variable using same-name of existing variable
 * 
 * let is better 
 * 
 * let myAge = 10;
 * or 
 * var myAge = 10;
 * 
 * let myAge1 = 100;
 * 
 * let does not allow to create multiple-variables with same name is a scope
 * 
 * var myName = 'Felipe'
 * console.log(myName);
 * 
 * var myName = 'abcd'
 * console.log(myName);
 * 
 * Good practice to provide names:
 * 1 variables
 *  a. name should relate to the stored value
 *  b. cannot use js-keywords (let, var, typeof, console etc)
 *  c. cannot use spaces
 *  d. starts with lowercase
 *  e. never start with digit or special character
 *  f. if name is more than one word, use camelCaseFormat
 * 
 *          eg: my age -> myAge
 *              my dog age -> myDogAge
 * 2 Package/Files:
 *  a. name should relate to the stored files/packages
 *  b. cannot use js-keywords, (let, var, typeof, console etc)
 *  c. cannot use spaces 
 *  d. starts with Uppercase
 *  e. never start with special character
 *  f. if name is more than one word, use CamelCaseFormat
 *  eg: 
 * Class 1 files -> Class1Files
 * Class 1 files -> Class1_Files
 * 
 * //print age like -> my name is Felipe and I am old 
 * let userName = 'Felipe Ruiz';
 * enclose the value in single quotes: 
 * let userAge = 22;
 * 
 * console.log(`my name is ${userName}, and I am ${userAge} years old`);
 * 
 * let userName1 = 'felipe'; //to store String-value in variable, enclose the value in single quotes: 
*  let useAge1 = 20;
    
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


let lvar1 = 10;
let lvar2 = 20;
let lvar3 = 30;
let lvar4 = 40;



let res1 = lvar1 + lvar2++;
console.log(`\n\nlvar1 = ${lvar1};`);
console.log(`lvar2 = ${lvar2};`);
console.log(`res1 = ${res1};`);
