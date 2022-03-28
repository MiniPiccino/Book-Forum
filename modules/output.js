//output.js

import { db } from './db.js'

export async function showForums(){
    let sql = `SELECT nameOfForum, avatar, summary, added FROM newForum;`
    let result = await db.query(sql)
    console.log("IT WORKS")
    return result
}
