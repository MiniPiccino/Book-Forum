
//test for register function

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { register } from '../modules/accounts.js'

Deno.test({name: 'checking if the username and password are there', async fn() {
    //arrange
    const cred = {
      username: "user100",
      password: "p455w0rd"
    }
    //act
    const usrr = await register(cred)
    //assert
    assertEquals(usrr, true, "function not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   

})

Deno.test({name: 'checking if the username works', async fn() {
    //arrange
    const cred = {
      username: "",
      password: "p455w0rd"
    }
    //act
    try {
       const usrr = await register(cred)
        //assert
        assertEquals(usrr, true, 'username not found')
    } catch (err) {
        assertEquals(err.message, "username not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the password works', async fn() {
    //arrange
    const cred = {
      username: "user9",
      password: ""
    }
    //act
    try {
       const usrr = await register(cred)
        //assert
        assertEquals(usrr, true, 'password not found')
    } catch (err) {
        assertEquals(err.message, "password not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
