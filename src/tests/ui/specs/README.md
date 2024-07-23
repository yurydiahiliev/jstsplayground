# JS/TS Playground for Automation tests

## Description

An area to write and execute UI and API tests using JS/TS and Axios and Playwright
Services to test:

* Free simple bank web app - https://parabank.parasoft.com/parabank/index.htm
* Free public API service - https://httpbin.org

## Getting Started

### Dependencies

    ```sh
    git clone https://github.com/yurydiahiliev/jstsplayground.git
    cd jstsplayground
    ```
    ```sh
    npm install
    npx playwright install --with-deps
    ```

### Running UI tests 

    ```sh
    npx playwright test  
    ```


### Running API tests 

Go to directory: src/tests/api and execute the following command that will trigger jest tests

  ```sh
    npm test
    ```

Or install Jest globally using:

    ```sh
    npm install jest
    jest
    ```


### Reporting

    ```sh
    npx playwright show-report 
    ```