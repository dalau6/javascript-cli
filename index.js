#! node-cli/Users/D7LE/.asdf/shims/node
const readline = require('readline');

console.log('Hello CLI');

// get an input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

const answerCallback = answer => {
  if (answer === 'Happy' || answer === 'happy') {
    console.log('Glad to hear that');
    rl.close();
  } else if (answer === 'Sad' || answer === 'sad') {
    console.log('Hope you feel better tomorrow');
    rl.close();
  } else {
    console.log('Are you Happy or Sad ?');
    rl.question('How are you doing today (Happy, Sad)?  ', answerCallback);
  }
};

// rl object question method is to ask a question to the user
rl.question('How are you doing today (Happy, Sad)?  ', answerCallback);
