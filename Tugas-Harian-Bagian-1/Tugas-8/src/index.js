import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Sekolah from './lib/Sekolah'
import Karyawan from './lib/Karyawan'

import Siswa from './lib/Siswa'

import fspromises from 'fs/promises'

const path='data.json'
let [command,arg]=process.argv.slice(2)
//let karyawans=[]
// const setup =()=>{
// 	fs.readFile(path,(err,data)=>{
// 	if(err) console.log(err)
// 	karyawans= JSON.parse(data)
// 	let sekolah2=new Sekolah(karyawans)
// 	return sekolah2
// })

// }

switch (command){
	case "register":
		let [name,password,role]=arg.split(',')
		let newkaryawan= new Karyawan(name,password,role)
		let karyawans

		fspromises.readFile("./data.json")
		.then(data => {
		   karyawans=JSON.parse(data)
		   let newSchool= new Sekolah(karyawans)
		   newSchool.register(newkaryawan)
		})
		.catch(function(error) {
		   console.log(error);
		})
		// fspromises.readFile(path)
		// .then(data => {
		// 	console.log(data)
		// 	// karyawans=JSON.parse(data)
		// 	// let newSchool= new Sekolah(karyawans)
		// 	// newSchool.register(newkaryawan)
		// })
		// .catch(err=>console.log(err))

		// fs.readFile(path,(err,data)=>{
		// 	if(err) console.log(err)
		// 	console.log(data)
		// 	karyawans=JSON.parse(data);
		// 	let newSchool= new Sekolah(karyawans);
		// 	newSchool.register(newkaryawan);
		// })
		
		break;
	
	case "login":
		let [nama,katasandi]=arg.split(',')

		fspromises.readFile("./data.json")
		.then(data => {
		   karyawans=JSON.parse(data)
		   let newSchool= new Sekolah(karyawans)
		   newSchool.login(nama,katasandi)
		})
		.catch(function(error) {
		   console.log(error);
		})
		break;
	case "addSiswa":
		let [nama_siswa,trainer_name]=arg.split(',')

		fspromises.readFile("./data.json")
		.then(data => {
		   karyawans=JSON.parse(data)
		   let newSchool= new Sekolah(karyawans)
		   newSchool.addSiswa(nama_siswa,trainer_name)
		})
		.catch(function(error) {
		   console.log(error);
		})
		break;
	
	default:
		break;
}