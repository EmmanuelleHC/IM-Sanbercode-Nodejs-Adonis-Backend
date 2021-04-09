import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LapanganValidator from 'App/Validators/LapanganValidator'

export default class LapangansController {

	public async index({response}:HttpContextContract){
		const data=[
			{id:params.id,nama_booking:"emma",nama_venue:"pluit",tanggal_main :'2021-02-02 12:02:34'}
			]
		return response.status(200).json(data)
			
	}

	public async show({params,response}:HttpContextContract)
	{
		const data=[
			{id:params.id,nama_booking:"emma",nama_venue:"pluit",tanggal_main :'2021-02-02 12:02:34'}
			]
		return response.status(200).json(data)	
	}
	public async store({request}:HttpContextContract)
	{
		
	    const data=await request.validate(LapanganValidator)
	    
	    return 'Post Created'
	}

}
