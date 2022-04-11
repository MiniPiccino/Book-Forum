
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { insertNewComment } from '../modules/comments.js'


Deno.test({name: 'checking if the function insertNewComment works', async fn() {
    //arrange
      const comment = "The very good book about friendship"
      const username = "user2"
      const added = "10-4-2022"
      let id = 1
    //act
    const user = await insertNewComment(id, username, comment)
    //assert
    assertEquals(user, true, "function not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   

})

Deno.test({name: 'checking if the variable comment is there         ', async fn() {
    //arrange
      const comment = "The very good book about friendship"
      const username = "user2"
      const added = "10-4-2022"
      let id = 1
    //act
    try{
    const user = await insertNewComment(id, username, comment)
    //assert
    assertEquals(user, true, "comment not found")
    }catch (err){
        assertEquals(err.message, 'comment is not found')
    }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the variable username is there         ', async fn() {
    //arrange
      const comment = "The very good book about friendship"
      const username = "user2"
      const added = "10-4-2022"
      let id = 1
    //act
    try{
    const user = await insertNewComment(id, username, comment)
    //assert
    assertEquals(user, true, "username not found")
    }catch (err){
        assertEquals(err.message, 'username is not found')
    }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the variable id is there         ', async fn() {
    //arrange
      const comment = "The very good book about friendship"
      const username = "user2"
      const added = "10-4-2022"
      let id = 1
    //act
    try{
    const user = await insertNewComment(id, username, comment)
    //assert
    assertEquals(user, true, "id not found")
    }catch (err){
        assertEquals(err.message, 'id is not found')
    }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})