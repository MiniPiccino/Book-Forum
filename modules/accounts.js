/* accounts.js */

import { compare, genSalt, hash } from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts'

import { db } from './db.js'

const saltRounds = 10
const salt = await genSalt(saltRounds)

/**
 * Checks user credentials.
 * @param {object} data The information about user
 * @param {string} data.username Username of the user
 * @param {string} data.password Password of the user
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
 * @param {object} data The information about the user for registering
 * @param {string} data.username Username for new user
 * @param {string} data.password The users new password
 * @returns {boolean} true
 */
export async function register(data) {
	console.log(data)
	if(Boolean(data.username) == false) throw new Error("username not found")
	if(Boolean(data.password) == false) throw new Error("password not found")
	const password = await hash(data.password, salt)
	let sql = `INSERT INTO users(username, password) VALUES("${data.username}", "${password}")`
	console.log(sql)
	await db.query(sql)
	return true
}