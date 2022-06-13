
let moshinBozor = [
   {
      name: 'Malibu',
      price: 24000
   },
   {
      name: 'Matiz',
      price: 3500
   },
   {
      name: 'Tahoe',
      price: 80000
   },
   {
      name: 'Nexia',
      price: 10000
   },
   {
      name: 'Gentra',
      price: 15000
   },
   {
      name: 'Tracker',
      price: 25000
   }
]

let car = prompt('Что вы хотите удалить?')
let ind = moshinBozor.indexOf(car)
let filtered = moshinBozor.filter(item => ({
   if(car = item.name) {
      moshinBozor.indexof(item)
      moshinBozor.splice(ind, 1)
   }
}
)
)

console.log(filtered);
console.log(ind);

// let car = prompt('Что вы хотите удалить?')

// let idx = moshinBozor.indexOf(car)

// if(idx !== -1) {
//    moshinBozor.splice(idx, 1)
// } else {
//    alert('error')
// }
// console.log(idx);
