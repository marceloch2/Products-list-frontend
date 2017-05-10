<template lang="html">
    <main id="show-wrapper" class="col-md-12">
        <h1>{{product.product}}</h1>
        <section class="row text-center placeholders">
            <div class="col-md-2">
                <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">{{ product.product }} </h4>
                        <!-- <p class="card-text">{{ product.price | currency }}</p> -->
                        <p class="card-text">{{ product.brand }}</p>
                        <!-- <p class="card-text">{{ product.color }}</p> -->
                    </div>
                </div>
                <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">{{ product.product }} </h4>
                        <!-- <p class="card-text">{{ product.price | currency }}</p> -->
                        <p class="card-text">afbeenlding</p>
                        <!-- <p class="card-text">{{ product.color }}</p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card main-card">
                    <div class="card-block">
                        <h4 class="card-title">{{ product.product }} </h4>
                        <p class="card-text">{{ product.brand }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-product-info">
                    <div class="card-block">
                        <h4 class="card-title">{{ product.brand }} </h4>
                        <div class="kleur">
                            <p>kleur</p>
                            <input type="checkbox">
                            <input type="checkbox">
                            <input type="checkbox" checked="true">
                            <p>{{product.color}}</p>
                        </div>
                        <p class="card-text price"><span>{{ product.price | currency }}</span> product in voorraad</p>
                        <p class="card-text">afbeenlding</p>

                        <button class="cb-button" type="button" name="button">IN WINKELWAGEN</button>
                        <input type="checkbox" name="cb-checkbox" id="cb-checkbox">
                        <label for="cb-checkbox">voeg toe aan verlanglijsje</label>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

import Store from '@/store/index.js';
import Axios from 'axios';

export default {
    data () {
        return {
            product: {}
        }
    },

    watch : {
        '$route.params.id' : function (newVal) {
            if (newVal) {
                this.product = this.getProductsById(newVal);
            }
        }
    },

    computed : {
        rootVm () {
            return this.$root;
        }
    },

    mounted () {
        this.getProductsById(this.$route.params.id);
    },

    filters: {
        currency (val) {
            return "€" + val;
        }
    },

    methods: {
        getProductsById (id) {
            var _self = this;
            Axios.get('http://localhost:3030/products/' + id)
            .then(function (response) {
                _self.product = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
<style lang="scss">
    #show-wrapper {
        margin-top: 60px;
    }

    .main-card {
        min-height: 500px;
    }

    .card-product-info {
        text-align: left;
        .kleur {}
        .price {
            span {
                font-size: 2rem;
            }
        }

        .cb-button {
            border: none;
            height: 50px;
            width: 40%;
            border-radius: 5px;
            cursor: pointer;
        }
    }
</style>
