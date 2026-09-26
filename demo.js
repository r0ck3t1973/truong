function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const dem1 = counter();
const dem2 = counter();

dem1(); // 1
dem2(); // 2
dem2(); // 3