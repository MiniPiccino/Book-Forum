// test for outputs on the pages from the databases

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { showForums, detailForum } from '../modules/output.js'

Deno.test({name: 'checking if the function showForums work        ', async fn() {
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

Deno.test({name: 'checking if the function detailForum work        ', async fn() {
    //arrange
    const result = {
        nameOfForum: "HP",
        avatar: "user1-1648463157569.jpeg",
        summary: "The book",
        added: "28-2-2022",
        IDForum: 1,
        username: "user1",
        description: "Th every good book"
    }
    //act
    let id = 1
    let test = await detailForum(id)
    //assert
    assertEquals(result, test[0], "result not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   
})
