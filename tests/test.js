const url = "https://angular-6-registration-login-example.stackblitz.io/register";

describe("Registrar Usuario", () => {
    test("registro de usuario", async () => {
        await page.goto(url);
        await page.waitForNavigation();
        await page.click("input[formcontrolname=firstName]");
        await page.type("input[formcontrolname=firstName]", 'Camilo');
        await page.click("input[formcontrolname=lastName]");
        await page.type("input[formcontrolname=lastName]", 'Mojica');
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", 'jc.mojicap');
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", "myPassword");
        await expect(page).toClick('button', {text: 'Register'});
        await page.waitForNavigation();
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", 'jc.mojicap');
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", "myPassword");
        await expect(page).toClick('button', {text: 'Login'});
        await page.waitForNavigation();
        await expect(page).toMatch('Hi '+'Camilo'+'!')
    }, 30000);
});