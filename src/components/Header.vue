<template>
    <div>
        <div class="backgrounded-area" id="language-panel">
            <table>
                <tbody>
                <tr>
                    <td id="flag-counter-wide"
                        style="text-align: left">
                        <a href="https://info.flagcounter.com/OWa2">
                            <img class="flag-counter" alt="Flag Counter"
                                 src="https://s11.flagcounter.com/count/OWa2/bg_617D89/txt_050505/border_617D89/columns_3/maxflags_9/viewers_0/labels_1/pageviews_0/flags_0/percent_0/">
                        </a>
                    </td>
                    <td id="flag-counter-high"
                        style="text-align: left">
                        <a href="https://info.flagcounter.com/OWa2">
                            <img class="flag-counter" alt="Flag Counter"
                                 src="https://s11.flagcounter.com/count/OWa2/bg_617D89/txt_050505/border_617D89/columns_2/maxflags_6/viewers_0/labels_1/pageviews_0/flags_0/percent_0/">
                        </a>
                    </td>
                    <td class="default-padding" style="text-align: right">
                        <LanguageSelect id="language-select"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="backgrounded-area" id="header-main-div">
            <img id="app-logo" src="../assets/soviet_boxers_280x280.png" alt="app logo"/>
            <div>
                <p id="app-title-description">
                    {{$t("appTitleDescription")}}
                </p>
                <ul id="app-title-description-details">
                    <li>{{$t("bikesTitleList")}}</li>
                    <li>{{$t("partsTitleList")}}</li>
                    <li>{{$t("featuresTitleList")}}</li>
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
        font-size: larger;
        text-align: left;
        padding-top: 20px;
        margin-left: 54%;
    }

    #flag-counter-high {
        display: none;
    }

    @media only screen and (max-width: 640px) {
        #header-main-div {
            text-align: center;
        }

        #language-select {
            /*display: inline-block;*/
        }

        #flag-counter-wide {
            display: none;
        }

        #flag-counter-high {
            display: initial;
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
            padding-top: 10px;
            margin: 0;
        }

        .flag-counter {
            max-height: initial;
            max-width: initial;
        }
    }
</style>