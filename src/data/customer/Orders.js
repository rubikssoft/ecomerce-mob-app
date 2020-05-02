export default [
    {
        orderid: '111123',

        seller: {
            id: 34,
            name: 'Test Shop 2',
            place: 'Mukkam ',
            category: 'Grocery , Test Cate1 ',
            phone: '98765433455',
            img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        },
        items: [
            {
                id: 2,
                name: 'Rice 2',
                category: 'Raice',
                price: 20,
                unit: [{ name: 'gm', default: false, value: 0.001 }, { name: 'kg', default: true, value: 1, }]

            },
            {
                id: 3,
                name: 'Rice 6',
                category: 'Raice',
                price: 20,
                unit: [
                    { name: 'gm', default: false, value: 0.001 },
                    { name: 'kg', default: true, value: 1, }
                ]

            },

        ],
        customer: {
            name: 'Sadu',
            address: {
                name: 'Sadu',
                mobile: '7293202425'
            }

        }
        ,
        total: {
            count: 2,
            amount: 40
        },
        status: 'pending',
        date: '11-10-2020 12:23 AM'




    }
    ,
    {
        orderid: '111124',

        seller: {
            id: 34,
            name: 'Test Shop 2',
            place: 'Mukkam ',
            category: 'Grocery , Test Cate1 ',
            phone: '98765433455',
            img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        },
        items: [
            {
                id: 2,
                name: 'Rice 2',
                category: 'Raice',
                price: 20,
                unit: [
                    { name: 'gm', default: false, value: 0.001 },
                    { name: 'kg', default: true, value: 1, }
                ]

            },
            {
                id: 3,
                name: 'Rice 6',
                category: 'Raice',
                price: 20,
                unit: [
                    { name: 'gm', default: false, value: 0.001 },
                    { name: 'kg', default: true, value: 1, }
                ]

            },

        ],
        customer: {
            name: 'Sadu',
            address: {
                name: 'Sadu',
                mobile: '7293202425'
            }

        }
        ,
        total: {
            count: 2,
            amount: 40
        },
        status: 'pending',
        date: '11-10-2020 12:23 AM'




    }
]