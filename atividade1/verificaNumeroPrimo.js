const num = 8;
let primo = true;

if (num === 1) {
    console.log("Número 1 não é considerado primo ou não primo");
}

else if (num > 1) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(`0`);
    } else {
        console.log(`1`);
    }
}

else {
    console.log("Número menor do que 1.");
}
