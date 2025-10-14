// let a=["apple","banana","orange","apple","orange"];
// //output apple=
// const =countReset(a)
let a = ["apple", "banana", "orange", "apple", "banana"];
let count = {};

for (let fruit of a) {
    if (count[fruit]) {
        count[fruit]++;
    } else {
        count[fruit] = 1;
    }
}

for (let fruit in count) {
    console.log(`${fruit}=${count[fruit]}`);
}
