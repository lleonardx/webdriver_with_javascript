const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');


describe('Teste de login', () =>{
    it('Deve logar usando as credencias corretas', async() =>{
        //Abrir o chrome
        const navegador = await new Builder().forBrowser('chrome').build();
        //Acessar o site
        await navegador.get('https://www.saucedemo.com/');
        //Insere Usuário
        await navegador.findElement(By.id('user-name')).sendKeys('standard_user');
        //Insere Senha
        await navegador.findElement(By.id('password')).sendKeys('secret_sauce');
        //Clica em entrar
        await navegador.findElement(By.id('login-button')).click();
        //Validando entrada
        const urlAtual = await navegador.getCurrentUrl();
        assert.ok(urlAtual.endsWith('/inventory.html'));
        //Fechar navegador
        await navegador.quit();

    });

    it.only('Deve logar usando as credencias incorretas', async() =>{
        //Abrir o chrome
        const navegador = await new Builder().forBrowser('chrome').build();
        //Acessar o site
        await navegador.get('https://www.saucedemo.com/');
        //Insere Usuário
        await navegador.findElement(By.id('user-name')).sendKeys('standard_user');
        //Insere Senha
        await navegador.findElement(By.id('password')).sendKeys('23156546');
        //Clica em entrar
        await navegador.findElement(By.id('login-button')).click();
        //
        const errorMessage = await navegador.findElement({ className: 'error-message-container' }).getText('Epic sadface: Username and password do not match any user in this service');
        console.log(errorMessage);

        

    });



});