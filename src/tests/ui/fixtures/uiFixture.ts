import { test } from "@playwright/test";
import { Application } from "../app/application";

export const baseFixture = test.extend<{app: Application}>({
    app: async ({ page }, use) => {
        const app = new Application(page);
        await use(app);
    }
});

export type User = {
    userName: string;
    userPassword: string;
};

export const defaultUser = {
    userName: 'user',
    userPassword: 'user'
};

function createLoggedInFixture(user: User) {
    return baseFixture.extend<{ user: User, app: Application }>({
        user: [user, { scope: 'test' }],
        
        app: async ({ app, user }, use) => {
            try {
                await app.loginPage.open();
                await app.loginPage.expectLoaded();
                await app.loginPage.loginAs(user);
                await app.overviewPage.expectLoaded();
                await use(app);
            } catch (error) {
                console.error('Error during login:', error);
                throw error;
            }
        }
    });
}

export const loggedAsAdminTest = createLoggedInFixture({
    userName: process.env.ADMIN_USERNAME || 'admin',
    userPassword: process.env.ADMIN_PASSWORD || 'admin'
});

export const loggedAsUserTest = createLoggedInFixture({
    userName: process.env.USER_USERNAME || 'user',
    userPassword: process.env.USER_PASSWORD || 'user'
});