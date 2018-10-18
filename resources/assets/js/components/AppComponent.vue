<template>
    <router-view></router-view>
</template>

<script>
    import store from '../store'
    export default {
        created() {

            if(localStorage.token) {
                axios.post('/api/auth/me', {
                        headers: {Authorization: 'Bearer ' + localStorage.token}
                    },
                ).then(response => {
                    store.commit('loginUser')
                }).catch(error => {

                    if (error.response.status === 401 || error.response.status === 403) {
                        store.commit('logoutUser')
                        localStorage.setItem('token', '')
                        this.$router.push({name: 'login'})
                    }

                });
            }

        }
    }
</script>
