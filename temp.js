const data = [
  {
    mca: -1,
  },
  {
    mba: {
      rno: 11221368,
      out: {
        correct: 53,
        wrong: 26,
        noValue: 15,
        bonus: 6,
        total: 100,
      },
      marks: {
        positive: 53,
        negative: -6.5,
        bonus: 6,
        total: 52.5,
        priority: 18,
      },
      percentile: 99.09909909909909,
      rank: 1,
    },
  },
]

// Get total marks for MCA
// console.log(data[0].mca !== -1)                
const mca = data[0].mca !== -1 ? data[0].mca : null
const mba = data[1].mba !== -1 ? data[1].mba : null

console.log('Total marks for MCA:', mcaTotal)
console.log('Total marks for MBA:', mbaTotal)
