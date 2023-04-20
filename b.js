
const tom = {
  name: 'Tom',
  introduce () {
    console.log(`Hi, my name is ${this.name}`)
  }
}
// console.log(tom)
// const tom = {
//   name: 'Tom',
//   introduce(){

//     return `Hi, my name is ${this.name}`
//   }
// }
console.log(tom.name)
tom.introduce()
// console.log(tom.introduce())


const url = 'https://test.com'
const data = { message: 'Hello World!' }
const request = { url: url, data: data }

