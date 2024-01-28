import { test } from './uiTestSetup';

test.describe('Rozetka Tests', () => {
    test('Check navigation to "Catalog" and check "Drinks" categories', async ({ homePage, catalogPage }) => {
        await homePage.goTo();
        await homePage.assertOnHomePage();
        await catalogPage.clickOnCatalogButton();
        await catalogPage.hoverOnAlcoholDrinksCategory();
        await catalogPage.clickOnStrongAlcoholDrinksSubCategory();
        await catalogPage.verifyCheckAgeModal();
    })
})