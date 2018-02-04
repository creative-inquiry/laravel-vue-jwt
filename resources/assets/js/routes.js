import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Vue.component('home-component', require('./components/HomeComponent.vue'))
        },
        {
            path: '/example',
            name: 'example',
            component: Vue.component('example-component', require('./components/ExampleComponent.vue'))
        }
    ]
});
