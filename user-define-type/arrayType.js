export let numbers = [1, 2, 3, 4, 5];
export let userss = ["saiful", "shakib", "toma"];
for (let index = 0; index < userss.length; index++) {
    const element = userss[index];
    console.log(element);
}
userss.forEach((element) => {
    console.log(element);
});
userss.sort();
console.log(userss);
userss.push('saimon');
console.log(userss);
userss.pop();
console.log(userss);
userss.unshift('milon');
console.log(userss);
userss.shift();
console.log(userss);
// multi-types array
// let userss: (number | string)[];
// userss = [10, "saiful", 25, 35, "islam"];
