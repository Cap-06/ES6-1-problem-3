// Function to convert a character to lowercase
function charToLower(char) {
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      return char;
    }
  }
  // Function to convert a word to lowercase
  function wordToLower(word) {
    return word.split('').map(charToLower).join('');
  }
  function arrayToLower(array) {
    return array.map(wordToLower);
  }
  // Sample Input
  let inputArray = ["MA", "SA", "I", "SCH", "OOL"];
  
  // Sample Output
  let outputArray = arrayToLower(inputArray);
  
  console.log(outputArray);
  