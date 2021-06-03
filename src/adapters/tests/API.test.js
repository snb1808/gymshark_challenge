import { getData } from '../API';

describe('API', () => {
    it('should call the correct endpoint', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ res: ['many exercises'] }),
            })
        );
        await getData();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
    });
});



