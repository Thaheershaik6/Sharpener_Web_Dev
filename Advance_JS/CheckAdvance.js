console.log('Hello advance js');
// F:\Sharpener Assignments\Advance JS\CheckAdvance.js
// Advance JS\CheckAdvance.js

var arr = [1, 2, 3, 5]



var newArr = arr.forEach((item, i) => {

    console.log(item + 'index' + i)

    return item + i

})



console.log(newArr + "---------------")



var arr = [1, 2, 3, 5]



var newArr = arr.map((item, i) => {

    console.log(item + 'index' + i)

    return item + i

})



console.log(newArr)
