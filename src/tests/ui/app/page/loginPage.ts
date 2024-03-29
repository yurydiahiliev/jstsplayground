import { expect } from "playwright/test";
import { AppPage } from "../baseClasses";
import { User } from "../../fixtures/uiFixture";

export class LoginPage extends AppPage {

    public pagePath: string = "/parabank/index.htm";

    private readonly userName = this.page.locator("input[name='username']");
    private readonly userPassword = this.page.locator("input[name='password']");
    private readonly submitButton = this.page.locator("input[type='submit']");
    private readonly registerButton = this.page.locator("[id=loginPanel] a").getByText("Register");

    async expectLoaded(): Promise<void> {
        await expect(this.userName).toBeVisible();
        await expect(this.userPassword).toBeVisible();
        await expect(this.submitButton).toBeVisible();
        await expect(this.registerButton).toBeVisible();
    }

    async loginAs(user: User): Promise<void> {
        await this.userName.fill(user.userName);
        await this.userPassword.fill(user.userPassword);
        await this.submitButton.click();
    }

    async clickOnRegisterButton(): Promise<void> {
        await this.registerButton.click();
    }
}