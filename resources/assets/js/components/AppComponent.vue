<template>
    <div class="container">
        <h1>Laravel and Vue JS JWT</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'example' }">Example</router-link>
        </p>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
