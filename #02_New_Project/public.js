var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        link: 'https://www.facebook.com/',
        title: 'Xin chào mọi người',
        test: '<a href="facebook.com">My facebook</a>',
        dem: 0,
        number: 0,
        name: 'Viet',
        linkVal: 'https://www.google.com',
        managerRed: false,
        a: 0,
        b: 0,
        x: 0,
        y: 0,
        diem: 'Bạn A có điểm môn toán là 7',
        color: 'black',
        width: 100,
        height: 50
    },
    computed: {
        tangA: function(event) {
            return this.a;
        },
        tangB: function(event) {
            return this.b;
        },
        divClasses: function() {
            return {
                red: this.managerRed,
                black: !this.managerRed
            }
        },
        customStyles: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
                // height: this.height + 'px'
            }
        }
    },
    watch: {
        diem: function(event) {
            console.log('Điểm của bạn đã được một giáo viên khác nhập')
        }
    },
    methods: {
        changeValue: function(event) {
            this.message = event.target.value;
        },
        changePost: function() {
            this.title = 'Chúc mừng các bạn đến với tôi'
            return this.title;
        },
        addNumber: function(event) {
            this.number = event.target.value++;
            return this.number;
        },
        calCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        stopMouse: function(event) {
            event.stopPropagation(); //Dừng diễn biến của event Mouseover
        },
        keyboard: function(event) {
            alert('hello')
        },
        changeLink: function(event) {
            this.linkVal = 'https://www.facebook.com';
        }
    }
});

app.diem = 'Bạn A có điểm môn toán là 8'