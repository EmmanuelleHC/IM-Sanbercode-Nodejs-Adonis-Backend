/*
1. Soal Functions
No. 1
Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai "Halo Sanbers!" yang kemudian dapat ditampilkan di console.

/*
    Contoh Perintah & output
    $ node functions teriak
*/

function teriak()
{
	return "Halo Sanbers!"	
}
//console.log(teriak())	 // "Halo Sanbers!" 

/*
No. 2
Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim melalui process.argv

/*
    Contoh Perintah & Output
    $ node functions kalikan 4 12
    48 // Output nya 4 x 12 = 48
*/

function kalikan (num1,num2)
{
	return num1*num2	
}
// var hasilKali = kalikan(num1, num2)	
// console.log(hasilKali)	 // 48

/*
No. 3
Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

/* 
    Contoh Perintah & Output 
    $ node function kenalan Agus 30 Gaming
*/
 

function introduce(name,age,address,hobby)
{
	return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"		
}
// var perkenalan = introduce(name, age, address, hobby)
// console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, dan saya punya hobby yaitu Gaming!" 


module.exports={
    teriak:teriak,
    kalikan:kalikan,
    introduce:introduce
}