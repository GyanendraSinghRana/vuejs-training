<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <form class="form-horizontal">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4>Info Form</h4>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <label class="control-label col-md-3" for="firstname">First Name: </label>
                                <div class="col-md-9">
                                    <input
                                        type="text"
                                        id="firstname"
                                        class="form-control"
                                        v-model="formData.firstName"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="lastname">Last Name: </label>
                                <div class="col-md-9">
                                    <input
                                        type="text"
                                        id="lastname"
                                        class="form-control"
                                        v-model="formData.lastName"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="email">Mail: </label>
                                <div class="col-md-9">
                                    <input
                                        type="email"
                                        id="email"
                                        class="form-control"
                                        v-model="formData.email"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="password">Password: </label>
                                <div class="col-md-9">
                                    <input
                                        type="password"
                                        id="password"
                                        class="form-control"
                                        v-model.lazy="formData.password"
                                    >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="storeDate">Store Data?</label>
                                <div class="col-md-9">
                                    <label class="radio-inline" for="yes">
                                        <input
                                            type="radio"
                                            name="yes"
                                            id="yes"
                                            value="yes"
                                            v-model="formData.store"
                                        >
                                        Yes
                                    </label>
                                    <label class="radio-inline" for="no">
                                        <input
                                            type="radio"
                                            name="no"
                                            id="no"
                                            value="no"
                                            v-model="formData.store"
                                        >
                                        No
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">        
                                <div class="col-md-offset-3 col-md-9">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        @click.prevent="$emit('submit', formData)"
                                    >
                                    Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['submit'],
        data() {
            return {
                formData: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    store: "no"
                }
            };
        }
    };
</script>
