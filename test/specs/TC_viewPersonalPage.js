const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page');
const userPage = require('../pageobjects/user.page');

describe(' Xem trang cá nhân ', () => {

    before ('Truy cập trang web', async() => {
        await LoginPage.open()
        await LoginPage.login('hieu', 'Hieu@123')
        
    });
    
    it('Click icon xem trang cá nhân', async () => {

        await HomePage.User.click()
        await browser.pause(5000)
        await expect(userPage.cover).toExist()
    })
})