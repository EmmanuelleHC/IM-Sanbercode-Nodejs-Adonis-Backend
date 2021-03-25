var funcLib=require('./array/lib.js')

var range=funcLib.range
var rangeWithStep=funcLib.rangeWithStep
var sum =funcLib.sum
var dataHandling=funcLib.dataHandling
var balikKata=funcLib.balikKata

console.log('_________SOAL NO 1 _________________')

console.log(range(1,10))

console.log('_________SOAL NO 2 _________________')

console.log(rangeWithStep(1,10,2))

console.log('_________SOAL NO 3 _________________')

console.log(sum(1,10,1))

console.log('_________SOAL NO 4 _________________')
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 
dataHandling(input)





console.log('_________SOAL NO 5_________________')

var kata='I,am,Sanbers'
console.log(balikKata(kata))
