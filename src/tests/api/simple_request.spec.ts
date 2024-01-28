import axios from 'axios';

const BASE_URL:string = "https://httpbin.org"

describe('Check API requests to HttpBin', () => {
    test('Check POST request', async () => {
        const requestBody = {
            yurii: 'hello!'
        }

        const response = await axios.post(`${BASE_URL}/post`, requestBody);

        expect(response.status).toEqual(200);
        expect(response.data.args).toEqual({});
        expect(response.data.files).toEqual({});
        expect(response.data.form).toEqual({});
        expect(response.data.json).toEqual(requestBody);
        expect(response.data.data).toEqual(JSON.stringify(requestBody));
    });

    test('Check GET request', async () => {
        const response = await axios.get(`${BASE_URL}/get`);

        expect(response.status).toEqual(200);
        expect(response.data.args).toEqual({});
        expect(response.data.url).toEqual(`${BASE_URL}/get`);
    
    });

    test('Check PUT request', async () => {
        const requestBody = {
            changedHello: 'changedWorld'
        }
        const response = await axios.put(`${BASE_URL}/put`, requestBody);

        expect(response.status).toEqual(200);
        expect(response.data.data).toEqual(JSON.stringify(requestBody));
        expect(response.data.args).toEqual({});
        expect(response.data.files).toEqual({});
        expect(response.data.json).toEqual(requestBody);
    });
    

    test('Check PATCH request', async () => {
        const sampleUpdate = {
            propertyToUpdate: 'newValue'
        };

        const response = await axios.patch(`${BASE_URL}/patch`, sampleUpdate);

        expect(response.status).toEqual(200);
        expect(response.data.url).toContain('httpbin.org/patch');
        expect(response.data.json).toEqual(sampleUpdate);
    });

    test('Check DELETE request', async () => {
        const response = await axios.delete(`${BASE_URL}/delete`, {
            data: {sampleData: 'test'}
        })

        expect(response.status).toEqual(200);
        expect(response.data.url).toContain('httpbin.org/delete');
    })
});