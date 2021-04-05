const fs=require('fs')
class KaryawanController{
	
	static findAll(req,res){
		fs.readFile('data.json',(err,data)=>{
			if(err){
				res.status(400).json({"message": "Gagal get karyawan"})
			}else{
				let realData=JSON.parse(data)
				res.status(200).json({message:"Berhasil get karyawan",data:realData.users})
			}
		})
	}
	static async  register(req,res){
				let data_read=await fs.promises.readFile('data.json')
				let realData=JSON.parse(data_read)

				let{users} = realData

				const findEmployee = realData.users
				

				let{name,role,password}=req.body
				let newUser={name,role,password}
				let ketemu=findEmployee.find(test=>test.name===name)
				if(ketemu.password==password)
				{
					let findIndex=findEmployee.findIndex(test=>test.name===ketemu.name)
			
					let employeeLogin={name:ketemu.name,password:ketemu.password,role:ketemu.role,isLogin:true}
					findEmployee.splice(findIndex,1,employeeLogin)
					
					
					await fs.promises.writeFile('data.json',JSON.stringify(realData))
					res.status(200).json({message:"Berhasil login"})
				}else{
					res.status(400).json({message:"Gagal login"})
					throw new Error("Gagal Login")
				}
				
				

			
			
	}
	static async addSiswa(req,res){
				let data_read=await fs.promises.readFile('data.json')
				let realData=JSON.parse(data_read)

				let{trainer_name,name,kelas}=req.body
				let{users} = realData

				const findEmployee = realData.users
				let siswa=[]
				let ketemu=findEmployee.find(test=>test.name===trainer_name)
				if(ketemu.isLogin===true)
				{
					let employeeLogin={name:ketemu.name,password:ketemu.password,role:ketemu.role,isLogin:ketemu.isLogin}
					let siswaBaru={
									name,
									kelas
									}
					siswa.push(siswaBaru)
					employeeLogin.siswa=siswa
					let findIndex=findEmployee.findIndex(test=>test.name===ketemu.name)

				
					findEmployee.splice(findIndex,1,employeeLogin)
					
					console.log(employeeLogin)
					//await fs.promises.writeFile('data.json',JSON.stringify(realData))
					res.status(200).json({message:"Berhasil add Siswa"})
				}else{
					res.status(400).json({message:"Gagal add siswa"})
					throw new Error("Gagal add siswa")
				}
	}

}
// let findEmployee=this.employees.find(employee=>employee.name===trainer_name)
// 			if(findEmployee.isLogin===true)
// 			{
// 				let employeeLogin=new Karyawan(findEmployee.name,findEmployee.password,findEmployee.role,findEmployee.isLogin)
// 				let siswaBaru=new Siswa(name)
// 				this.siswa.push(siswaBaru)
// 				employeeLogin.siswa=this.siswa
// 				let findIndex=this.employees.findIndex(emp=>emp.name===employeeLogin.name)
				
// 				this.employees.splice(findIndex,1,employeeLogin)
// 				await fspromises.writeFile(this.path,JSON.stringify(this.employees))
// 				console.log("Berhasil add Siswa")
// 			}else{
				
// 				console.log("Gagal add Siswa")
// 				throw new Error("Gagal add Siswa")
// 			}
module.exports=KaryawanController