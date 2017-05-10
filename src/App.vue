<template>
    <div id="app">
        <nav-head></nav-head>
        <div class="container-fluid">
            <div class="row" v-if="$router.currentRoute.name != 'Show'">
                <side-bar></side-bar>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import NavHead from './components/NavHead';
import SideBar from './components/SideBar';

export default {
    name: 'app',
    components : {
        NavHead,
        SideBar
    }
}

</script>

<style scoped lang="scss">

body { padding-top: 50px; }

h1 {
    margin-bottom: 20px;
    padding-bottom: 9px;
    border-bottom: 1px solid #eee;
}

/*
* Sidebar
*/
.sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    border-right: 1px solid #eee;
    padding-left: 0;
    padding-right: 0;

    .nav {
        margin-bottom: 20px;
    }

    .nav-item {
        width: 100%;
    }

    .nav-item + .nav-item {
        margin-left: 0;
    }

    .nav-link {
        border-radius: 0;
    }
}

</style>
