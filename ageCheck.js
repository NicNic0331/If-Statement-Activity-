const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (input) => {
  const age = parseInt(input);

  if (age < 13) {
    console.log('You are a child.');
  } else if (age >= 13 && age <= 19) {
    console.log('You are a teenager.');
  } else {
    console.log('You are an adult.');
  }

  rl.close();
});
