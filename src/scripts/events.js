// click

// const btn = document.querySelector('.btn')

// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }
  
// function changeBackgroundColor() {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// }

// function bgChange(event) {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     event.target.style.backgroundColor = rndCol;
//     console.log(event.target);
//   }
  
// btn.addEventListener('click',bgChange)
  
// btn.removeEventListener('click',bgChange)

//   btn.onclick = function() {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//   }





 // submit

// const form = document.createElement('form')
// const input = document.createElement("input");
// input.name = 'test'
// const submitBtn = document.createElement('button')
// submitBtn.type = 'submit'
// submitBtn.textContent = 'submit'

// form.append(input, submitBtn)

// document.body.append(form);


// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     console.log(event.target.test.value)
//     event.target.test.value = ''

// })


// input change

// const names = ["Олег", "Сергей","Сельвестр", "Соня", "Евгений", "Дима", "Таня", "Артур"];

// const list = document.createElement("ul");
// document.body.append(list);

// const renderList = (arr) => {
//      list.innerHTML = ''
// 	arr.forEach((name) => {
// 		const listItem = document.createElement("li");
// 		listItem.textContent = name;
// 		list.append(listItem);
// 	});
// };


// const search = (arr, value) => {
//     const filterArr = arr.filter(item => item.toLowerCase().includes(value.toLowerCase()))
//     return filterArr
// }

// renderList(names)



// input.addEventListener("change", (event) => {
//     const { target } = event;

//     const searchNames = search(names, target.value)
//     renderList(searchNames)
// 	console.log(target.value);
// });



// всплытие и погружение 

// const section = document.createElement('section')
// section.textContent = 'SECTION'
// section.style.border = '1px solid blue'
// section.style.padding = '10px'
// section.style.margin = '20px'
// section.style.textAlign = 'center'

// const div = document.createElement('div')
// div.textContent = 'DIV'
// div.style.border = '1px solid blue'
// div.style.margin = '20px'


// const p = document.createElement('p')
// p.textContent = 'P'
// p.style.margin = '20px'
// p.style.border = '1px solid blue'


// div.append(p)

// section.append(div)

// document.body.append(section)

// const allElements = document.querySelectorAll('*')


// всплытие 

// allElements.forEach(elem => {
//   elem.addEventListener('click', () => {
//     alert(`Всплытие: ${elem.tagName}`)
//   })
// })

// погружение

// allElements.forEach(elem => {
//   elem.addEventListener('click', () => {
//     alert(`Погружение: ${elem.tagName}`)
//   }, true)
// })


// остановка всплытия 

// allElements.forEach(elem => {
//   elem.addEventListener('click', (event) => {
//     event.stopPropagation()
//     alert(`Всплытие: ${elem.tagName}`)
//   })
// })

// остановка по условию

// allElements.forEach(elem => {
//   elem.addEventListener('click', (event) => {

//     if (event.currentTarget.tagName === 'DIV') {
//       event.stopPropagation()
//     }
//     alert(`Всплытие: ${elem.tagName}`)
//   })
// })


// делегирование событий 

//const buttons = document.querySelectorAll('.btn')

// const container = document.querySelector('.container')

// container.addEventListener('click', function(event) {
//     console.log(this)
// })

// buttons.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         console.log(event.target.id)
//     })
// })


// дата и время 



// const date = new Date().getDate()
// console.log('date:', date)

// const month = new Date().getMonth()
// // месяц с нуля
// console.log('month:', month + 1)

// const year = new Date().getFullYear()
// console.log('year:', year)
// const hours = new Date().getHours()

// console.log('hours:', hours)
// const min = new Date().getMinutes()
// console.log('min:', min)

// const time = new Date().getTime()
// console.log('time:', time)

// const day = new Date().getDay()
// // с нуля, первый день воскресенье
// console.log('day:', day)


// const now = new Date().toLocaleDateString()
// console.log(now)










