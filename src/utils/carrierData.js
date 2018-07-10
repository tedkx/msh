export const carriers = {
    dhl: {
        name: 'dhl',
        label: 'DHL',
        icon: '',
        searchValidation: /\d{8,}/
    },
    acs: {
        name: 'acs',
        label: 'ACS',
        icon: '',
        searchValidation: /\d{8,}/
    },
    couriercenter: {
        name: 'couriercenter',
        label: 'CourierCenter',
        icon: '',
        searchValidation: number => {
            console.log('courier center validation');
            return /\d{8,}/.test(number);
        }
    },
    tnt: {
        name: 'tnt',
        label: 'TNT',
        icon: '',
        searchValidation: /\d{8,}/
    }
}