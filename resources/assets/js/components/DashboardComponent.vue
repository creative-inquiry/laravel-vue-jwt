<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Laravel and Vue JS JWT Auth</h1>

            <p>
                <router-link :to="{ name: 'home' }">Home</router-link> |
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
                <router-link :to="{ name: 'login' }">Login</router-link> |
                <router-link :to="{ name: 'logout' }">Logout</router-link>
            </p>

            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                <div class="panel-body">
                    <p>This is the dashboard</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        beforeCreate() {
            if (!store.state.isLoggedIn) {
                this.$router.push({ name: 'login' })
            }
        }
    }
</script>
