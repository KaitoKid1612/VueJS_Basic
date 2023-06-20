Vue.component('hello', {
    template: '<h1>Hello {{name}}</h1>'
})



var app = new Vue({
    el: '#app',
    data: {
        title: 'The First VueJS Instance',
        showParagraph: false,
    },
    methods: {
        show: function() {
            this.showParagraph = !this.showParagraph;
            this.updateTitle('This VueJS Instance (Updated)');
            console.log(this.$refs);
            this.$refs.infoButton.innerText = 'hehe';
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed: ' + value);
        },
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        title: 'The Second VueJS Instance',
    },
    methods: {
        onChangeTitle: function() {
            app.title = 'The Second VueJS Instance';
        },
    }
});

// app.$refs.infoGraph.innerText = 'Teo';

console.log(app.$refs);
// setTimeout(function() {
//     app2.onChangeTitle();
// },3000)