const readline = require('readline-sync');

function loveCalculator() {
    const person1 = readline.question("Enter your name: ");
    const person2 = readline.question("Enter your crush's name: ");

    let loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    console.log(`💖 ${person1} and ${person2}, your love score is ${loveScore}%!`);
}

loveCalculator();