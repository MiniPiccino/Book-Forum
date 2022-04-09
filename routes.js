
/* routes.js */

import { Router } from 'https://deno.land/x/oak@v6.5.1/mod.ts'
import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts'
// import { upload } from 'https://cdn.deno.land/oak_upload_middleware/versions/v2/raw/mod.ts'
// import { parse } from 'https://deno.land/std/flags/mod.ts'

import { login, register } from './modules/accounts.js'
import { saveAvatar, addAvatar } from './modules/forum.js'
import { showForums, detailForum } from './modules/output.js'

const handle = new Handlebars({ defaultLayout: '' })

const router = new Router()

// the routes defined here
router.get('/', async context => {
	if (context.cookies.get("cookieOpt") === undefined) {
		context.response.redirect("/cookiePolicy")
	}
	else if (context.cookies.get("cookieOpt") === ":accept"){
	const authorised = context.cookies.get('authorised')
	const forums = await showForums()
	const data = { authorised, forums }
	//console.log(forums)
	const body = await handle.renderView('home', data)
	context.response.body = body
	}
})
router.get('/cookiePolicy', async context => {
	const body = await handle.renderView('/cookiePolicy')
	context.response.body = body
})
router.get('/furtherCookiePolicy', async context => {
	const body = await handle.renderView('/furtherCookiePolicy')
	context.response.body = body
})
router.get('/cookies:option', async context => {
	const option = context.params.option
	console.log(option)
	context.cookies.set('cookieOpt', option)
	context.response.redirect("/")
})


router.get('/login', async context => {
    if (context.cookies.get("cookieOpt") === undefined) {
		context.response.redirect("/cookiePolicy")
	}
	else if (context.cookies.get("cookieOpt") === ":accept"){
	const body = await handle.renderView('login')
	context.response.body = body
	}
	
})

router.get('/register', async context => {
    if (context.cookies.get("cookieOpt") === undefined) {
		context.response.redirect("/cookiePolicy")
	}
	else if (context.cookies.get("cookieOpt") === ":accept"){
	const body = await handle.renderView('register')
	context.response.body = body
	}
})

router.post('/register', async context => {
	console.log('POST /register')
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj)
	await register(obj)
	context.response.redirect('/login')
})

router.get('/logout', context => {
  // context.cookies.set('authorised', null) // this does the same
  context.cookies.delete('authorised')
  context.response.redirect('/')
})

router.post('/login', async context => {
	console.log('POST /login')
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj)
	try {
		const username = await login(obj)
		context.cookies.set('authorised', username)
		context.response.redirect('/')
	} catch(err) {
		console.log(err)
		context.response.redirect('/login')
	}
})

router.get('/newForum', async context => {
	if (context.cookies.get("cookieOpt") === undefined) {
		context.response.redirect("/cookiePolicy")
	}
	else if (context.cookies.get("cookieOpt") === ":accept"){
	const authorised = context.cookies.get('authorised')
    //const role = await roles(authorised)
	const data = { authorised }
	if (authorised === undefined) context.response.redirect('/login')
	const body = await handle.renderView('/newForum', data)
	context.response.body = body
	}
	

})
router.post('/newForum', async context => {
    console.log('POST /newForum')
    const body = await context.request.body({ type: 'form-data' })
    const data = await body.value.read()
	//console.log(data)
    data.username = context.cookies.get('authorised')
	if(Boolean(data.username) == false) throw new Error('username is not found')
	const filepath = data.files[0].filename
	if(Boolean(filepath == false)) throw new Error('filepath is not found')
	const nameOfForum = data.fields.nameOfForum
	if(Boolean(nameOfForum == false)) throw new Error('nameOfForum is not found')
	const summary = data.fields.summary
	if(Boolean(summary == false)) throw new Error('summary is not found')
	const description = data.fields.description
	if(Boolean(description == false)) throw new Error('description is not found')
    const image = await saveAvatar(data.username, filepath)
	if(Boolean(image == false)) throw new Error('image is not found')
	await addAvatar(data.username, nameOfForum, summary, description, image)
    context.response.redirect('/')
})
router.get('/details/:id', async context => {
    console.log('GET /details')
    const authorised = context.cookies.get('authorised')
    const id = context.params.id
	const infoForum = await detailForum(id)
	const data = { authorised, id, infoForum }
	if (authorised === undefined) context.response.redirect('/login')
    const body = await handle.renderView('/details', data)
    context.response.body = body
})
export default router
