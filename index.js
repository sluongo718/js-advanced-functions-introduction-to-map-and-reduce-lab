// Your code here
function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(arr) {
   return arr
}

function mapToDouble(arr) {
    return arr.map(x => x * 2);
}

function mapToSquare(arr) {
    return arr.map(x => x * x);
}

const reduceToTotal = (arr, startingPoint = 0) => {
    return arr.reduce((sum, current) => sum + current, startingPoint)
}

const reduceToAllTrue = (arr) => {
    return arr.every(x => x)
}

const reduceToAnyTrue = (arr) => {
    let curr = false
    arr.forEach(e => {
        if (e === true) curr = true
    })
    return curr
}