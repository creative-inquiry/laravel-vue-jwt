import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from './components/HomeComponent'
import ExampleComponent from './components/ExampleComponent'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/example',
            name: 'example',
            component: ExampleComponent
        }
    ]
});
