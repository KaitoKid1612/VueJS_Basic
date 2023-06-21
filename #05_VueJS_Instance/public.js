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

var app3 = new Vue({
    el: '#app3',
    data: {
        title: 'The Third VueJS Instance',
    },
    beforeCreated: function() {
        console.log('beforeCreated!');
    },
    created: function() {
        console.log('created!');
    },
    beforeMounted: function() {
        console.log('beforeMounted!');
    },
    mounted: function() {
        console.log('mounted!');
    },
    beforeUpdated: function() {
        console.log('beforeUpdated!');
    },
    updated: function() {
        console.log('updated!');
    },
    beforeDestroyed: function() {
        console.log('beforeDestroyed!');
    },
    destroyed: function() {
        console.log('destroyed!');
    },
    methods: {
        destroyEvent: function() {
            this.$destroy();
        }
    }
});
