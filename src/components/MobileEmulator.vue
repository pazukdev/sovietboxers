<template>
    <div class="backgrounded-area">
        <div class="smartphone">
            <div class="content">
                <a class="start-app"
                   title="Start the app"
                   target="iframe_a"
                   @click="hideStartAppLink()"
                   v-if="showStartAppLink"
                   href="https://vue-page-test-pazukdev.herokuapp.com/">
                    Start the app!
                </a>
                <iframe name="iframe_a" v-if="!showStartAppLink"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileEmulator",

        data() {
            return {
                showStartAppLink: true
            }
        },

        methods: {
            hideStartAppLink() {
                this.showStartAppLink = false;
            }
        }
    }
</script>

<style scoped>
    iframe {
        border: none;
        width: 100%;
        height: 100%;
    }

    /* The device with borders */
    .smartphone {
        position: relative;
        /*width: 360px;*/
        /*height: 640px;*/
        width: 44vh;
        height: 70vh;
        margin: auto;
        padding: 90px 10px;
        border: 5px #2f2f2f solid;
        border-radius: 60px;
        background-color: #050505;
    }

    .smartphone:before, .smartphone:after {
        content: '';
        position: absolute;
        z-index: 2;
    }

    .smartphone:before {
        width: 20%;
        height: 10px;
        top: 40px;
        left: 40%;
        border-radius: 10px;
        background-color: #2f2f2f;
    }

    .smartphone:after {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 5px #2f2f2f;
        left: calc(50% - 25px);
        bottom: 20px;
    }

     /*The screen (or content) of the device */
    .smartphone .content {
        /*width: 360px;*/
        /*height: 640px;*/
        width: 44vh;
        height: 70vh;
        background: #212121;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>