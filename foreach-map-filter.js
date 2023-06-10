/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues2(arr){
    let doubleArr = [];
    for (let i =0; i <arr.length; i++){
        const x = arr[i];
        doubleArr.push(x * 2);
    }
    return doubleArr;
}

function doubleValues(arr){
    let doubleArr = arr.map(function(num){
        return num*2
    });
    return doubleArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues2(arr){
    let evenArr = [];
    for (let i =0; i < arr.length; i++){
        if( arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;    
} 

function onlyEvenValues(arr){
    let evenArr = arr.filter(function(num){
        return num % 2 === 0;
    })
    return evenArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast2(arr){
    let firstLast = [];
    for (let i = 0; i <arr.length; i++){
        let word = arr[i];
        let ind = word.length - 1
        let f = word.charAt(0);
        let l = word.charAt(ind);
        let fl = f + l;
        firstLast.push(fl);
    }
    return firstLast;
}

function showFirstAndLast(arr){
    let fL = arr.map(function (word){
        return word.charAt(0) + word.charAt(word.length-1);
    })
    return fL;
}

//Had to rewrite the first three functions after realizing that I was doing the long coding and not using the new array functions: map, forEach and filter. 

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let addedArr = arr.map(function(obj){
        obj[key] = value; 
        return obj;
    })
    return addedArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
   let vowels = 'aeiou';
   let lowerStr = str.toLowerCase();
   let objCount = {};
   
   for (let letter of vowels){
    let count = 0;
    for (let char of str){
        if (letter === char){
            count++;
        }
        if(count>0){
            objCount[letter] = count;
        }
    }
   }
   return objCount;
}



/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubleArr = arr.map(function(num){
        return num * 2;
    })
    return doubleArr;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let arrMult = arr.map(function(num, index){
        return num * index;
    })
    return arrMult;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    let filteredArr = [];
    arr.filter(function(word){
        let arrVal = word[key];
        filteredArr.push(arrVal);
    })
    return filteredArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let filteredArr = [];
    arr.map(function(obj1){
        let name = obj1.first + ' ' + obj1.last
        filteredArr.push(name);
    })
    return filteredArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    let filteredArr = [];
    arr.filter(function(obj1){
        if (obj1[key]){
            filteredArr.push(obj1)
        }
    })
    return filteredArr;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let notice = undefined;
    arr.forEach(function(num){
        if (num === searchValue){
            notice = num;
        }
    })
    return notice;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let firstAns = [];
    arr.filter(function(obj1){
        if (obj1[key] === searchValue){
            firstAns.push(obj1);
        }

    })
    return firstAns[0];
}
//Not super stoked about this code.. I know that their is a better way to use 'break' when something happens, but I couldn't get it messing around on my own. I guess thats what google and chatGPT are for? :)

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
let vowels = 'aeiou'   
let newStr = Array.from(str.toLowerCase())
                .filter(function(char){
                    let count = 5;
                    for (let letter of vowels){
                        if (char === letter){
                            count--;
                        }}
                    if (count === 5){
                     return true;
                    }
                    else{
                      return false;
                    }
                }).join('');
return newStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let oddDoubledArr = [];

    arr
    .filter(function(num){
        if (num % 2 === 1)
        {return true}
    })
    .map(function(num){
        oddDoubledArr.push(num * 2);
    })
    return oddDoubledArr;
}
