import { loggedAsAdminTest, loggedAsUserTest } from "../fixtures/uiFixture";

loggedAsUserTest(`As a user check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})

loggedAsAdminTest(`As a admin check non-empty Account Services Links and Account Overview Table On Admin Overview page with fixture`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})