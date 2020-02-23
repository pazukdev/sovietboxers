<template>
    <div>
        <div class="backgrounded-area" id="language-panel">
            <table>
                <tbody>
                <tr>
                    <td style="text-align: left" class="default-padding">2.0</td>
                    <td style="text-align: right" class="default-padding">
                        <LanguageSelect id="language-select"/>
                    </td>
                    <td style="width: 200px; border-left: solid #050505 1px">
                        <a href="https://info.flagcounter.com/OWa2">
                            <img id="flag-counter" alt="Flag Counter" border="0"
                                 src="https://s11.flagcounter.com/count/OWa2/bg_617D89/txt_050505/border_617D89/columns_2/maxflags_10/viewers_0/labels_1/pageviews_0/flags_0/percent_0/">
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="backgrounded-area" id="header-main-div">
            <img id="app-logo" src="../assets/old-vehicles_280x280.png" alt="app logo"/>
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
        padding: initial;
    }

    #header-main-div {
        overflow: auto;
    }

    td {
        color: #101010;
    }

    #app-logo {
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
        margin-left: 60%;
    }

    @media only screen and (max-width: 640px) {
        #header-main-div {
            text-align: center;
        }

        #language-select {
            /*display: inline-block;*/
        }

        #app-logo {
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

        #flag-counter {
            max-height: initial;
            max-width: initial;
        }
    }
</style>