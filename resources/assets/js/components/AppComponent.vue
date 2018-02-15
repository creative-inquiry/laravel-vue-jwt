<template>
    <div class="container">
        <h1>Laravel and Vue JS JWT Auth</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
            <router-link :to="{ name: 'login' }">Login</router-link> |
            <router-link :to="{ name: 'logout' }">Logout</router-link>
        </p>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
