//Feature 3

import puppeteer from 'https://deno.land/x/puppeteer@9.0.2/mod.ts'
import { assertEquals, assertNotEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'
import { cryptoRandomString } from 'https://deno.land/x/crypto_random_string/mod.ts'


//Scenario outline
// User can access register page, register with credentials, acces login page, insert his credentials
//(username and password) and being able to (when logged in) acces newForum
// page to insert new book forum
Deno.test('testing access to register page', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //WHEN I click on register button
      await page.click('a[href="/register"]', { waitUntil: 'networkidle0' })
    //THEN I should see register page with two input fields
    // username and password
        const heading = await page.$eval('h1', node => node.innerText)
	    await assertEquals(heading, 'Create an Account', 'register screen not found')
    //AND the username and password fields should be visible
        const usernameField = await page.$eval('input[name="username"]', node => node.offsetParent)
        const passwordField = await page.$eval('input[name="password"]', node => node.offsetParent)
        await assertNotEquals(usernameField, null, 'username field is not visible')
        await assertNotEquals(passwordField, null, 'username field is not visible')
        await browser.close()
})

Deno.test('testing inserting credentials into register page', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        const string = cryptoRandomString({length: 10})
        const pass = 'p455w0rd'
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //AND I click on register button
        await page.click('a[href="/register"]', { waitUntil: 'networkidle0' })
    //WHEN I insert random string in username field
        await page.type('input[name="username"]', string)
    //AND I insert 'p455w0rd' in password field
        await page.type('input[name="password"]', pass)
    //AND I press enter
        await page.keyboard.press('Enter')
        await page.waitForTimeout(1000)
    //THEN I should be on Log In page
        const heading = await page.$eval('h1', node => node.innerText)
		await assertEquals(heading, 'Log In', 'logging in does not take user to Log in page')
        await browser.close()
 })


Deno.test('testing access to login page', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //WHEN I click on Log In button
        await page.click('a[href="/login"]', { waitUntil: 'networkidle0' })
    //THEN I should see login page with two input fields
    // username and password
        const heading = await page.$eval('h1', node => node.innerText)
	    await assertEquals(heading, 'Log In', 'login screen not found')
    //AND the username and password fields should be visible
        const usernameField = await page.$eval('input[name="username"]', node => node.offsetParent)
        const passwordField = await page.$eval('input[name="password"]', node => node.offsetParent)
        await assertNotEquals(usernameField, null, 'username field is not visible')
        await assertNotEquals(passwordField, null, 'username field is not visible')
        await browser.close()
})

Deno.test('login', async test =>{
    //GIVEN I am on the home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //AND I click on Log In button
        await page.click('a[href="/login"]', { waitUntil: 'networkidle0' })
    //WHEN I insert username 'doej' in username field
        await page.type('input[name="username"]', 'doej')
    //AND I insert password 'p455w0rd' in password field
        await page.type('input[name="password"]', 'p455w0rd')
    //AND I press Enter
        await page.keyboard.press('Enter')
        await page.waitForTimeout(5000)
    //THEN I should see home page 
        const heading = await page.$eval('h1', node => node.innerText)
		await assertEquals(heading, 'Book Forum', 'logging in does not take user to Home page')
        //AND I check if I am logged in
            const link = 'a[href="/logout"]'
            const visible = await page.$eval(link, node => {
                return node.offsetParent // returns null if link not visible
                })
            await assertNotEquals(visible, null, 'logout button not found')
             await browser.close()
})

Deno.test('testing access to newForum page', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //AND I am logged in
    await page.click('a[href="/login"]', { waitUntil: 'networkidle0' })
    //AND I insert username 'doej' in username field
        await page.type('input[name="username"]', 'doej')
    //AND I insert password 'p455w0rd' in password field
        await page.type('input[name="password"]', 'p455w0rd')
    //AND I press Enter
            await page.keyboard.press('Enter')
            await page.waitForTimeout(5000)
    //WHEN I click on New Forum button I should arrive to newForum page
        await page.click('a[href="/newForum"]', { waitUntil: 'networkidle0' })
    //THEN I should see the Add new Book Forum heading
        const heading = await page.$eval('h1', node => node.innerText)
    	await assertEquals(heading, 'Add new Book Forum', 'logging in does not take user to New Forum page')
    await browser.close()
})

Deno.test('testing inserting information for New Forum', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
    //AND I am logged in
    await page.click('a[href="/login"]', { waitUntil: 'networkidle0' })
    //AND I insert username 'doej' in username field
        await page.type('input[name="username"]', 'doej')
    //AND I insert password 'p455w0rd' in password field
        await page.type('input[name="password"]', 'p455w0rd')
    //AND I press Enter
        await page.keyboard.press('Enter')
        await page.waitForTimeout(5000)
    //AND I click on New Forum button I should arrive to newForum page
        await page.click('a[href="/newForum"]', { waitUntil: 'networkidle0' })
    //WHEN I insert data in nameOfForum field
        await page.type('input[name="nameOfForum"]', 'Linux', {delay: 100})
    //AND I insert new avatar in files
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click("[name='avatar']"),
            ]);
        await fileChooser.accept(['/Users/rene/Desktop/University/Year 2/Software Development/Unknown.jpeg'])
    //AND I insert information in short summary field
        await page.type('textarea[name="summary"]', 'The book is very good', {delay: 100})
    //AND I insert information in description field
        await page.type('textarea[name="description"]', 'The very good book about Linux', {delay: 100})
        await page.waitForTimeout(5000)
    await browser.close()
})

//Scenario: being able to see forum details
Deno.test('testing access to details about forum page', async test => {
    //GIVEN I am on home page and I have accepted All Cookies
        const browser = await puppeteer.launch({ headless: false })
        const page = (await browser.pages())[0]
        await page.goto('https://winter-sabine-8080.codio-box.uk/', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
        await page.click('a[href="/cookies:accept"]', { waitUntil: 'networkidle0' })
        await page.waitForTimeout(1000)
        await page.click('a[href="/login"]', { waitUntil: 'networkidle0' })
    //AND I insert username 'doej' in username field
        await page.type('input[name="username"]', 'doej')
    //AND I insert password 'p455w0rd' in password field
        await page.type('input[name="password"]', 'p455w0rd')
    //AND I press Enter
            await page.keyboard.press('Enter')
            await page.waitForTimeout(5000)
    //WHEN I click on Show Forum button
      await page.click('a[href="/details/1"]', { waitUntil: 'networkidle0' })
      await page.waitForTimeout(5000)
        await browser.close()
})