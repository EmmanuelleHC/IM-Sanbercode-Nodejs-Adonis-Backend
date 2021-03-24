var funcLib=require('./func/lib.js')

var teriak=funcLib.teriak
var kalikan=funcLib.kalikan
var introduce=funcLib.introduce


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
var flag = 2
while(flag <=20) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log(flag+' - I love coding' )
  flag+=2
} 
flag=20
while(flag >=2) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log(flag+' - I will become a mobile developer' )
  flag-=2
} 

console.log('________SOAL NO 2 FOR__________________')

for(var x=1;x<=20;x++)
{
    if(x%2==0)
    {
        console.log(x+" - Berkualitas")
    }else if(x%2!=0 && x%3!=0)
    {
        console.log(x+" - Santai")
       

    }else if(x%2!=0 && x%3==0)
    {
        console.log(x+" - I Love Coding ")
    }
}
console.log('______SOAL NO 3 Membuat Persegi Panjang____________________')
function persegipanjang(panjang,lebar)
{
    var temp1=''
    for(var x=1;x<=panjang;x++)
    {
        
           for(var y=1;y<=lebar;y++)
            {
                if(x==panjang)
            {
                console.log(temp1)
            }
            
            }
            
           temp1+='#'
            
         
         
    }
}
persegipanjang(8,4)
console.log('______SOAL NO 4 Membuat Tangga____________________')
function tangga(sisi)
{
    var temp1=''
    for(var x=1;x<=sisi;x++)
    {
        
            temp1+='#'
            console.log(temp1)
            
         
         
    }
}
tangga(7)

console.log('__________SOAL 5 Membuat Papan Catur________________')
function catur(sisi)
{
    var temp1=''
    for(var x=1;x<=sisi;x++)
    {
        if(x%2==0)
        {
            temp1 ='# # # #'
        }else{
            temp1 =' # # # #'
        }
            
            console.log(temp1)
            
         
         
    }
}

catur(4)