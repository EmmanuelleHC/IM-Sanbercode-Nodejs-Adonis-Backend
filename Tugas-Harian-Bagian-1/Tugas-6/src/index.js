// import {sapa,convert,checkScore,kelas} from 'lib.js'

// const [command,arg]=process.argv.slice(2)

// switch(command){
// 	case "sapa":
// 		console.log(sapa(arg))
// 		break;
// 	case "convert":
// 		console.log(convert("Bondra Medan 25"))
// 		break;
// 	case "checkScore":
// 		console.log(checkScore("name:Ahmad,class:Adonis,score:89"))
// 		break;
// 	case "kelas":
// 		console.log(kelas(data))
// 		break;
// 	default:
// 	    break;
// }




const sapa= (nama) => {
   const pesan =`halo selamat pagi,${nama}`
   return pesan

}
console.log(sapa("emma"))

const convert= (param) => {
   
//let detail = ["Bondra","Medan",25]
const detail = param.split(' ');
const [nama, domisili, umur] = detail
return {
            nama: nama,
            domisili: domisili,
            umur: umur
        }

}


console.log(convert("Bondra Medan 25"))
const checkScore= (param) => {


const sliced = param.split(',')

//const [name, class, score] = detail
const sliced2=sliced[0].split(':')
const sliced3=sliced[1].split(':')

const sliced4=sliced[2].split(':')
return {
            name :sliced2[1],
            class:sliced3[1],
            score:sliced4[1]

         }
}



console.log(checkScore("name:Ahmad,class:Adonis,score:89"))
const kelas= (param) => {

const data = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "Laravel" }
]

var result = data.filter(test => test.class===param);

    return result
}

console.log(kelas("adonis"))








