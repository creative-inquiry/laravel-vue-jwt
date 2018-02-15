import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashboardComponent from './components/DashboardComponent'
import LoginComponent from './components/LoginComponent'
import LogoutComponent from './components/LogoutComponent'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: { name: 'login' }
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
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutComponent
        }
    ]
});
