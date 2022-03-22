
/* accounts.js */

import { compare, genSalt, hash } from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts'

import { db } from './db.js'

const saltRounds = 10
const salt = await genSalt(saltRounds)

/**
 * Checks user credentials.
 * @param {string} username username of the user
 * @param {string} password password of the user
 * @returns {string} the username for the valid account
 */
export async function login(data) {
	console.time('login')
	console.log(data)
	let sql = `SELECT count(username) AS count FROM users WHERE username="${data.username}";`
	let records = await db.query(sql)
	if(!records[0].count) throw new Error(`username "${data.username}" not found`)
	sql = `SELECT password FROM users WHERE username = "${data.username}";`
	records = await db.query(sql)
	const valid = await compare(data.password, records[0].password)
	if(valid === false) throw new Error(`invalid password for account "${data.username}"`)
	console.timeEnd('login')
	return data.username
}

/**
 * Inserting new user in database
 * Adds username and password.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} true
 */
export async function register(data) {
	console.log(data)
	const password = await hash(data.password, salt)
	sql = `INSERT INTO users(username, password) VALUES("${data.username}", "${password}")`
	console.log(sql)
	await db.query(sql)
	return true
}