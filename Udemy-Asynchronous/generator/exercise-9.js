
function * randomN(number) {
    while (true) {
        const randN = Math.floor(Math.random() * number) + 1;
        yield randN;
    }
}

const rand100 = randomN(100);
console.log(rand100.next());
console.log(rand100.next());

console.log('\n\n');

const rand10 = randomN(10);
console.log(rand10.next());
console.log(rand10.next());