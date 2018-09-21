<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                Alert: <input v-custom-on:blur="alert">
                <br> <br>
                Uppercase: <input v-custom-on:blur="caps">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            "custom-on": {
                bind(el, binding) {
                    el.addEventListener(binding.arg, function(){ binding.value(el)});
                }
            }
        },
        methods: {
            alert(el) {
                alert(el.value);
            },
            caps(el) {
                el.value = el.value.toUpperCase();
            }
        }
    }
</script>
