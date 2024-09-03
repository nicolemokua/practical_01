// Create a string variable
let sentence = "The quick brown fox jumps over the lazy dog";

// The word to check for
let wordToCheck = "fox";

// Check if the string contains the specific word
if (sentence.includes(wordToCheck)) {
    console.log(`The word "${wordToCheck}" was found in the sentence.`);
} else {
    console.log(`The word "${wordToCheck}" was not found in the sentence.`);
}