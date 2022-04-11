import { db } from './db.js'

/**
 * 
 * Inserting new comment in database
 * @param {integer} id The id of forum topic where the comment goes
 * @param {string} username Username of the user inserted comment
 * @param {string} commen The comment about new topic
 * @returns {boolean} true
 */

export async function insertNewComment(id, username, comment){
    const now = new Date().toISOString()
    let date = now.slice(0,19).replace('T', ' ')
    let sql = `INSERT INTO newComment(IDForum, username, comment, added)
    VALUES ("${id}", "${username}", "${comment}", "${date}")`
    let result = await db.query(sql)
    console.log(result)
    return true
}