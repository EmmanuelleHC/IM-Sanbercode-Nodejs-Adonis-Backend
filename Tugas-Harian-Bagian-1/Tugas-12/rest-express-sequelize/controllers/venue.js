const Venue=require('../models/venues');

class VenuesController {
	static async save(req,res,next){
		
		let {name,address,phone}=req.body
		
		const newVenue=await Venue.create({name,address,phone})
		res.status(201).json({message:'Berhasil Menyimpan Venue Baru'})
	}


	static async findAll(req,res,next){
		let venues=await Venue.findAll({
			attributes:['id','name','address','phone']
		});
		res.status(200).json({message:'success',venues})
	}


	static async show(req,res,next){
		let{id}=req.params
		let venue=await Venue.findOne({
			where:{
				id:id
			}
		})
		res.status(200).json({message:'success',venue})

	}

	static async delete(req,res,next){
		let{id}=req.params
		let venue=await Venue.findOne({
			where:{
				id:id
			}
		})
		await venue.destroy();
		res.status(200).json({message:'success delete'})

	}

	static async update(req,res,next){
		let{id}=req.params
		let venue=await Venue.findOne({
			where:{
				id:id
			}
		})
		let {name,address,phone}=req.body
		venue.name = "Jane II";
		venue.address = "blue";
		venue.phone="182918212819"
		await venue.save();
		await venue.reload();

		res.status(200).json({message:'success update'})

	}

}

module.exports=VenuesController