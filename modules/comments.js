import { db } from './db.js'

export async function insertNewComment(id, username, comment){
    const now = new Date().toISOString()
    let date = now.slice(0,19).replace('T', ' ')
    let sql = `INSERT INTO newComment(IDForum, username, comment, added)
    VALUES ("${id}", "${username}", "${comment}", "${date}")`
    let result = await db.query(sql)
    console.log(result)
    return true
}