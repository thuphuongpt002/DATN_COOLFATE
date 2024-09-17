const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#id_username');
    }

    get inputPassword () {
        return $('#id_password');
    }

    get btnLogin () {
        return $('[type="submit"]');
    }

    get page (){
        return $('.login')
    }

    get forget() {
        return $('/html/body/section/div/form/p[1]/a') 
    }

    get register() {
        return $('/html/body/section/div/form/p[2]/a')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('user/login');
    }
}

module.exports = new LoginPage();
