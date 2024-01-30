import { BasePage } from "./baseClasses";
import { LoginPage } from "./page/loginPage";
import { OverviewPage } from "./page/overviewPage";

export class Application extends BasePage {
    
    public loginPage = new LoginPage(this.page);
    public overviewPage = new OverviewPage(this.page)
}