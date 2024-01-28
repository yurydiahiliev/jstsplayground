import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CatalogPage extends BasePage {

    private get catalogButton() {
        return this.page.locator("button[id='fat-menu']")
    }

    private get alcoholDrinksCategory() {
        return this.page.getByRole('banner').getByRole('link', { name: 'Алкогольні напої та продукти' })
    }

    private get strongAlcoholDrinksSubCategory() {
        return this.page.getByRole('link', { name: 'Міцні напої' })
    }

    private get modalCheckAge() {
        return this.page.locator('.modal__heading:not(disabled)')
    }

    async clickOnCatalogButton() {
        await this.catalogButton.click();
    }

    async hoverOnAlcoholDrinksCategory() {
        await this.alcoholDrinksCategory.hover();
    }

    async clickOnStrongAlcoholDrinksSubCategory() {
        await this.strongAlcoholDrinksSubCategory.click();
    }

    async verifyCheckAgeModal() {
        await expect(this.modalCheckAge).toBeVisible();
    }
}