
/* main.js */

// deno-lint-ignore-file

const options = {
    'tables': true,
    'tasklists': true,
    'strikethrough': true
}

const converter = new showdown.Converter(options)

window.addEventListener('DOMContentLoaded', event =>{
    const markdown = document.getElementById('description').value
    const html = converter.makeHtml(markdown)
    let id = document.getElementById('descriptionOutput')
    id.querySelector('p').innerHTML = html
})
// document.querySelector('textarea').addEventListener('input', event => {
//     console.log("MARKdown")
//     const markdown = document.querySelector('textarea').value
//     const html = converter.makeHtml(markdown)
//     console.log(markdown)
//     console.log(html)
//     document.querySelector('p').innerHTML = html
// })

