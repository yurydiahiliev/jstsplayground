import { expect } from "@playwright/test";
import { AppPage } from "../baseClasses";

export class SignUpPage extends AppPage {

    public pagePath: string = '/parabank/register.htm';

    private readonly customerFirstName = this.page.locator('[id="customer.firstName"]');
    private readonly customerLastName = this.page.locator('[id="customer.lastName"]');
    private readonly customerAddressStreet = this.page.locator('[id="customer.address.street"]');
    private readonly customerAddressCity = this.page.locator('[id="customer.address.city"]');
    private readonly customerAddressState = this.page.locator('[id="customer.address.state"]');
    private readonly customerAddressZipCode = this.page.locator('[id="customer.address.zipCode"]');
    private readonly customerPhoneNumber = this.page.locator('[id="customer.phoneNumber"]');
    private readonly customerSsn = this.page.locator('[id="customer.ssn"]');
    private readonly customerUserName = this.page.locator('[id="customer.username"]');
    private readonly customerPassword = this.page.locator('[id="customer.password"]');
    private readonly customerRepeatedPassword = this.page.locator('[id="repeatedPassword"]');
    private readonly registerButton = this.page.locator('[value=Register]');
    private readonly logOutButton = this.page.locator('[href="/parabank/logout.htm"]');

    async expectLoaded(): Promise<void> {
        await expect(this.customerFirstName).toBeVisible();
        await expect(this.customerLastName).toBeVisible();
        await expect(this.customerAddressStreet).toBeVisible();
        await expect(this.customerAddressCity).toBeVisible();
        await expect(this.customerAddressState).toBeVisible();
        await expect(this.customerAddressZipCode).toBeVisible();
        await expect(this.customerPhoneNumber).toBeVisible();
        await expect(this.customerSsn).toBeVisible();
        await expect(this.customerUserName).toBeVisible();
        await expect(this.customerPassword).toBeVisible();
        await expect(this.customerRepeatedPassword).toBeVisible();
        await expect(this.registerButton).toBeVisible();
    }

    async fillRegisterForm(customerFirstName: string,
        customerLastName: string,
        customerAddressStreet: string,
        customerAddressCity: string,
        customerAddressState: string,
        customerAddressZipCode: string,
        customerPhoneNumber: string,
        customerSsn: string,
        customerUserName: string,
        customerPassword: string,
        customerRepeatedPassword: string
    ): Promise<void> {
        await this.customerFirstName.fill(customerFirstName);
        await this.customerLastName.fill(customerLastName);
        await this.customerAddressStreet.fill(customerAddressStreet);
        await this.customerAddressCity.fill(customerAddressCity);
        await this.customerAddressState.fill(customerAddressState);
        await this.customerAddressZipCode.fill(customerAddressZipCode);
        await this.customerPhoneNumber.fill(customerPhoneNumber);
        await this.customerSsn.fill(customerSsn);
        await this.customerUserName.fill(customerUserName);
        await this.customerPassword.fill(customerPassword);
        await this.customerRepeatedPassword.fill(customerRepeatedPassword);
        await this.registerButton.click();
    }

    async verifyUserWasCreatedOrExist() {
        const errorMessageLocator = this.page.locator('text=This username already exists.');
        const successTextLocator = this.page.getByText('Your account was created successfully. You are now logged in.');
    
        await expect(successTextLocator.or(errorMessageLocator)).toBeVisible(); 
    }
}