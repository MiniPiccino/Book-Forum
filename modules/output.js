//output.js

import { db } from './db.js'

/**
 * returns name of the forum, avatar, summary, and time added in the database
 * @returns {object} name of the forum, avatar, summary and time added
 */
export async function showForums(){
    let sql = `SELECT nameOfForum, avatar, summary, added FROM newForum;`
    let result = await db.query(sql)
    for(let i in result){
        let date = new Date(result[i].added)
        date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        result[i].added = date
        i = i+1
    }
    return result
}
