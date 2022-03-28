
//test for login function

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { login } from '../modules/accounts.js'

Deno.test({name: 'checking if the username is there     ', async fn() {
    //arrange
    const cred = {
      username: "user1",
      password: "p455w0rd"
    }
    //act
    try {
       const usrr = await login(cred)
        //assert
        assertEquals(usrr, cred.username, "username not found")
    } catch (err) {
        assertEquals(err.message, "function not there")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false
})
Deno.test({name: 'checking if the username is wrong     ', async fn() {
    //arrange
    const cred = {
      username: 'WrongUsername',
      password: 'p455w0rd'
    }
    //act
    try {
       const usrr = await login(cred)
       //assertEquals(usrr, cred.username, 'username "${data.username}" not found')
        //assert
    } catch (err) {
        assertEquals(err.message, 'username "WrongUsername" not found')
        }
    },
    sanitizeResources: false,
    sanitizeOps: false
})

Deno.test({name: 'checking if the password is wrong     ', async fn() {
    //arrange
    const cred = {
      username: 'user1',
      password: 'WrongPassword'
    }
    //act
    try {
       const usrr = await login(cred)
       //assertEquals(usrr, cred.username, 'username "${data.username}" not found')
        //assert
    } catch (err) {
        assertEquals(err.message, 'invalid password for account "user1"')
        }
    },
    sanitizeResources: false,
    sanitizeOps: false
})