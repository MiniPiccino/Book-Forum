// test for outputs on the pages from the databases

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { showForums, detailForum, showingComments } from '../modules/output.js'

Deno.test({name: 'checking if the function showForums work        ', async fn() {
    //arrange
    const result = {
        nameOfForum: "HP",
        avatar: "user2-1649546596957.jpeg",
        summary: "The book",
        added: "9-3-2022",
        IDForum: 1
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
        avatar: "user2-1649546596957.jpeg",
        summary: "The book",
        added: "9-4-2022",
        IDForum: 1,
        username: "user2",
        description: "**The very good book**"
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

Deno.test({name: 'checking if the function showingComments work        ', async fn() {
    //arrange
    const result = {
      comment: "The very good book about friendship",
      username: "user2",
      added: "10-4-2022"
    }
    //act
    let id = 1
    let test = await showingComments(id)
    //assert
    assertEquals(result, test[0], "result not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   
})
