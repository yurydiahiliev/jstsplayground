import { expect } from '@playwright/test';
import { AppPage } from '../baseClasses';
import { AccountServicesLinksComponent } from '../component/accountServices';

export class OverviewPage extends AppPage {

    public pagePath: string = '/parabank/overview.htm';

    public accountServicesLinks = new AccountServicesLinksComponent(this.page);

    private readonly accountsOverviewContainer = this.page.locator("div[id='showOverview']");
    private readonly accountsOverviewTable = this.page.locator("table[id='accountTable']");

    async expectLoaded(): Promise<void> {
        await expect(this.accountsOverviewContainer).toBeVisible();
        await expect(this.accountsOverviewTable).toBeVisible();
    }

    async getAllRows() {
        await this.accountsOverviewTable.locator('tbody tr').first().waitFor();
        return await this.accountsOverviewTable.locator('tbody tr').elementHandles();
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
            const [firstCell, secondCell, thirdCell, fourthCell] = rowData;

            expect(parseFloat(firstCell)).toBeGreaterThan(0);
    
            expect(parseFloat(secondCell)).toBeGreaterThan(0);
            expect(secondCell).toContain('$');
    
            expect(parseFloat(thirdCell)).toBeGreaterThan(0);
            expect(thirdCell).toContain('$');

            expect(fourthCell).toContain('Total');
        }))
    }
}