import { Page } from "@playwright/test";

export abstract class BasePage {

    protected readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }
}

export abstract class Component extends BasePage {

    abstract expectLoaded(message?: string): Promise<void>;

    async isLoaded(): Promise<boolean> {
        try {
            await this.expectLoaded()
            return true;
        } catch {
            return false;
        }
    }
}

export abstract class AppPage extends Component {

    public abstract pagePath: string;

    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath, { waitUntil: 'networkidle' });
        await this.expectLoaded();
    }
}