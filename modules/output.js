//output.js

import { db } from './db.js'

export async function showForums(){
    let sql = `SELECT nameOfForum, avatar, summary, added FROM newForum;`
    let result = await db.query(sql)
    for(let i in result){
        let date = new Date(result[i].added)
        date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        result[i].added = date
        i = i+1
    }
    //for(let i in result){
    //        console.log(i)
    //        break
    //    }
    console.log(result[0])
    return result
}
