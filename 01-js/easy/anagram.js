/*
  24/06/23
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortString(str) {
    return [...str].sort().join('');
}
/*
the line return [...str].sort().join(''); takes an input string (str), converts it into an array of characters, 
sorts the characters in lexicographic order, and then joins them back together to form the final sorted string, 
which is returned as the output of the sortString function.
*/
function isAnagram(str1, str2){
    if(str1 == str2){
    return true;
  }else{
    return false;
  }
}

const inputString1 = "rasp";
const sortedString1 = sortString(inputString1);
const inputString2 = "spar";
const sortedString2 = sortString(inputString2);

var ans = isAnagram(sortedString1,sortedString2);
console.log(ans);
