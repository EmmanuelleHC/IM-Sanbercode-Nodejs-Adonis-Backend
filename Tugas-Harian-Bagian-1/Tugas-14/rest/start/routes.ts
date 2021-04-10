/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/healthz', async ({ response }) => {
  const isLive = await HealthCheck.isLive()

  return isLive
    ? response.status(200).send({})
    : response.status(400).send({})
})
Route.resource('venues.lapangan','LapangansController').only(['index', 'store', 'show', 'update'])
Route.resource('venues','VenuesController').only(['index', 'store', 'show', 'update'])

Route.delete('venues.lapangan/:id','LapangansController.delete')
Route.delete('venues/:id','VenuesController.delete')
Route.group(()=>{
	
Route.get('/', async () => {
  return { hello: 'world' }
}).as('home')

Route.get('/about',async()=>{
	return {
	    title:'aasas',
	    body:'body'
	}
}).as('about')


Route.get('/text-context-http/:id',async(ctx)=>{
	console.log(ctx.inspect())
	return 'OK'
}).as('testHttpContext')
}).prefix('/api/v1').as('apiv1')
