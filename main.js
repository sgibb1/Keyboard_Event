const words = ['javascript', 'ruby', 'python', 'haskell', 'java', 'golang'];

let startingGuesses = 5;

const guessesEl = document.querySelector('#guesses');
guessesEl.textContent = 5;
const randomWord = words[Math.floor(Math.random() * 6)];
console.log(randomWord);
let wordToGuess = ''
for(let i = 0; i < randomWord.length; i++) {
  wordToGuess += '_'
}
const wordEl = document.querySelector('#word');
wordEl.textContent = wordToGuess;

document.body.addEventListener('keyup', function(event) {
  const letterIndex = randomWord.indexOf(event.key);
  console.log(letterIndex);
  if(letterIndex === -1) {
    startingGuesses--;
    guessesEl.textContent = startingGuesses;
  } else {
    let wordArray = wordToGuess.split('');
    for(let i = 0; i < wordToGuess.length; i++) {
      if(randomWord[i] === event.key) {
        wordArray[i] = randomWord[i];
      }
    }
    wordToGuess = wordArray.join('');
    wordEl.textContent = wordToGuess;
  }
});
