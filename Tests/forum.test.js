//tests for adding new forum

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { saveAvatar, addAvatar } from '../modules/forum.js'

Deno.test({name: 'checking if the username is passed        ', async fn() {
    //arrange
    const cred = {
      username: "user6",
      filepath: "/home/codio/workspace/tmp/8b1289b5/a3004d517e017b0def15720c5389469ef38081cb.jpeg"
    }
    //act
    try {
       const usrr = await saveAvatar(cred)
        //assert
        assertEquals(cred.password, "/home/codio/workspace/tmp/8b1289b5/a3004d517e017b0def15720c5389469ef38081cb.jpeg", "filepath not found")
    } catch (err) {
        assertEquals(err.message, "password is not there")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})