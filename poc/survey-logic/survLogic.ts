const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const qs = [
  "Question 1",
  "Question 2",
  "Question 3"
]

let cur = 0

const ans = []























const main = () => {
  console.log("Main");


  rl.question(qs[cur], (answer) => {
    ans.push(answer)
    cur = cur++
  })


  
}



main()