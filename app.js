// selectors
const message = document.querySelector(".message");
const input = document.querySelector("input");
const button = document.querySelector("#btn");
// array of words
let array = ["javascript", "money", "hello", "meditation", "coding"];
// place holders
let inPlay = false;
let scramble = "";
let scrambled = "";
let score = 0;

button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    button.innerHTML = "Guess";
    input.classList.toggle("hidden");
    scramble = createWord(array);
    scrambled = shuffle(scramble.split(""));
    message.innerHTML = scrambled;
  } else {
    score++;
    let tempGuess = input.value;
    if (scramble === tempGuess) {
      inPlay = false;
      message.innerHTML = `
        it is correct. the word was ${scramble}
        and you done it in ${score} guess.
        `;
      button.innerHTML = "start";
      input.classList.toggle("hidden");
    } else {
      message.innerHTML = `
        Wrong. guess again : ${scrambled}
        `;
    }
  }
});

// create shuffled words from an array
function createWord(arr) {
  //pick one random index from an arry
  const randomIndex = Math.floor(Math.random() * arr.length);
  // pick one random item
  const tempWord = arr[randomIndex];

  return tempWord;
}

// this algorithm shuffles an array
function shuffle(arr) {
  // reverse loop
  for (let index = arr.length; index > 0; index--) {
    // reversed letters
    let temp = arr[index];
    // random index
    let j = Math.floor(Math.random() * (index + 1));
    // swap reversed index to random index
    arr[index] = arr[j];
    // swap random index to reversed index
    arr[j] = temp;
  }
  // the letters array well shuffled and return as word
  let result = arr.join("");
  return result;
}
