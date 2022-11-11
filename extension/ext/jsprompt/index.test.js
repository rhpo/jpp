const prompt = require('./prompt.js');

async function Main() {
    const name = await prompt("What's your name? ");
    console.log('Hi', name, '!');

    const age = await prompt("How old are you? ");
    console.log('You are ' + (age < 18 ? 'underage' : 'old') + '!');
}

Main();
