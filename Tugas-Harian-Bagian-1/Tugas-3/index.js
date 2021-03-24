var funcLib=require('./func/lib.js')
var loopLib=require('./func/libloop.js')

var teriak=funcLib.teriak
var kalikan=funcLib.kalikan
var introduce=funcLib.introduce


var loopno1=loopLib.loopno1
var loopno2=loopLib.loopno2
var persegipanjang=loopLib.persegipanjang
var tangga=loopLib.tangga
var catur=loopLib.catur


 var name="Agus"    
 var age=30 
 var address="jl.pluit" 
 var hobby="Gaming" 

console.log('_________SOAL NO 1 FUNCTIONS_________________')
console.log(teriak())
console.log('__________SOAL NO 2 FUNCTIONS________________')
var hasilKali = kalikan(4, 12)  
console.log(hasilKali)
console.log('_________SOAL NO 3 FUNCTIONS_________________')
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, dan saya punya hobby yaitu Gaming!" 
console.log('________SOAL NO 1 LOOP__________________')

loopno1()

console.log('________SOAL NO 2 FOR__________________')

loopno2()
console.log('______SOAL NO 3 Membuat Persegi Panjang____________________')

persegipanjang(8,4)
console.log('______SOAL NO 4 Membuat Tangga____________________')

tangga(7)

console.log('__________SOAL 5 Membuat Papan Catur________________')

catur(4)