<template>
    <div>
        <p><b>Name: </b> {{ details.Name }} </p>
        <p><b>Technology Used: </b> {{ details.Technology }} </p>
    </div>
</template>

<script>
    export default {
        props: {
            details: Object
        }
    };
</script>
