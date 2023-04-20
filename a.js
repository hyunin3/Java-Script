const name = 'Tom'
console.log(`Hi, my name is ${name}`)

const add = (x, y) => {return x+y}
console.log(add(1, 2))


const tom = {
name: 'Tom',
introduce () {
    console.log('Hi, my name is ' + this.name)
  }
}
tom.introduce()


const url = 'https://test.com'
const data = { message: 'Hello World!' }

const request = { url, data }
console.log(request)