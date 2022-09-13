const text = "Hello. I am sample text! How are you?";
const regex = /[A-Z].{0-9}?(\.|\?|!)/g;

console.log(text.match(regex));
