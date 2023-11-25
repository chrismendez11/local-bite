export const filterOptions = [
    {
        title: 'Radio',
        options: [
            {
                label: '500M',
                value: 500,
            },
            {
                label: '1KM',
                value: 1000,
            },
            {
                label: '5KM',
                value: 5000,
            },
            {
                label: '10KM',
                value: 10000,
            },
            {
                label: '25KM',
                value: 25000,
            },
        ],
        filterProperty: 'radius'
    },
    {
        title: 'Rating',
        options: [
            {
                label: 'Mínimo 1 Estrella',
                value: 1,
            },
            {
                label: 'Mínimo 2 Estrellas',
                value: 2,
            },
            {
                label: 'Mínimo 3 Estrellas',
                value: 3,
            },
            {
                label: 'Mínimo 4 Estrellas',
                value: 4,
            },
            {
                label: 'Mínimo 5 Estrellas',
                value: 5,
            },
        ],
        filterProperty: 'rating'
    },
]