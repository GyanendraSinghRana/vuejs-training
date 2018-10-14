<template>
    <div>
        <div class="alert alert-info" v-if="bought.length <= 0">
            Lets start Trading !
        </div>
        <div
            v-for="(stock, index) in bought"
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
                'stocks',
            ]),
            bought: function() {
                const { boughtStocks, totalStocks } = this.stocks;
                return (boughtStocks.filter((s) => s.volume > 0).map((bs) => {
                            const s = totalStocks.find((ts) => ts.id === bs.id);
                            return {
                                ...s,
                                volume: bs.volume
                            };
                        }))
                ;
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>