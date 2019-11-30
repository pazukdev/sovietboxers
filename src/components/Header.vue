<template>
    <div>
        <div class="backgrounded-area">
            <table>
                <tbody>
                <tr>
                    <td style="text-align: left">v 2.0</td>
                    <td style="text-align: right"><LanguageSelect id="language-select"></LanguageSelect></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="backgrounded-area" id="header-main-div">
            <img src="../assets/app_logo.png" alt="app logo"/>
            <div>
                <p id="app-title-description">
                    {{$t("appTitleDescription")}}
                </p>
                <p id="app-title-description-details">
                    {{"- " + $t("partNumbers")}}<br>
                    {{"- " + $t("dimensions")}}<br>
                    {{"- " + $t("replacers")}}<br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import LanguageSelect from "@/components/LanguageSelect";

    export default {
        name: "Header",

        components: {
            LanguageSelect
        }
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

        #language-select {
            display: inline-block;
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