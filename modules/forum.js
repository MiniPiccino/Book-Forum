/* forum.js */

import { db } from './db.js'

export function addingForum(name, summary, description, avatar){
    const all = {
        name: name,
        summary: summary,
        description: description,
        avatar: avatar
    }
    return all
}

export async function add_forum(data){
    console.log('add_forum()')
    console.log(data)
    data.fields.username = data.username
    data.files[0].username = data.username
    data.fields.avatar = await saveAvatar(data.files[0])
    const id = await addAvatar(data.fields)
}

async function saveAvatar(file){
    let filename = ''
    if(file.contentType !== 'application/octet-stream'){
        const ext = file.filename.split('.').pop()
        filename = `${file.username}-${Date.now()}.${ext}`
        await Deno.rename(file.filename, `${Deno.cwd()}/public/uploads/${filename}`)
    }
    return filename
    
}

async function addAvatar(data){
    console.log(data)
    let sql = `SELECT username FROM users WHERE username = "${data.username}"`
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
    VALUES ("${data.username}", "${data.nameOfForum}", "${data.summary}", "${data.description}", "${date}", "${data.avatar}")`
    await db.query(sql)
}