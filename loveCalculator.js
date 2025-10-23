const readline = require('readline-sync');

function loveCalculator() {
    const person1 = readline.question("Enter your name: ");
    const person2 = readline.question("Enter your crush's name: ");

    let loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if (loveScore > 70) {
        console.log(`💖 Wow! ${person1} and ${person2}, your love score is ${loveScore}%. A match made in heaven!`);
    } else if (loveScore > 40) {
        console.log(`😊 ${person1} and ${person2}, your love score is ${loveScore}%. There's potential here!`);
    } else {
        console.log(`😕 ${person1} and ${person2}, your love score is ${loveScore}%. It might be a tough road ahead.`);
    }

    console.log(`💖 ${person1} and ${person2}, your love score is ${loveScore}%!`);
}

loveCalculator();