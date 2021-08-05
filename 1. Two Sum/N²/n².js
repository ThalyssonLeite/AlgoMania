let numbers = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];
const target = 9;

function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            let number1 = numbers[i]
            let number2 = numbers[j]

            if (number1 + number2 === target) {
               return console.log( [number1, number2] )
            }
        }
    }
}

twoSum(numbers, target)