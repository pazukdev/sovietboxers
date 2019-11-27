<template>
    <div class="backgrounded-area">
<!--        <p><a href="https://pazukdev.github.io/sovietboxers/" target="iframe_a">Try the app</a></p>-->
        <div class="smartphone">
            <div class="content">
                <iframe name="iframe_a" style="width:100%;border:none;height:100%"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FakeMobile"
    }
</script>

<style scoped>
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
        background: white;
    }

    @media only screen and (max-width: 1000px) {
        /*.smartphone {*/
        /*    position: relative;*/
        /*    width: 360px;*/
        /*    !*height: 70vh;*!*/
        /*    margin: auto;*/
        /*    border: 16px black solid;*/
        /*    border-top-width: 60px;*/
        /*    border-bottom-width: 60px;*/
        /*    border-radius: 36px;*/
        /*}*/
    }
</style>