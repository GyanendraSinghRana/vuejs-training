<template>
    <div v-bind:class="['modal', 'fade', showLoader ? 'show' : '']" id="myModal" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState([
            'showLoader',
        ])
    };
</script>

<style>
    .show.modal {
        display: block;
        opacity: 1;
        background: #00000050;
    }
    .text-center {
        padding-top: 50px;
    }
    .show.modal .modal-dialog {
        margin-top: 20%;
    }
    .modal-content {
        background: transparent;
        border: none;
        box-shadow: none;
    }
    .modal-body {
        position: relative;
        padding: 50px;
    }
    .loader {
        margin: auto;
        border: 5px solid #0a000000;
        border-top: 5px solid #00000050;
        border-right: 5px solid #00000050;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
