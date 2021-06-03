import { getData } from '../API';

describe('API', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ excercises: ['many exercises'] }),
        })
    );

    beforeEach(() => {
        fetch.mockClear()
    });

   it('should call the correct endpoint', async () => {
       await getData();

       expect(fetch).toHaveBeenCalledWith('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
       expect(fetch).toHaveBeenCalledTimes(1);
   });
});