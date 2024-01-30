import { test } from "@playwright/test";
import { Application } from "../app/application";

export const baseFixture = test.extend<{app: Application}>({
    app: async({ page }, use) => {
        const app = new Application(page);
        await use(app);
    }
})

export type User = {
    userName: string;
    userPassword: string;
};

export const defaultAdmin: User = {
    userName: 'admin',
    userPassword: 'admin'
};

export const loggedAsAdminTest = baseFixture.extend<{ user: User, app: Application }>({
    user: [defaultAdmin, { scope: 'test' }],
    
    app: async ({ app, user }, use) => {
        await app.loginPage.open();
        await app.loginPage.expectLoaded();
        await app.loginPage.loginAs(user);
        await app.overviewPage.expectLoaded();
        await use(app);
    }
})