<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>({{stock.volume}} Stocks)</small>
                    <div class="pull-right">
                        ${{stock.value}}
                    </div>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        v-bind:class="[error ? 'danger' : '', 'form-control']"
                        placeholder="Quantity"
                        v-model="vol"
                    >
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-success"
                        @click.prevent="buy"
                        :disabled="!vol"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    import { mapMutations } from "vuex";

    export default {
        data() {
            return {
                vol: null,
                error: false
            }
        },  
        props: {
            stock: Object
        },
        methods: {
            ...mapMutations([
                'buyStock',
                'toggleLoader'
            ]),
            buy: function() {
                const vol = parseInt(this.vol);

                if ( vol > 0 && vol <= this.stock.volume ) {
                    this.buyStock({id: this.stock.id, vol});
                    this.error = false;
                    this.vol = '';
                } else {
                    this.error = true;
                }
            }
        }
    };
</script>