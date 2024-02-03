import { BasePage } from "./baseClasses";
import { LoginPage } from "./page/loginPage";
import { OverviewPage } from "./page/overviewPage";
import { SignUpPage } from "./page/signUp.page";

export class Application extends BasePage {

    private _loginPage?: LoginPage;
    private _overviewPage?: OverviewPage;
    private _sighUpPage?: SignUpPage;

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

    public get signUpPage(): SignUpPage {
        if (!this._sighUpPage) {
            this._sighUpPage = new SignUpPage(this.page);
        }
        return this._sighUpPage;
    }
}
