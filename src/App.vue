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

<style lang="scss">

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

.spinner {
    width: 40px;
    height: 40px;
    background-color: #333;

    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
    0% { -webkit-transform: perspective(120px) }
    50% { -webkit-transform: perspective(120px) rotateY(180deg) }
    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    } 50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    } 100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}


</style>
