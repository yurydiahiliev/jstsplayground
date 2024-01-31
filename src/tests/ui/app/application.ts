import { BasePage } from "./baseClasses";
import { LoginPage } from "./page/loginPage";
import { OverviewPage } from "./page/overviewPage";

export class Application extends BasePage {
    
    private _loginPage?: LoginPage;
    private _overviewPage?: OverviewPage;

    public get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    public get overviewPage(): OverviewPage {
        if (!this._overviewPage) {
            this._overviewPage = new OverviewPage(this.page);
        }
        return this._overviewPage;
    }
}
