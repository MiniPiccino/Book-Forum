// test for outputs on the pages from the databases

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { showForums } from '../modules/output.js'

Deno.test({name: 'checking if the function works        ', async fn() {
    //arrange
    const result = {
        nameOfForum: "HP",
        avatar: "user1-1648463157569.jpeg",
        summary: "The book",
        added: "28-2-2022"
    }
    //act
    let test = await showForums()
    //assert
    assertEquals(result, test[0], "result not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   
})