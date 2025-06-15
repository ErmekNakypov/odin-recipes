let camelize = str => {
    let arr = str.split('-');
    arr = arr[0] + arr.slice(1).map(x => x[0].toUpperCase() + x.slice(1));
    return arr.replace(',', '')
}

//console.log(camelize("background-color"))
//console.log(camelize("list-style-image"))
//console.log(camelize("-webkit-transition"))

let filterRange = (arr, a, b) => {
    return arr.filter(x => x >= a && x <= b)
}

//let arr = [5, 3, 8, 1];
//console.log(filterRange(arr, 1, 4))
//console.log(arr)

function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

//let arr = [5, 3, 8, 1];
//filterRangeInPlace(arr, 1, 4)
//console.log(arr)
//let arr = [5, 2, 1, -10, 8];
//console.log(arr.sort((a, b) => b - a))

function copySorted(arr) {
    return arr.toSorted()
}

//let arr = ["HTML", "JavaScript", "CSS"];
//console.log(copySorted(arr))
//console.log(arr)

function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random(i) * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

//let arr = [1, 2, 3];
//shuffle(arr)
//console.log(arr)

function unique(arr) {
  arr.forEach((x, i) => {
    arr.forEach((y, j) => {
        if (i != j && x == y) {
            arr[j] = undefined
        }
    })
  })

  return arr.filter(z => z != undefined);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings))