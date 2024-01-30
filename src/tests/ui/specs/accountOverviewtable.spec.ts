import test from "playwright/test";
import { defaultAdmin, loggedAsAdminTest } from "../fixtures/uiFixture";
import { Application } from "../app/application";

test(`Check non-empty Account Services Links and Account Overview Table On Admin Overview page`, async ({ page }) => {
    const app = new Application(page);
    await app.loginPage.open();
    await app.loginPage.expectLoaded();
    await app.loginPage.loginAs(defaultAdmin);
    await app.overviewPage.expectLoaded();
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})

loggedAsAdminTest(`Check non-empty Account Services Links and Account Overview Table On Admin Overview page`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})