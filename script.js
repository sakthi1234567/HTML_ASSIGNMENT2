// TO print odd number
console.log("1.TO PRINT ODD NUMBER")
function printOdd(arr){
for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
        console.log(arr[i])
    }
}
}
printOdd([1,2,3,4,5,6,7,8,9,10,11,12,13])

//Convert all the strings to title caps in a string array\
console.log('2.Convert all the strings to title caps in a string array')

function titileCase(str) {
    var title = str.toLowerCase().split(" ").map(function(elem){
        return elem[0].toUpperCase() + elem.slice(1)
    })
    return title.join(' ')
}
console.log(titileCase('i am a little tea pot'))

//Convert all the char to title caps in a string array
console.log('3.Convert all the char to title caps in a string array')
function titleCase(str){
    var wpord = str.toLowerCase().split('')
    for(i=0;i<wpord.length;i++){
        wpord[i]=wpord[i].toUpperCase()
    }
    return wpord.join('')
} 

console.log(titleCase('hello'))


//Sum of all numbers in an array
console.log('4.Sum of all numbers in an array')

function sumAll(arr){
    var total =  0
    for(i=0;i<arr.length;i++){
        total += arr[i]
    }
    return total
    }
console.log(sumAll([1,2,3,4,5,6]))
//Return all the prime numbers in an array
console.log("5.Return all the prime numbers in an array")
/*  filtered non prime number in an array example code

const arr = [1,2,3,4,5,6,7,8,9]

function isPrime (n) {
    if (n === 1) {
        return false
    }
    
    else if (n === 2) {
        return true
    }
    else{ 
        for (let i = 2; i < n; i++) {
            if (n % i === 0)
                return false
        }
        return true
    }
}

function filterPrime (arr){
    var filtered = arr.filter(el => !isPrime(el))
    return filtered
}

console.log(filterPrime(arr)) */



// const arr = [1,2,3,4,5,6,7,8,9,1,2,23,1]

function isPrime (n) {
    if (n === 1) {
        return true
    }
    
    else if (n === 2) {
        return false
    }
    else{ 
        for (let i = 2; i < n; i++) {
            if (n % i === 0)
                return true
        }
        return false
    }
}

function filterPrime (arr){
    var filtered = arr.filter(el => !isPrime(el))
    return filtered
}

console.log(filterPrime([1,2,3,4,5,6,7,8,9,1,2,23,1])) 

// Return all the palindromes in an array
console.log('6.Return all the palindromes in an array')

function isPalindrome (el){
    let str = String (el)
    let i = 0
    let j = str.length-1
    while (i<j) {
        if (str[i]===str[j]) {
            i++
            j--
        }
    else {
        return false
    }
    }
return true
}

function findPalindrome (arr){
    return arr.filter(el=>(isPalindrome(el)))
}

console.log(findPalindrome(['carecar', 1344, 12321, 'did', 'cannot']))

//Return median of two sorted arrays of same size
console.log("7.Return median of two sorted arrays of same size")
function median (a, b)  {
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b)
    
    //Get the floor value
    let half = c.length / 2 | 0
    
    //If odd then return middle element
    if (c.length % 2) return c[half]
    
    //If even then return the average of two mid elements
    return (c[half] + c[half - 1]) / 2
}

//const arr1 = [1, 12, 15, 26, 38]
//const arr2 = [2, 13, 17, 30, 45,]
console.log(median([1,2],[3,4,5]))   

// g.	Remove duplicates from an array
console.log("8.Remove duplicates from an array")

//let chars = ['A', 'B', 'A', 'C', 'B'];
//let uniqueChars = [...new Set(chars)];

//console.log(uniqueChars);

let A = [1,2,3,4,5,89,76,4,3,1];

let uniqueChars = [];
A.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);


//Rotate an array by k times

console.log('9.Rotate an array by k times')

function rotate (arr,k){
    let i = 0
    while (i<k) {
        arr.unshift(arr.pop())
        i++
    }
    return arr
}

console.log(rotate([1,2,3,4,5,6],3))