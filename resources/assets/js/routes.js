import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from './components/HomeComponent'
import DashboardComponent from './components/DashboardComponent'
import LoginComponent from './components/LoginComponent'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        }
    ]
});
