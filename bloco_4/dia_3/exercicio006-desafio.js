let n = 4;

let divisores = 0;

for (let i = 1; i <= n; i += 1) {
    if (n % i == 0) {
        divisores += 1;
    }
    if (divisores > 2) {
        console.log(n + " não é primo");
        break;
    }
}

if (divisores == 2 || n == 1) {
    console.log(n + " é primo")
}