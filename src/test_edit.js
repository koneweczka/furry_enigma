let myArray = ["cat", "dog", "elephant", "elk", "sheep"]

console.log(myArray)

//SLICE - ma 3 argumenty:
// start - odkąd ma zacząć modyfikować
// deletedCount - ile ma usunąć elementów
// co ma dać w zamian

// To dodaje mouse na pozycji nr 3.
// myArray.splice(3, 0, "mouse")

// To zmienia elk na mouse
myArray.splice(3, 1, "mouse")

console.log(myArray)


// let myFish = ["anioł", "klaun", "mandarynka", "jesiotr"];
// console.log("myFish: " + myFish);

// let removed = myFish.splice(2, 0, "bęben");
// console.log("Po dodaniu 1: " + myFish);
// console.log("Usunięty jest: " + removed);


///////////////////////////////////////////////

// let myArray = [
//     {summary: "Task 1"},
//     {summary: "Task 2"},
//     {summary: "Task 3"}
// ]

// // console.log(myArray)

// const myIndex = myArray.findIndex(i => i.summary == "Task 2")
// // console.log(myIndex)

// function removeTask(taskIndex) {
//     if (taskIndex > -1) {
//         myArray.splice(taskIndex, 1)
        
//     }
// } 

// removeTask(myIndex)
// console.log(myArray)