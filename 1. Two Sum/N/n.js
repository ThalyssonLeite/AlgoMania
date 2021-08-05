let numbers = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];
const target = 9;

function twoSum(numbers, target) {
    let map = {}

    for (let n of numbers) {
        let y = target - n

        if (map[y] === undefined) {
            map[n] = true
        } else {
            return console.log( [y, n] )
        }
    }
}

twoSum(numbers, target)