const muu100 = x => x * 100
const ado5 = x => x - 5

const f = 1
console.log(ado5(muu100(f)))

//n * 100 - 5

const add3 = x => x + 3
const mul8 = x => x * 8

const n = 2
console.log(add3(mul8(add3(n))))

//(n + 3) * 8 + 3