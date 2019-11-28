<template>
    <div class="backgrounded-area">
        <div class="iphone-x">
            <div class="content">
                <a class="start-app"
                   title="Start the app"
                   target="iframe_a"
                   @click="hideStartAppLink()"
                   v-if="showStartAppLink"
                   href="https://vue-page-test-pazukdev.herokuapp.com/">
                    Start the app!
                </a>
                <div class="abc"></div>
                <i>Speaker</i>
                <b>Camera</b>
                <iframe name="iframe_a" v-if="!showStartAppLink"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IPhoneEmulator",

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
        border-radius: 40px;
    }

    .iphone-x {
        position: relative;
        margin-top: 3vh;
        width: 400px;
        height: 840px;
        border-radius: 40px;
        box-shadow: 0 0 0 11px #101010, 0 0 0 13px #212121, 0 0 0 20px #101010;
    }

    .abc:before, .abc:after {
         content: '';
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
    }

    .abc:before {
        top: 0;
        width: 56%;
        height: 30px;
        background-color: #101010;
        border-radius: 0 0 40px 40px;
    }

    i, b {
        position: absolute;
        display: block;
        color: transparent;
    }

    i {
        top: 0;
        left: 50%;
        transform: translate(-50%, 6px);
        height: 8px;
        width: 15%;
        background-color: #101010;
        border-radius: 8px;
        box-shadow: inset 0 -3px 3px 0 rgba(256, 256, 256, 0.2);
    }


    b {
        left: 60px;
        top: 0;
        transform: translate(180px, 4px);
        width: 12px;
        height: 12px;
        background-color: #101010;
        border-radius: 12px;
        box-shadow: inset 0 -3px 2px 0 rgba(256, 256, 256, 0.2);
    }

    b:after {
         content: '';
         position: absolute;
         background-color: #2d4d76;
         width: 6px;
         height: 6px;
         top: 2px;
         left: 2px;
         top: 3px;
         left: 3px;
         display: block;
         border-radius: 4px;
         box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.5);

    }

    .content {
        margin-top: 3vh;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: #212121;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>