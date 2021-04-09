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
Route.resource('lapangan','LapangansController').only(['index','show','store'])

Route.resource('venues','VenuesController').only(['index','show','store'])
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
