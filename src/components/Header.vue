<template>
    <div>
        <div class="backgrounded-area">
            v 2.0
        </div>

        <div class="backgrounded-area" id="header-main-div">
            <img src="../assets/app_logo.png" alt="app logo"/>
            <div>
                <p id="app-title-description">
                    Seals, bearings and some other parts of soviet boxers
                </p>
                <p id="app-title-description-details">
                    - part numbers<br>
                    - dimensions<br>
                    - replacers<br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #header-main-div {
        overflow: auto;
    }

    img {
        float: left;
        height: 200px;
    }

    #app-title-description {
        font-size: xx-large;
        text-align: center;
        color: #617d89;
    }

    #app-title-description-details {
        font-size: x-large;
        text-align: left;
        padding-top: 16px;
        margin-left: 74%;
    }

    @media only screen and (max-width: 640px) {
        #header-main-div {
            text-align: center;
        }

        img {
            float: initial;
        }

        #app-title-description {
            font-size: large;
        }

        #app-title-description-details {
            font-size: initial;
            text-align: left;
            padding-top: 6px;
            margin-left: 60%;
        }
    }
</style>