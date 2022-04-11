//output.js

import { db } from './db.js'

/**
 * returns name of the forum, avatar, summary, and time added in the database
 * @returns {object} name of the forum, avatar, summary and time added
 */
export async function showForums(){
    let sql = `SELECT nameOfForum, avatar, summary, added, IDForum FROM newForum;`
    let result = await db.query(sql)
    for(let i in result){
        let date = new Date(result[i].added)
        date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        result[i].added = date
        i = i+1
    }
    console.log('Show forums')
    console.log(result)
    return result
}

/**
 * returns name of the forum, avatar, summary, time added in the database, username, id of the forum and description
 * @returns {object} name of the forum, avatar, summary,time added, username, id of the forum and description
 */
export async function detailForum(id){
    let sql = `SELECT nameOfForum, avatar, summary, added, IDForum, username, description
    FROM newForum WHERE newForum.IDForum = ${id};`
    let result = await db.query(sql)
    for(let i in result){
        let date = new Date(result[i].added)
        date = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        result[i].added = date
        i = i+1
    }
    console.log('detail forums')
    console.log(result)
    return result
}

/**
 * returns comment, username and time the comment was added 
 * @returns {object} comment, username and time the comment was added
 */

export async function showingComments(id){
    let sql = `SELECT comment, username, added FROM newComment WHERE IDForum = ${id};`
    let result = await db.query(sql)
    console.log("Showing Comment")
    for(let i in result){
        let date = new Date(result[i].added)
        date = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        result[i].added = date
        i = i+1
    }
    return result

}
