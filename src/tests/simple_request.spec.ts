import axios from 'axios';

describe('Check API requests to HttpBin', () => {
    test('Check POST request', async () => {
        const response = await axios.post('https://httpbin.org/post', {
            hello: 'world'
        });

        expect(response.data.args).toEqual({});
        expect(response.data.files).toEqual({});
        expect(response.data.form).toEqual({});
        expect(response.data.json).toEqual({ hello: 'world' });
        expect(response.data.data).toEqual('{"hello":"world"}');
    });

    test('Check GET request', async () => {
        const response = await axios.get('https://httpbin.org/get');

        expect(response.data.args).toEqual({});
        expect(response.data.url).toEqual('https://httpbin.org/get');
    
    });

    test('Check PUT request', async () => {
        const response = await axios.put('https://httpbin.org/put', 'changedHello=changedWorld');

        expect(response.data.form).toEqual({ changedHello: 'changedWorld' });
        expect(response.data.args).toEqual({});
        expect(response.data.files).toEqual({});
        expect(response.data.data).toBe('');
        expect(response.data.json).toBe(null);
    });
});
