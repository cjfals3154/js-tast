function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`
}

const heropy = new user('Heropy', 'Park')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())

















//함수 복습
//매개 변수
// function sum(){
//   console.log(arguments)
//   return
// }

// console.log(sum(7,3))




//인수
// sum(1, 3)
// sum(5, 16)


//함수 복습
// function sum(x, y){
//   return x+y
// }

// const a = sum(1, 3)
// const b = sum(5, 16)

// sum(1, 3)
// sum(5, 16)
// console.log(a)
// console.log(b)
// console.log(a+b)


























//반복문
// for (시작조건; 종료조건; 변화조건){}

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1){
//     const li = document.createElement('li')
//     li.textContent = `list-${i + 1}`
//   if((i+1) % 2 === 0){
//     li.addEventListener('click', function(){
//       console.log(li.textContent)
//     })
//   }
//     ulEl.appendChild(li)
//   }



// import random from './getRandom'

// const a =random()

//스위치

// switch(a){
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
// }

//조건문

// if (a===0){
//   console.log('a is 0')
// } else if(a === 2){
//   console.log('a is 2')
// } else if(a === 4){
//   console.log('a is 4')
// }  else {
//   console.log('rest...')
// }


// 할당 연산자 (assignment operator)

// let a = 2
// // a = a + 1
// a -= 1
// console.log(a)

// 비교 연산자 (comparsion operator)
// const a = 5
// const b = 5

// console.log(a >= b)


//논리 연산자 (logical operator)
// const a = 1 === 13
// const b = 'AB' === 'ABC'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&:', a && b && c)
// console.log('||:', a || b || c)
// console.log('!', !a)


// 삼항 연산자 (ternary operator)

// const a = 1 < 2

// if (a) {
//   console.log('참')
// } else{
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


