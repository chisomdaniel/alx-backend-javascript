process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    console.log(`Your name is: ${chunk.trim()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
