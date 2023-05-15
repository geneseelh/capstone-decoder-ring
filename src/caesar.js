// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  //define the alphabet as a string
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false
    }
    
    //initialize the result string
    let result = "";

    //convert input to lowercase so that it ignores capital letter
    input = input.toLowerCase();

    //if decoding, shift the letters in the opposite direction
    if(!encode){
      //use modulo to wrap around shift value if its >= 26, subtracting shift value from 26 and taking the result modulo 26
        //flips the direction of the shift so that a pos shift becomes negative shift and vice versa
        //ensures the resulting shift value is always between -25 and 25 
      shift = (26 - shift) % 26; 
    }

    //loop through each character in the input string
    for(let i = 0; i < input.length; i++){
      //get the current character
      const currentChar = input[i];

      //check if the current character is an alphabetic letter
      if(alphabet.includes(currentChar)){
        //find the index of the current character in the alphabet
        const currentIndex = alphabet.indexOf(currentChar);

        //calculate the new index after shifting
        let newIndex = (currentIndex + shift) % 26;

        //check if newIndex wraps around the alphabet
        if(newIndex < 0){
          //set newIndex
          newIndex += 26;
        }

        //add the shifted character to the result string
        result += alphabet[newIndex];
      
      //else if its a non-alphabetic character
      } else { 
        //add the non-alphabetic character to the result string
        result += currentChar;
    } 
  }
  //return the encoded or decoded result string
  return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };