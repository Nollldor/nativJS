const ToDoLists = [
    {
        id: 1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: 2,
        title: "What to buy",
        filter: "all",
    },
]

const tasks = {
    [ToDoLists[0].id]: [
        {id: 12, title: "js", isDone: false},
        {id: 13, title: "react", isDone: false},
        {id: 14, title: "type-script", isDone: false},
    ],
    [ToDoLists[1].id]: [
        {id: 22, title: "milk", isDone: false},
        {id: 23, title: "cheese", isDone: false},
        {id: 24, title: "ice-cream", isDone: false},
    ]
}

console.log(tasks[ToDoLists[0].id][0].title)

//reduce

const nums = [10, 20, 30];

//sum
console.log(
    nums.reduce((acc, el) => {
        acc = acc + el
        return acc
    }, 0)
)

//max

console.log(nums.reduce((acc, el) => el > acc ? el : acc))

//если нет инициализируещего аргумента, то берется первый элемент, а перебор идет со второго

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
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
        age: 23,
        isMarried: false,
        scores: 100
    }
];

//найти с самым высоким баллом

console.log(students.reduce((acc, el) => acc.scores < el.scores ? el : acc))

//сумма баллов

console.log(students.reduce((acc, el) => acc + el.scores, 0))

//map увеличить на 10 очки

console.log(students.map(el => ({...el, scores: el.scores + 10})))

console.log(students.reduce((acc, el) => {
    const newScores = el.scores + 10
    acc.push({...el, scores: newScores})
    return acc
}, []))

//массив в объект

const st = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
]

console.log(
    st.reduce((acc, el) => {
        acc[el.id] = {...el} //создаем новое свойство id
        delete acc[el.id].id //удаляем id из значения
        return acc
    }, {})
)