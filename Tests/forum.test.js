//tests for adding new forum

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'
import { existsSync } from "https://deno.land/std@0.91.0/fs/mod.ts";
import { copy } from "https://deno.land/std@0.91.0/fs/mod.ts";

import { saveAvatar, addAvatar } from '../modules/forum.js'

Deno.test({name: 'checking if the filepath is passed        ', async fn() {
    //arrange
    await copy('Tests/test.jpg', 'Tests/newTest.jpg')
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
    //act
    const filename = await saveAvatar(username, filepath)
    let path = `/home/codio/workspace/public/uploads/${filename}`
    //assert
    assertEquals(await existsSync(path), true, "filepath not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   
})

Deno.test({name: 'checking if the addAvatar works        ', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    const filename = await addAvatar(username, nameOfForum, summary, description, image)
    //console.log(filename)
    //let path = `/home/codio/workspace/public/uploads/${filename}`
    //assert
    assertEquals(filename, true, "filepath not found")
    },
    sanitizeResources: false,
    sanitizeOps: false   
})

Deno.test({name: 'checking if the filepath is there', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    try {
        const filename = await addAvatar(username, nameOfForum, summary, description, image)
        //assert
        assertEquals(filename, true, "username is not found")
    } catch (err) {
        assertEquals(err.message, "filepath is not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the filepath is there', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    try {
        const filename = await addAvatar(username, nameOfForum, summary, description, image)
        //assert
        assertEquals(filename, true, "nameOfForum is not found")
    } catch (err) {
        assertEquals(err.message, "nameOfForum is not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the filepath is there', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    try {
        const filename = await addAvatar(username, nameOfForum, summary, description, image)
        //assert
        assertEquals(filename, true, "summary is not found")
    } catch (err) {
        assertEquals(err.message, "summary is not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the filepath is there', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    try {
        const filename = await addAvatar(username, nameOfForum, summary, description, image)
        //assert
        assertEquals(filename, true, "description is not found")
    } catch (err) {
        assertEquals(err.message, "description is not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})
Deno.test({name: 'checking if the filepath is there', async fn() {
    //arrange
      const username = "user1"
      //const filepath = "/home/codio/workspace/tmp/6b84a474/8bc98258f7934176a342cefc3b606ad8bbb2e1bb.jpeg"
      const nameOfForum = "book"
      const summary = "the book is good"
      const description = "the book is very good"
      const filepath = `/home/codio/workspace/Tests/newTest.jpg`
      const image = `test.jpg`
    //act
    try {
        const filename = await addAvatar(username, nameOfForum, summary, description, image)
        //assert
        assertEquals(filename, true, "image is not found")
    } catch (err) {
        assertEquals(err.message, "image is not found")
        }
    },
    sanitizeResources: false,
    sanitizeOps: false   

})