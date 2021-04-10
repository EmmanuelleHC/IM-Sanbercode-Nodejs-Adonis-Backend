import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VenueValidator from 'App/Validators/VenueValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class VenuesController {
	public async index({response}:HttpContextContract){
		const data=await Database.query().select('*').from('venues')
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data = await Database.from('venues').where('id',params.id)

		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		
	    const data=await request.validate(VenueValidator)

	    const insertData = await Database.table('venues').insert({name:data.name,address:data.address,phone:data.phone}])
	    return 'Venues Created'
	}

	public async update({params,request,response}:HttpContextContract)
	{
		const Info = request.only(['name', 'address', 'phone'])
		const data = await Database.from('venues').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database.from('venues')
							  .where('id',params.id)
							  .update({ name:Info.name, address: Info.address,phone:Info.phone )
		return 'Venues Updated'
	}

	public async delete ({params, response}) {
		const data = await Database.from('venues').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database
						  .from('venues')
						  .where('id',params.id)
						  .delete()
		return response.status(204).json(null)
	}
	
}
module.exports = VenuesController
