import { loggedAsAdminTest } from "../fixtures/uiFixture";

loggedAsAdminTest(`Check non-empty Account Services Links and Account Overview Table On Admin Overview page`, async ({ app }) => {
    await app.overviewPage.accountServicesLinks.verifyAllLinkTextsAreNonEmpty();
    await app.overviewPage.verifyAllRowDataIsNotEmpty();
})