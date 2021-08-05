let numbers = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];
const target = 9;

function twoSum(numbers, target) {
    numbers = numbers.sort((a, b) => a - b)

    let leftPointer = 0
    let rightPointer = numbers.length - 1

    while (leftPointer < rightPointer) {
        let leftNumber = numbers[leftPointer]
        let rightNumber = numbers[rightPointer]
        let numberSum = leftNumber + rightNumber
        
        if (numberSum < target) {
            leftPointer++
        } else if (numberSum > target) {
            rightPointer--
        } else {
           return console.log( [leftNumber, rightNumber] )
 
        }
    }
}

twoSum(numbers, target)