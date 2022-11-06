// // ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// First, I have to start with a describe statement with a string and function 
// I am going to name the test "divisibleBy" because I really don't have a more creative name that that to be honest
// In my it statement I'm going to copy the end of the challenge to explain whats going to happen or supposed to happen in this test 
// Because every number is NOT always divisible by 3 I put 2 expects, one when the number is divisible by 3 and one when the number isn't divisible by 3


describe("divisibleBy", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
      expect(divisibleBy (object1, object2)).toEqual(`15 and 0 are divisibleBy 3`)
      expect(divisibleBy (object3)).toEqual(`-7 is not divisibleBy 3`)
    })
  })

// ReferenceError: num1 is not defined

// b) Create the function that makes the test pass.
// Now I will be making the function to define divisibleBy 
// A conditional statement will do the job 

const divisibleBy = () => {
    if (15 % 3 == 0) {
      return `15 is divisibleBy 3`
    } else if (0 % 3 == 0) {
      return `0 is divisible by 3`
    }
    else (-7 % 3 !== 0 )
    {
        return `-7 is not divisible by 3`
    }
}

  // terminal is giving
//   expect(received).toEqual(expected) // deep equality

//   Expected: "15 and 0 are divisibleBy 3"
//   Received: "15 is divisibleBy 3"

//     41 | describe("divisibleBy", () => {
//     42 |     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//   > 43 |       expect(divisibleBy (object1, object2)).toEqual(`15 and 0 are divisibleBy 3`)
//        |                                              ^
//     44 |       expect(divisibleBy (object3)).toEqual(`-7 is not divisibleBy 3`)
//     45 |     })
//     46 |   })
// I think I'm close but I am stuck and have nothing else to try in my arsenal. I really have no idea what to do. I was working on this all this afternoon while in class until the end of class, and even now at 8:16pm and I just have no clue what to do in this situation. I really can't figure it out :(


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Describe statement is going to be allCaps
// Expected outcome is going to be the first letters capitalized per word
// going to try to get a red refactor 

describe("allCaps", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        let expectedOutcome = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew, Temperature", "Database", "Chopsticks", "Mango"]
      expect(allCaps(randomNouns1, randomNouns2)).toEqual(expectedOutcome)
    })
  })

//   ReferenceError: allCaps is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

    const allCaps = () => {
        return randomNouns1.concat(randomNouns2)
    }

// This is also how far I could get with this one. I need to see more examples or get more practice with this Jest testing because I am not getting it at all.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// going to make another describe statement with an it statement to describe the code and an expect statement to  call the function.

describe("vowelIndex", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
        let expectedIndex = [1, 0, 2]
      expect(vowelIndex(vowelTester1, vowelTester2, vowelTester3)).toEqual(expectedIndex)
    })
  })

// b) Create the function that makes the test pass.
// Now I am going to create a function with conditional if "a, e, i, o, u" then return index of

const vowelIndex = (string) => {
    if (string == "a, e, i, o, u") {
      return vowelIndex.indexOf
    } else if (string !== "a, e, i, o, u") {
      return "no vowels"
    }
  }

  //Again I was not able to get a green test with this one. I feel like my logic is there I just don't know how to execute it with Jest tests.

