// var data = {
//     test: 'Hello Viet Nam'
// }

var cpt = {
    data: function() {
        return {
            test: 'Hello Viet Nam'
        };
    },
    template: '<h1>{{ test }} <br> <button @click="changeTest">Change Test</button></h1>',
    methods: {
        changeTest: function() {
            this.test = 'xin chào'
        }
    }
};



new Vue({
    el: '#app',
    components: {
        'mycomponent': cpt
    }
});

new Vue({
    el: '#app2',
})