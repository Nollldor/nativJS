//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (str, length, separator) => new Array(length).fill(str).join(separator)
/*console.log(repeatString("yo", 3, " "))*/

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str1, str2) => str1.toLowerCase().startsWith(str2.toLowerCase())

/*console.log(checkStart("Incubator", "inc"))*/

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, length) => str.split("").slice(0, length).join("") + "..."

/*console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))*/

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

const getMinLengthWord = (str) => str === ""? null : str.split(" ").reduce((acc, el) => acc.length < el.length ? acc : el)

/*console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))*/

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => str.toLowerCase().split(" ").map((el)=> {
        let newEl = el.split("")
        newEl[0] = newEl[0].toUpperCase()
        return newEl.join("")
    }).join(" ")


/*console.log(setUpperCase("Nhhgjf sdasdasswWfdsfv JHGGK hfJBGFVGD"))*/

//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

const isIncludes = (str1, str2) => str2.toLowerCase().split("").every((el)=>str1.toLowerCase().split("").indexOf(el)>-1)

/*console.log(isIncludes("Incubator", "table"))*/
