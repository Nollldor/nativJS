const names = ["Arthur", "Donald", "Bob", "Vlad", "Alex"]
//сорт сортирует строки по кодам юникода
//цифры как строки, заглавные потом строчные английские, потом русские
console.log(names.sort())


const numbers = [100, 99, 665, 1000, 2]

console.log(numbers.sort())

//callback для sort
// return >0 => перестановка
// return <=0 => перестановки нет

const compareFunc = (a, b) => {//по возрастанию
    if (a > b) {
        return 10 //любое число >0
    } else {
        return -10//любое число <=0
    }

}

console.log(numbers.sort(compareFunc))

//можно не выносить колбек
console.log(numbers.sort((a, b) => a - b))

//sort работает мутабельно

//в реальной жизни сортировать нужно массивы объектов

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b) => a.scores - b.scores))
console.log(students.sort((a, b) => a.scores - b.scores).reverse())

// метод localCompare
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))


//bubble sort

const nums = [65, 43, 12, 22, 999] //по возрастанию

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true

    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        }
    }

    if(isSorted)break
}

console.log(nums)
