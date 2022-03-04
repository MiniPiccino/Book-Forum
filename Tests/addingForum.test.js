/* addingForum.test.js */

import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

import { addingForum } from '../modules/forum.js'

Deno.test('checking if in the function variable name exists', () =>{
    //arrange
    const name = "rene"
    //act
    try{
    const nameOfForum = addingForum(name)
    //assert
    assertEquals(Boolean(nameOfForum), true, "name is not there")
    }catch(err){
        assertEquals(err.message, 'function does not exist')
    }
})
Deno.test('checking if in the function variable summary exists', () =>{
    //arrange
    const summary = "testing here"
    //act
    try{
    const summaryCheck = addingForum(summary)
    assertEquals(Boolean(summaryCheck), true, "summary is not here")
    }catch(err){
        assertEquals(err.message, 'function does not exist')
    }
})
Deno.test('checking if in the function variable description exists', () =>{
    //arrange
    const description = "tests on function" 
    //act
    try{
    const descriptionCheck = addingForum(description)
    assertEquals(Boolean(descriptionCheck), true, "desscription is not there")
    }catch(err){
        assertEquals(err.message, 'function does not exists')
    }
})
Deno.test('checking if in the function variable avatar exists', () =>{
    //arrange
    const avatar = 'image'
    //act
    try{
    const avatarCheck = addingForum(avatar)
    //assert
    assertEquals(Boolean(avatarCheck), true, "avatar is not here")
    }catch(err){
        assertEquals(err.message, 'function does not exists')
    }
})

