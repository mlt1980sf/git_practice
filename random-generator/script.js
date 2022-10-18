const jokes = {
    header: ['Knock knock!', 'Guess what?', "A priest and a rabbi walk into a bar"],
    body: ['Who\'s there?', 'What?', 'The bartender asks them what they\'ll have to drink'],
    footer: ['No one- this is lame', 'I\'m bored', 'They both say, water of course']
};

const randNumGen = maxNum => {
    return Math.floor(Math.random() * maxNum);
}

const generateJoke = jokeContent => {
    return jokes.header[randNumGen(jokes.header.length)] + ' ' + jokes.body[randNumGen(jokes.body.length)] + ' ' + jokes.footer[randNumGen(jokes.footer.length)];
}

console.log(generateJoke(jokes));