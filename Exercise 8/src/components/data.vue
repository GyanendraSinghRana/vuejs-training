<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6  col-md-offset-3">
                <form class="form-horizontal">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4>Submitted Data</h4>
                        </div>
                        <div class="panel-body">
                            <FullName>
                                <div class="form-group" slot="fullname">
                                    <label class="control-label col-md-3" for="firstname">Full Name: </label>
                                    <div class="control-label col-md-9">
                                        {{data.firstName}} {{data.lastName}}
                                    </div>
                                </div>
                            </FullName>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="email">Mail: </label>
                                <div class="control-label col-md-9">
                                    {{data.email}}
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="password">Password: </label>
                                <div class="control-label col-md-9">
                                {{data.password}}
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="storeDate">Store Data: </label>
                                <div class="control-label col-md-9">
                                    {{data.store}}
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
    import FullName from './fullName';

    export default {
        props: ['data'],
        components: {
            FullName
        }
    };
</script>

<style>
    div.control-label {
        text-align: left !important;
    }
</style>