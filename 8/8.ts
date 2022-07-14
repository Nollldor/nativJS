// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a - b - c >= 0 || b - a - c >= 0 || c - a - b >= 0) {
        return "00"
    } else if (a === b && b === c) {
        return "10"
    } else if (a === b || b === c || a === c) {
        return "01"
    } else {
        return "11"
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sumOfNums = 0

    do {
        sumOfNums += number % 10
        number = Math.floor(number / 10)
    } while (number > 0)

    return sumOfNums
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = arr[0]
    let oddSum = 0

    for (let i = 1; i < arr.length; i += 2) {
        oddSum += arr[i]
    }

    for (let i = 2; i < arr.length; i += 2) {
        evenSum += arr[i]
    }
    return evenSum > oddSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 1 === 0) {
            result.push(array[i] ** 2)
        }
    }

    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {

    return (1 + N) * N / 2
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

    let i = 0
    const result = []

    do {
        if (amountOfMoney - banknotes[i] >= 0) {
            amountOfMoney -= banknotes[i]
            result.push(banknotes[i])
        } else {
            i++
        }
    } while (amountOfMoney > 0)

    return result
}