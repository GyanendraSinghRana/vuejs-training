<template>
    <div>
        <loader />
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/portfolio">Portfolio</router-link></li>
                        <li><router-link to="/stocks">Stocks</router-link></li>
                    </ul>
                    <strong class="navbar-text navbar-right">Funds: ${{stocks.funds}}</strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click.prevent="updateStocks">End Day</a></li>
                        <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                            <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Save & Load <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click.prevent="save">Save Data</a></li>
                                <li><a href="#" @click.prevent="fetch">Load Data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import Loader from './Loader.vue';
    import { mapMutations, mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {
                isDropdownOpen: false
            };
        },
        components: {
            loader: Loader
        },
        computed: mapState([
            'stocks',
        ]),
         methods: {
            ...mapMutations([
                'updateStocks',
                'load'
            ]),
            ...mapActions([
                'save',
                'fetch'
            ])
        }
    };
</script>