

const sapa= (nama) => {
   const pesan =`halo selamat pagi,${nama}`
   return pesan

}


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

const kelas= (...param) => {
    return param.filter(el => el.text !== undefined)
}
export {
  sapa as sapa,
  convert as convert,
  checkScore as checkScore,
  kelas as kelas
};