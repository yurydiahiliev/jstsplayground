import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    private get searchInput() {
        return this.page.locator('input[name="search"]');
    }

    private get searchButton() {
        return this.page.locator('.button.search-form__submit')
    }

    async goTo(): Promise<HomePage> {
        await this.page.goto('https://rozetka.com.ua/ua/');
        await this.page.waitForLoadState('networkidle') 
        return this;
    }

    async searchForProduct(productName: string): Promise<HomePage> {
        await this.searchInput.fill(productName);
        return this;
    }

    async clickOnSearchButton(): Promise<HomePage> {
        await this.searchButton.click();
        return this;
    }

    async assertOnHomePage(): Promise<HomePage> {
        await expect(this.page).toHaveURL('https://rozetka.com.ua/ua/');
        return this;
    }
}