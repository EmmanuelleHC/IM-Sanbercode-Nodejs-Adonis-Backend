import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
	public async index({response}:HttpContextContract){
		const data=await Database.query().select('*').from('genres')
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data = await Database.from('genres').where('id',params.id)

		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		

	    const insertData = await Database.table('genres').insert({name:request.name}])
	    return 'Genre Created'

	
	}

	public async update({params,request,response}:HttpContextContract)
	{
		const Info = request.only(['name'])
		const data = await Database.from('genres').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database.from('genres')
							  .where('id',params.id)
							  .update({name:Info.name} )
		return 'Genre Updated'
	}

	public async destroy ({params, response}) {
		const data = await Database.from('genres').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database
						  .from('genres')
						  .where('id',params.id)
						  .delete()
		return response.status(204).json(null)
	}
}
module.exports = GenresController
