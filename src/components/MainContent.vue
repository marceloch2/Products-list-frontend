<template lang="html">
    <main id="main-wrapper" class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5">
        <h1>Products</h1>
        <product-list />
    </main>
</template>

<script>

import ProductList from '@/components/ProductList';

export default {
    components : {
        ProductList
    }
}
</script>

<style scoped lang="scss">
    #main-wrapper {
        h1 {
            margin-top: 30px;
        }
    }
</style>
