import { test } from "@playwright/test";
import { Application } from "../app/application";

export const baseFixture = test.extend<{app: Application}>({
    app: async({ page }, use) => {
        const app = new Application(page);
        await use(app);
    }
})

export type DefaultUsers = {
    admin: {
        userName: string,
        userPassword: string
    }
}

export const loggedAsAdminTest = baseFixture.extend<{ admin: DefaultUsers['admin'], app: Application }>({
    admin: {
        userName: 'admin',
        userPassword: 'admin'
    },
    
    app: async ({ app, admin }, use) => {
        await app.loginPage.open();
        await app.loginPage.expectLoaded();
        await app.loginPage.loginAs(admin);
        await app.overviewPage.expectLoaded();
        await use(app);
    }
})