var funcLib=require('./objectLib/lib.js')

var arrayToObject=funcLib.arrayToObject
var shoppingTime=funcLib.shoppingTime
var naikAngkot=funcLib.naikAngkot
var nilaiTertinggi=funcLib.nilaiTertinggi

console.log('_________SOAL NO 1 _________________')
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
console.log(arrayToObject(people))



var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
console.log(arrayToObject(people2))

console.log(arrayToObject([]))


console.log('_________SOAL NO 2 _________________')

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



console.log('_________SOAL NO 3 _________________')


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]

console.log('_________SOAL NO 4 _________________')

console.log(nilaiTertinggi([
  {
    name: 'Asep',
    score: 90,
    class: 'adonis'
  },
  {
    name: 'Ahmad',
    score: 85,
    class: 'vuejs'
  },
  {
    name: 'Regi',
    score: 74,
    class: 'adonis'
  },
  {
    name: 'Afrida',
    score: 78,
    class: 'reactjs'
  }
]));

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }


console.log(nilaiTertinggi([
  {
    name: 'Bondra',
    score: 100,
    class: 'adonis'
  },
  {
    name: 'Putri',
    score: 76,
    class: 'laravel'
  },
  {
    name: 'Iqbal',
    score: 92,
    class: 'adonis'
  },
  {
    name: 'Tyar',
    score: 71,
    class: 'laravel'
  },
  {
    name: 'Hilmy',
    score: 80,
    class: 'vuejs'
  }
]));

// {
//   adonis: { name: 'Bondra', score: 100 },
//   laravel: { name: 'Putri', score: 76 },
//   vuejs: { name: 'Hilmy', score: 80 }
// }

