/*const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Arthur", "John", "joe"],
    address: {
        city: "Ufa",
        street: "Lenina"
    }
}

//const copyUser = {...user, friends: [...user.friends], address: {...user.address}};

const copyUser = structuredClone(user);

console.log(copyUser)
console.log(copyUser===user)*/


const students = [
    {name: "bob"},
    {name: "alex"},
    {name: "Ann"},
]

let deepCopyStudents = [];
/*deepCopyStudents = students.map((el) => {
    return {...el};
});*/

deepCopyStudents = students.map(el => ({...el}));

console.log(deepCopyStudents);
console.log(deepCopyStudents === students);