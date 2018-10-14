<template>
    <div>
        <div
            v-for="(stock, index) in total"
            v-bind:key="index"
        >
            <app-stock v-bind:stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'stocks'
            ]),
            total: function() {
                return (this.stocks.totalStocks.filter((s) => s.volume > 0));
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>