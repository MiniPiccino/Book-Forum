
//test for login function

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { login } from '../modules/accounts.js'

Deno.test({name: 'checking if the username and password are there', async fn() {
    //arrange
    const cred = {
      username: "user1",
      password: "p455w0rd"
    }
    //act
    try {
       const usrr = await login(cred)
        //assert
        assertEquals(usrr.username, 'user1', "username not found")
        assertEquals(usrr.password, 'p455w0rd', "password not found")
    } catch (err) {
        assertEquals(err.message, "function not there")
        }
    },

    sanitizeResources: false,
    sanitizeOps: false
})

