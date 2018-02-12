import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from './components/HomeComponent'
import ExampleComponent from './components/ExampleComponent'
import LoginComponent from './components/LoginComponent'

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
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        }
    ]
});
