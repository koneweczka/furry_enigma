// let myArray = ["cat", "dog", "mouse", "elephant", "elk"]

// console.log(myArray)

// const myIndex = myArray.indexOf("elephant");
// // if (myIndex > -1) {
// //     myArray.splice(myIndex, 1)
// // }

// myArray.splice(myIndex, 1)

// console.log(myArray)

let myArray = [
    {summary: "Task 1"},
    {summary: "Task 2"},
    {summary: "Task 3"}
]

// console.log(myArray)

const myIndex = myArray.findIndex(i => i.summary == "Task 2")
// console.log(myIndex)

function removeTask(taskIndex) {
    if (taskIndex > -1) {
        myArray.splice(taskIndex, 1)
        
    }
} 

removeTask(myIndex)
// console.log(myArray)

// Duble:
let dubleArray = [
    {summary: "Task 1"},
    {summary: "Task 2"},
    {summary: "Task 3"}
]

console.log(dubleArray)

function addTask(newTask) {
    if (dubleArray.some(i => i.summary == newTask)) {
        console.log("Jest.")
    } else {
        dubleArray.push({summary: newTask})
    }
}

const checkTask = "Task 2"

addTask(checkTask)

console.log(dubleArray)