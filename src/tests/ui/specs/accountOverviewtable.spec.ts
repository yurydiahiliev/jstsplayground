import { Application } from "../app/application";
import { loggedAsAdminTest, loggedAsUserTest } from "../fixtures/uiFixture";
import { test } from "playwright/test";

test('Sign up with new user', async ({ page }) => {
    const app = new Application(page);
    await app.signUpPage.open()
    await app.signUpPage.expectLoaded();
    await app.signUpPage.fillRegisterForm(
        'firstname', 'lastName', 'test', 'test','test','test','test','test','user','user','user',);
    await app.signUpPage.verifyUserWasCreated();  
});

test('Sign up with new admin user', async ({ page }) => {
    const app = new Application(page);
    await app.signUpPage.open()
    await app.signUpPage.expectLoaded();
    await app.signUpPage.fillRegisterForm(
        'firstname', 'lastName', 'test', 'test','test','test','test','test','admin','admin','admin',);
    await app.signUpPage.verifyUserWasCreated();  
});

loggedAsUserTest(`As a user check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})

loggedAsAdminTest(`As a admin check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})