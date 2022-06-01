const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

/*const names = students.map(el=>el.name)

console.log(names)*/

/*
const names = (arr) => {
    const result = []

    const fn = (st) => st.name

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]))
    }

    return result
}

console.log(names(students))

const getMappedArray = (arr, fn) => {
    const result = []


    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]))
    }

    return result
}

console.log(getMappedArray(students, el=>({...el,scores: el.scores+10})))*/

/*const filterScores100 = students.filter(el => el.scores > 100)

console.log(filterScores100)*/

const myFilter = (arr, fn) => {
    let result = []

    for (let el of arr) {

        if (fn(el)) {
            result.push(el)
        }
    }

    return result
}

console.log(myFilter(students, (el) => (el.scores >= 100)))