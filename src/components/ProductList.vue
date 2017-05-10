<template>
    <div class="product-list">
        <ul>
            <li v-for="page in this.pagination">
                <a href="javascript:void(0)" @click="setPagination(page == 1 ? 0 : page * limit)">
                    {{page}}
                </a>
            </li>
        </ul>

        <div class="row">
            <div class="col-md-4 col-sm-6" v-for="(product, key) in products.data">
                <router-link :to="{ name: 'Show', params: { id: product._id }}">
                    <div class="card">
                        <div class="card-block">
                            <h4 class="card-title">{{ product.product }} - {{ key }}</h4>
                            <p class="card-text">{{ product.price | currency }}</p>
                            <p class="card-text">{{ product.brand }}</p>
                            <p class="card-text">{{ product.color }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <ul>
            <li v-for="page in this.pagination">
                <a href="javascript:void(0)" @click="setPagination(page == 1 ? 0 : page * limit)">
                    {{page}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import Store from '@/store/index.js';
import Axios from 'axios';

export default {
    name: 'productList',
    data () {
        return {
            limit: 10
        }
    },

    mounted () {},

    computed : {
        products () {
            return Store.getters.products;
        },

        pagination () {
            let pages = parseInt(Math.ceil(this.products.total / this.limit));

            if (!isNaN(pages) && ~pages) {
                return pages;
            }
        }
    },

    mounted () {
        Store.dispatch('getProducts');
    },

    filters: {
        currency (val) {
            return "€" + val;
        }
    },

    methods : {
        setPagination (limit) {
            let total = this.products.total < limit ? this.limit : limit;
            Store.dispatch('setLimit', total);
            Store.dispatch('getProducts');
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    margin-bottom: 30px;
}

ul {
    display: flex;
    justify-content:
    flex-start; margin: 0;
    padding: 0;
    border-bottom: solid 1px #eee;
    margin-bottom: 15px;

    li {
        float: left;
        list-style: none;
        margin-right: 10px;
        padding: 10px;
    }
}

</style>
