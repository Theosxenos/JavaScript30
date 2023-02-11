// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isadult = people.some((p) => {
    let currentyear = (new Date).getFullYear();

    return currentyear - p.year >= 19 ? true : false;
});

console.log({ isadult });

// Array.prototype.every() // is everyone 19 or older?
const alladults = people.every((p) => {
    let currentyear = (new Date).getFullYear();
    return currentyear - p.year >= 19;
});

console.log({ alladults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((c) => c.id == 823423);
console.log({ comment });

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let index = comments.findIndex((value) => value.id == 823423);
let newarr = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];
let deleted = comments.splice(1, 1);

console.log(deleted);
console.log(newarr);
console.table(comments);