<template>
    <div class="backgrounded-area">
        <div class="smartphone">
            <div class="content">
                <a class="start-app"
                   title="Start the app"
                   target="iframe_a"
                   @click="hideStartAppLink()"
                   v-if="showStartAppLink"
                   href="https://pazukdev.github.io/sovietboxers/">
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
        height: 80vh;
        margin: auto;
        border: 16px black solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        border-radius: 36px;
    }

    /* The horizontal line on the top of the device */
    .smartphone:before {
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 10px;
    }

    /* The circle on the bottom of the device */
    .smartphone:after {
        content: '';
        display: block;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 50%;
        bottom: -65px;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 50%;
    }

     /*The screen (or content) of the device */
    .smartphone .content {
        /*width: 360px;*/
        /*height: 640px;*/
        width: 44vh;
        height: 80vh;
        background: #212121;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>