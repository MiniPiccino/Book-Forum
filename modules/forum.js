/* forum.js */

import { db } from './db.js'

export async function saveAvatar(username, filepath){
    let filename = ''
    if(filepath.contentType !== 'application/octet-stream'){
        const ext = filepath.split('.').pop()
        filename = `${username}-${Date.now()}.${ext}`
        await Deno.rename(filepath, `${Deno.cwd()}/public/uploads/${filename}`)
    }
    return filename
}

export async function addAvatar(username, nameOfForum, summary, description, image ){
    console.log(username)
    let sql = `SELECT username FROM users WHERE username = "${username}"`
    let result = await db.query(sql)
    console.log(result)
    console.log(typeof result)
    const now = new Date().toISOString()
    //console.log(`ISO Date String: ${now}`)
    const date = now.slice(0,19).replace('T', ' ')
    console.log(date)
    //let stat = `SELECT status_id FROM status WHERE status_id = 0`
    //let desc = await db.query(stat)
    //let descValue = Object.values(desc[0])
    //console.log(descValue)
    //console.log(desc)
    sql = `INSERT INTO newForum(username, nameOfForum, summary, description, added, avatar)
    VALUES ("${username}", "${nameOfForum}", "${summary}", "${description}", "${date}", "${image}")`
    await db.query(sql)
}