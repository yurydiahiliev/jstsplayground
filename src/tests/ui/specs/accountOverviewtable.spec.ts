import test from "@playwright/test";
import { defaultUser, loggedAsAdminTest, loggedAsUserTest } from "../fixtures/uiFixture";
import { Application } from "../app/application";

// test(`Check non-empty Account Services Links and Account Overview Table On Admin Overview page`, async ({ page }) => {
//     const app = new Application(page);
//     await app.loginPage.open();
//     await app.loginPage.expectLoaded();
//     await app.loginPage.loginAs(defaultUser);
//     await app.overviewPage.expectLoaded();
//     await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
//     await app.overviewPage.verifyAllRowDataIsNotEmpty();
// })

loggedAsUserTest(`As a user check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})

loggedAsAdminTest(`As a admin check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})