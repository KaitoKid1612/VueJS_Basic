var app = new Vue({
    el: '#app',
    data: {
        determination: true,
        menus: ['Home', 'About', 'Blog', 'Contact', 'FAQ'],
        students: [
            {
                id: 1,
                name: 'John Doe',
                email: 'upchh@example.com',
                phone: '0123456789',
                address: '123 Main St',
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'upchh1@example.com',
                phone: '0124456789',
                address: '124 Main St',
            },
            {
                id: 3,
                name: 'John Doe2',
                email: 'upchh2@example.com',
                phone: '0123456799',
                address: '1235 Main St',
            }
        ]
    }
});