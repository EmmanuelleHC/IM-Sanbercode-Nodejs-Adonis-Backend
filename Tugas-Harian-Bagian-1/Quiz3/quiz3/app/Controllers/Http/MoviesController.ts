import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
	public async index({response}:HttpContextContract){
		const data=await Database.query().select('*').from('movies')
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data = await Database.from('movies').where('id',params.id)

		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		
	    const insertData = await Database.table('movies')
	    					.insert({title:request.title,resume:request.resume,release_date:request.release_date,genre_id:request.genre_id}])
	    return 'Movie Created'
	}

	public async update({params,request,response}:HttpContextContract)
	{
		const Info = request.only(['title', 'resume', 'release_date','genre_id'])
		const data = await Database.from('movies').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database.from('movies')
							  .where('id',params.id)
							  .update({ title:Info.title, resume: Info.resume,release_date:Info.release_date,
							  genre_id:Info.genre_id} )
		return 'movies Updated'
	}

	public async destroy ({params, response}) {
		const data = await Database.from('movies').where('id',params.id)
		if (!data) {
		return response.status(404).json({data: 'Resource not found'})
		}

		const affectedRows = await Database
						  .from('movies')
						  .where('id',params.id)
						  .delete()
		return response.status(204).json(null)
	}
}
module.exports = MoviesController
