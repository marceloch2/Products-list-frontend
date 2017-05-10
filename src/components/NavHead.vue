<template lang="html">
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <img class="logo" src="../assets/beate-uhse.png">
        <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Products list</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style media="scss">
    .logo {
        width: 150px;
    }
</style>
