<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p> 1. Pass some text to the 3 components but not using props </p>
                <app-orange>{{orangeColor}}</app-orange>
                <app-black>
                    <b slot="property">Color</b>
                    <span slot="value">Black</span>
                </app-black>
                <app-red>RED</app-red>
                <p> 2. Dynamically switching the components using buttons </p>
                <br>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'appOrange'"
                >
                    Load Orange Template
                </button>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'appBlack'"
                >
                    Load Black Template
                </button>
                <button
                    class="btn btn-default"
                    @click="displayComponent = 'appRed'"
                >
                    Load Red Template
                </button>
                <hr>
                <component :is="displayComponent"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Orange from './components/Orange.vue';
    import Black from './components/Black.vue';
    import Red from './components/Red.vue';

    export default {
         data: function() {
            return {
                orangeColor: "Orange",
                displayComponent: ""
            };
        },
        components: {
            appOrange: Orange,
            appBlack: Black,
            appRed: Red
        }
    }
</script>

<style>
</style>
