import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LapanganValidator from 'App/Validators/LapanganValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LapangansController {
	public async index({response}:HttpContextContract){
		const data=await Database.query().select('*').from('fields')
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data = await Database.from('fields').where('id',params.id)

		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		
	    const data=await request.validate(LapanganValidator)

	    const insertData = await Database.table('fields').insert({name:data.name,type:data.type,venue_id:data.venue_id}])
	    return 'Fields Created'
	}

	public async update({params,request,response}:HttpContextContract)
	{
		const Info = request.only(['name', 'type', 'venue_id'])
		const data = await Database.from('fields').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database.from('fields')
							  .where('id',params.id)
							  .update({ name:Info.name, type: Info.type,venue_id:Info.venue_id )
		return 'Fields Updated'
	}

	public async delete ({params, response}) {
		const data = await Database.from('fields').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database
						  .from('fields')
						  .where('id',params.id)
						  .delete()
		return response.status(204).json(null)
	}
}
module.exports = LapanganController
