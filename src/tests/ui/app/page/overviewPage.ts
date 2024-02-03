import { expect } from '@playwright/test';
import { AppPage } from '../baseClasses';
import { AccountServicesLinksComponent } from '../component/accountServices';

export class OverviewPage extends AppPage {

    public pagePath: string = '/parabank/overview.htm';

    public accountServicesLinks = new AccountServicesLinksComponent(this.page);

    private readonly accountsOverviewContainer = this.page.locator("div[ng-if='showOverview']");
    private readonly accountsOverviewTable = this.page.locator('[id="accountTable"]');

    async expectLoaded(): Promise<void> {
        await expect(this.accountsOverviewContainer).toBeVisible();
        await expect(this.accountsOverviewTable).toBeVisible();
    }

    async getAllRows() {
        await this.accountsOverviewTable.locator('tr[ng-repeat="account in accounts"]').first().waitFor();
        return await this.accountsOverviewTable.locator('tr[ng-repeat="account in accounts"]').elementHandles();
    }

    async getRowData(rowIndex: number): Promise<string[]> {
        const rows = await this.getAllRows();
        const cells = await rows[rowIndex].$$('td');
        return Promise.all(cells.map(async (cell) => cell.innerText()));
    }

    async getColumns(): Promise<string[]> {
        return await this.accountsOverviewTable.locator('thead th').allInnerTexts();
    }

    async getCellValue(rowIndex: number, columnIndex: number): Promise<string> {
        const rowData = await this.getRowData(rowIndex);
        return rowData[columnIndex];
    }

    async verifyAllRowDataIsNotEmpty(): Promise<void> {
        const rows = await this.getAllRows();

        await Promise.all(rows.map(async (row, rowIndex) => {
            const rowData = await this.getRowData(rowIndex);
            rowData.forEach(cellText => {
                expect(cellText.trim()).not.toBe('');
            })
        }))
    }
}