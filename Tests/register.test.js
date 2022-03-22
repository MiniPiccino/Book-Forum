
//test for register function

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { register } from '../modules/accounts.js'

Deno.test({name: 'checking if the username and password are there', async fn() {
    //arrange
    const cred = {
      username: "user6",
      password: "p455w0rd"
    }
    //act
    try {
       const usrr = await register(cred)
        //assert
        assertEquals(usrr, true, "username not found")
    } catch (err) {
        assertEquals(err.message, "function not there")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})

Deno.test({name: 'checking if the username and password are there', async fn() {
    //arrange
    const cred = {
      username: "user6",
      password: "p455w0rd"
    }
    //act
    try {
       const usrr = await register(cred)
        //assert
        assertEquals(cred.password, 'p455w0rd')
    } catch (err) {
        assertEquals(err.message, "password is not there")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
