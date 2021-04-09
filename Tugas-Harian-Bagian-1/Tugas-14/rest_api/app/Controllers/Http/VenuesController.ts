import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VenueValidator from 'App/Validators/VenueValidator'
export default class VenuesController {
	public async index({response}:HttpContextContract){
		const data=[
			{id:params.id,nama:"emma",alamat:"pluit",phone:'0857298293823'}
			]
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data=[
			{id:params.id,nama:"emma",alamat:"pluit",phone:'0857298293823'}
			]
		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		
	    const data=await request.validate(VenueValidator)
	    
	    return 'Post Created'
	}
	
}
