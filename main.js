const user = {
  name: 'shin',
  age: 21,

}

//배열
// .length (배열에 아이템의 개수를 출력)
// .concat() (원본의 배열 데이터에는 영향이 없고 새로운 데이터가 합쳐져서 출력 됨)
// .forEach() (메소드에 붙어있는 아이템의 개수 만큼 콜백함수가 반복적으로 실행 됨)
// .map() (콜백에서 반환 된 특정한 데이터를 기준으로해서 데이터의 개수 만큼 데이터들을 반환)
// .filter() ()
// .find() 
// .findIndex(배열의 제로베이스에서 몇번째 존재하는지 확인)
// .includes (데이터가 포함되어 있는지 확인)
// .push() (맨뒤에 데이터를 삽입해줌 //원본 데이터 수정 됨)
// .unshift() (맨앞에 데이터 삽입해줌 //원본 데이터 수정 됨)
// .reverse() (데이터 순서를 뒤집어서 출력 됨)
// .splice(1, 2, 4) (숫자를 제거 하거나 끼워 넣거나 )

//숫자와 수학
// toFixed(2) (소수점 2번째 자리까지 남겨두고 지우기 but 문자 데이터로 출력 됨)
// parseInt 전역함수(정수만 숫자 데이터로 출력 됨)
// parseFloat 전역함수(소수점 자리의 숫자도 유지하면서 숫자 데이터로 출력 됨)
// abs (숫자의 절대값만 출력 됨)
// min (가장 작은 값만 출력 됨)
// max (가장 큰 값만 출력 됨)
// ceil (숫자 올림처리)
// floor (숫자 내림처리)
// round (반올림)


//문자
// length(글자가 몇개가 있는지),
// indexOf(글자가 몇번째 위치해 있는지 없으면 -1이 뜸 이걸로 ture, f를 조정가능)
// slice(어디서 부터 어디까지 글자를 출력하기 ex) 0, 4)
// replace(바꾸고 싶은 문자와 새로 추가 될 문자를 입력하여 교환한다. )
// match(정규표현식 (str.match(/.+(?=@)/)) )
// trim(문자 데이터에 맨앞, 맨뒤의 공백문자 제거)


// class Vehicle{
//   constructor(name, wheel){
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('이동수단', 2)
// console.log(myVehicle)
// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)
// class Car extends Vehicle {
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)


// console.log(myCar)
// console.log(daughtersCar)

//ES6 Classes

// const heropy = {
//   name: 'Heropy',
//   normal(){
//     console.log(this.name)
//   },
//   arrow: () =>{
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()



// function user(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// user.prototype.getFullName = function (){
//   return `${this.firstName} ${this.lastName}`
// }

// const heropy = new user('Heropy', 'Park')
// const amy = new user('Amy', 'Clarke')
// const neo = new user('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())





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


