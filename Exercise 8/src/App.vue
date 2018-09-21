<template>
    <div style="padding: 50px;">
        <signup-form v-if="!submitted" @submit="submit" />
        <data-summary v-else v-bind:data="data"/>
    </div>
</template>

<script>
    import SignupForm from "./components/form.vue";
    import submittedData from "./components/data.vue";

    export default {
        data() {
            return {
                data: '',
                submitted: false
            }
        },
        components: {
            signupForm: SignupForm,
            dataSummary: submittedData
        },
        methods: {
            submit(data) {
                this.data = data;
                this.submitted = true
            }
        }
    };
</script>
