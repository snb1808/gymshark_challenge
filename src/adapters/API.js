export const getData = async () => await
    fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
        .then(res => res.json());

