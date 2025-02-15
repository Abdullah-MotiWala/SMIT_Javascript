const a = [1, 2, 3]
const name = ['a', 'b', 'd', 'u', 'l', 'l', 'a', 'h']
// const b = [1, 2, 3]

// const b = a.map((element, index, array) => {
// console.log(element, index, array)
// return element + 1
// if (index === 0) {
//     return "A" + element
// } else {
//     return element
// }
// })

// const filteredArr = a.filter(function (element, index, array) {
//     console.log(element, index, array)
//     return element != 1
// })
// let myName = "use case"

// const newArr = a.forEach((element, index, array) => {
//     myName += element
// });
// console.log(a, myName, "===array");
// const newValue = name.reduceRight(function (prev, cur, ind, arr) {
//     return prev + cur
// }, 0)

// a.fill("0",1,2)
// console.log(a)


const students = [
    { id: 1, name: "Fareed", time: "6-9" },
    { id: 2, name: "Ahsan", time: "8-9" },
    { id: 3, name: "Ahsan", time: "8-9" },
    { id: 3, name: "Rafeeq", time: "7-9" }
]
// const element = a.find(element => element === 1)
// console.log(element)

// const student = students.find((student, index) => {
//     return student.name === "Ahsan"
// })

// console.log(student)
// const studentIndex = students.findIndex(student => student.id == 2)
// console.log(studentIndex)


const completeName = name.join(" ")
console.log(completeName)
const nameAray = completeName.split(" ")

console.log(nameAray)