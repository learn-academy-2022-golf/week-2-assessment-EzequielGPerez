// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: It will grab each character in te string and make each index its own string like ["G", "o", "l", "f", " "]
// b) Verify and explain: The reason that happened was because split was using ("") and thats told it to target each index and make it its own string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This shouldn't log anything
// b) Verify and explain: It logged undefined. "LEARN Student" would need to be in the {} code block but it has nothing to be referenced to. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This should multiply each of the numbers by 2
// b) Verify and explain: .map iterates through the array and since we are asking it to go through, as it goes through it will multiply each number by 2 and return those values back to us when we call upon multipliedByTwo.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will only give us the odd numbers in the array
// b) Verify and explain: It did only return odd numbers 11, 13, and 15. .filter will iterate through the array but bring us a shorter ammount of index values. In this case we asked to only give us odd numbers so it went through the array and checked if each number was odd, if it was not odd it did not return it to us. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This should just give us "J"
// b) Verify and explain: I forgot for it to give us "J" it would need another index [0]. But pretty much what is going on in the console.log is that we are asking it to give us a certain thing inside of myCodingSkills. in this case we are asking for key value inside languages and by adding [0] at the end we are invoking for "JavaScript"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I am guessing it will change the cohort?
// b) Verify and explain: The reason I thought it would change the cogort is because that is the only other string "" in there and I wasn't sure how it would know that we are changing the name if we didn't invoke this.student or name. 
