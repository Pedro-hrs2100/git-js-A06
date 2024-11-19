let phrase = "JavaScript is fun!";
let counter = 0;

for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
    if (phrase[i] === 'a') counter++;
}

console.log("Número de 'a':", counter);

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
