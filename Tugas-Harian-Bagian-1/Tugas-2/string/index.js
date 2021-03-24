/*
A. Tugas String
Soal No. 1 (Membuat kalimat),
Terdapat kumpulan variable dengan data string sebagai berikut
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
Buatlah agar kata-kata di atas menjadi satu kalimat . Output:
JavaScript is awesome and I love it! 
*/
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
var space =' ';

console.log(word.concat(space.concat(second.concat(space.concat(third.concat(space.concat(fourth.concat(space.concat(fifth.concat(space.concat(sixth.concat(space.concat(seventh))))))))))))); // goodluck

/*
Soal No.2 Mengurai kalimat (Akses karakter dalam string),
Terdapat satu kalimat seperti berikut:
var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord; // lakukan sendiri 
var fourthWord; // lakukan sendiri 
var fifthWord; // lakukan sendiri 
var sixthWord; // lakukan sendiri 
var seventhWord; // lakukan sendiri 
var eighthWord; // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
Buat menjadi Output berikut:
First word: I 
Second word: am 
Third word: going 
Fourth word: to 
Fifth word: be 
Sixth word: React 
Seventh word: Native 
Eighth word: Developer

*/
var sentence = "I am going to be React Native Developer"; 
sentence=sentence.split(" ");
var firstWord = sentence[0] ; 
var secondWord = sentence[1]  ; 
var thirdWord = sentence[2]; // lakukan sendiri 
var fourthWord = sentence[3]; // lakukan sendiri 
var fifthWord = sentence[4]; // lakukan sendiri 
var sixthWord = sentence[5]; // lakukan sendiri 
var seventhWord = sentence[6]; // lakukan sendiri 
var eighthWord = sentence[7]; // lakukan sendiri 

console.log('First Word: ' + firstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);
/*
Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2; // do your own! 
var thirdWord2; // do your own! 
var fourthWord2; // do your own! 
var fifthWord2; // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);
Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:
First Word: wow 
Second Word: JavaScript 
Third Word: is 
Fourth Word: so 
Fifth Word: cool

*/
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2= sentence2.substring(4, 14); 
var thirdWord2= sentence2.substring(15, 17); // do your own! 
var fourthWord2= sentence2.substring(17, 20); // do your own! 
var fifthWord2= sentence2.substring(21, 25); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

/* 
Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3; // do your own! 
var thirdWord3; // do your own! 
var fourthWord3; // do your own! 
var fifthWord3; // do your own! 

var firstWordLength = exampleFirstWord3.length  
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3); 
console.log('Third Word: ' + thirdWord3); 
console.log('Fourth Word: ' + fourthWord3); 
console.log('Fifth Word: ' + fifthWord3); 
Output:
First Word: wow, with length: 3 
Second Word: JavaScript, with length: 10 
Third Word: is, with length: 2 
Fourth Word: so, with length: 2 
Fifth Word: cool, with length: 4


*/

var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2= sentence2.substring(4, 14); 
var thirdWord2= sentence2.substring(15, 17); // do your own! 
var fourthWord2= sentence2.substring(17, 20); // do your own! 
var fifthWord2= sentence2.substring(21, 25); // do your own! 

console.log('First Word: ' + exampleFirstWord2+', with length :'+ exampleFirstWord2.length); 
console.log('Second Word: ' + secondWord2+', with length :'+ secondWord2.length); 
console.log('Third Word: ' + thirdWord2+', with length :'+ thirdWord2.length); 
console.log('Fourth Word: ' + fourthWord2+', with length :'+ fourthWord2.length); 
console.log('Fifth Word: ' + fifthWord2+', with length :'+ fifthWord2.length);
