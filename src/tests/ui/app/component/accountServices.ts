import { expect } from '@playwright/test';
import { Component } from "../baseClasses";

export class AccountServicesLinksComponent extends Component {

    async expectLoaded(): Promise<void> {
        await expect(this.page.locator('h2')).toHaveText('Account Services')
    }

    async verifyAllLinkTextsAreNonEmpty(): Promise<void> {
        const linksTexts = await this.page.locator('#leftPanel a').allInnerTexts();

        for (const text of linksTexts) {
            expect(text.trim()).not.toBe('');
        }
    }
}