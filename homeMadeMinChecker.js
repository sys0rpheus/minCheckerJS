//run checker with an array of Your choosing.
let checker = function (arr) {
    let temp = arr;
    min = arr[0];
    for (let el of temp) {
        if (el <= min) min = el
    }
    return min;
}

//following code generates an array of 100 random numbers from 0 to 1000, uncomment at your will
// let sampArr = []
// for (let i=0; i<100; i++) sampArr.push(Math.floor(Math.random() * 1000));

console.log(checker(sampArr), sampArr)

//it's a very simple algo to check out for the smallest integer in an array. has time complexity of O(n)