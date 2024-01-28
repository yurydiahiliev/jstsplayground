import {test as baseUiTest} from '@playwright/test'
import { HomePage } from './homePage'
import { CatalogPage } from './catalogPage';

export const test = baseUiTest.extend<{
     homePage: HomePage,
     catalogPage: CatalogPage
}>({
    homePage: async ({ page }, use) => {
      await use(new HomePage(page));
    },
    catalogPage: async ({ page }, use) => {
        await use(new CatalogPage(page));
    }  
  });

export const { expect } = baseUiTest;