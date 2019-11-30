<template>
    <div>
        <div class="backgrounded-area" id="language-panel">
            <table>
                <tbody>
                <tr>
                    <td style="text-align: left">2.0</td>
                    <td style="text-align: right">
                        <LanguageSelect id="language-select"></LanguageSelect>
                    </td>
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
                <ul id="app-title-description-details">
                    <li>{{$t("partNumbers")}}</li>
                    <li>{{$t("dimensions")}}</li>
                    <li>{{$t("replacers")}}</li>
                </ul>
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
    #language-panel {
        background: #617D89;
    }

    #header-main-div {
        overflow: auto;
    }

    td {
        color: #101010;
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
            margin-left: 50%;
        }
    }
</style>