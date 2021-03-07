<template>
    <div class="backgrounded-area">
        <span v-if="$route.params.lang === 'ru'">
            {{"#урал #днепр #м-72 #мв-750 #к-750 #к-650 #м-61 #м-62 #м-66 #м-67 #м-67-36"}}
        </span>
        <span v-else>
            {{"#ural #dnepr #m-72 #mv-750 #k-750 #k-650 #m-66 #cossack #neval"}}
        </span>
        <br><br>
        <p id="app-main-description">
            <span class="colored-text">{{$t('appName')}}</span>
            {{" - "}}
            {{$t("appMainDescription")}}
        </p>
        <br>
        <div>
<!--            <details>-->
<!--                <summary style="text-align: left">{{$t("details")}}</summary>-->
<!--                <AppVersions :descriptions="getAppDescription()"/>-->
<!--            </details>-->
            <br>
            <details>
                <summary style="text-align: left">{{$t("secondVersionName")}}</summary>
                <br>
                <p class="colored-text" style="text-align: center">
                    {{$t("secondVersionName")}}
                </p>
                <AppVersions :descriptions="getAppV20Description()"/>
                <br>
                <br>
<!--                <details>-->
<!--                    <summary>{{$t('appVersions')}}</summary>-->
<!--                    <AppVersions :descriptions="getOldAppVersionsDescriptions()"/>-->
<!--                    <p style="text-align: center">{{"***"}}</p>-->
<!--                </details>-->

                <div style="text-align: center">
                    <div id="project-closed">
                        <p style="color: #101010; font-size: large; font-weight: bold">
                            {{$t("projectClosed") + "."}}
                        </p>
                        <br>
                        {{$t("projectClosedExplanation")}}
                    </div>
                </div>
                <br>
                <br>
            </details>
        </div>
        <br>
        <br>

<!--        <PaidApp :amount-equal-to="$t('6 USD (5 EUR)')"-->
<!--                 :dog-link="'snuzn'"-->
<!--                 :bitcoin-link="'4vupy'"-->
<!--                 :pay-pal-id="'QMACP5QVGQ4RY'"-->
<!--                 :amount-r-u-r="450"-->
<!--                 :success-url-yandex="'https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F17Ee_9o-zHv60UwJgTK3Gz9JWFHc_OuHE%2Fview%3Fusp%3Dsharing'"/>-->
<!--        <NavigateToAppSection/>-->

        <details open>
            <summary style="text-align: left">{{$t("firstVersionName")}}</summary>
            <br>
            <p style="text-align: center" class="colored-text">{{$t("firstVersionName")}}</p>
            <br>
            <div>
                <div v-if="$route.params.lang === 'ru'">
                    <div style="text-align: center">
                        <p>Старая версия приложения снова доступна для скачивания!</p>
                        <br>
                        <br>
                        <img src="https://i.postimg.cc/6pjwLWRg/old-app-ru.png">
                        <br>
                        <br>
                    </div>
                    <div>
                        <ul>
                            <li>Старое приложение работает шутрее, чем 2-ая версия</li>
                            <li>100% оффлайновое</li>
                            <li>Без рекламы</li>
                            <li>Только для девайсов на Android</li>
                        </ul>
                    </div>

                </div>
                <div v-else>
                    <div style="text-align: center">
                        <br>
                        <p>Old app version now opened for download!</p>
                        <br/>
                        <br/>
                        <img src="https://i.postimg.cc/qMPzc7Gq/web-2-en.png">
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <ul>
                            <li>It's faster than version 2.0</li>
                            <li>100% offline</li>
                            <li>No ads</li>
                            <li>For Android devices only</li>
                        </ul>
                    </div>
                </div>
                <br/>
                <br/>
                <PaidApp :amount-equal-to="$t('5 USD (4 EUR)')"
                         :dog-link="'odytd'"
                         :bitcoin-link="'hajvs'"
                         :pay-pal-id="'BFUN69FHT3CAY'"
                         :amount-r-u-r="370"
                         :success-url-yandex="'https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1d2GLvO7p2DOzMUOAYmkoWhtO3SYcitHk%2Fview%3Fusp%3Dsharing'"/>
            </div>
        </details>

        <br>
        <div style="text-align: right">
            <router-link :to="{name: 'privacy_policy', params: {lang: $route.params.lang}}"
                         style="text-align: right">
                {{$t("privacyPolicy")}}
            </router-link>
        </div>
    </div>
</template>

<script>
// import NavigateToAppSection from "@/components/NavigateToAppSection";
import AppVersions from "@/components/AppVersions";
import PaidApp from "@/components/PaidApp";

export default {
        name: "MainInfoSection",

        components: {
            PaidApp,
            AppVersions,
            // NavigateToAppSection
        },

        methods: {
            getAppDescription() {
                return  [
                    {
                        updates: [
                            this.$t("bearingsAndSeals"),
                            this.$t("universalJoints"),
                            this.$t("oilFilters"),
                            this.$t("sparkPlugs"),
                            this.$t("pistonsAndPistonRings"),
                            this.$t("andSomeOtherParts")
                        ]
                    },
                    {
                        versionPublicationDate: this.$t('additionalInfo'),
                        updates: [
                            this.$t("whereToBuyInfo"),
                            this.$t("recommendedOilsAndFillingCapacities"),
                            this.$t("manualsPartsCatalogsDrawingsSchemes")
                        ]
                    }
                ]
            },

            getAppV20Description() {
                return  [
                    {
                        // versionPublicationDate: this.$t('June') + ' 2020',
                        version: "2.0",
                        updates: [
                            this.$t("v2_0Update0"),
                            this.$t("v2_0Update1") + " " + this.$t("inEnglishOnly"),
                            this.$t("v2_0Update2") + " " + this.$t("inEnglishOnly"),
                            this.$t("v2_0Update3"),
                            this.$t("v2_0Update4"),
                            this.$t("v2_0Update5"),
                            this.$t("v2_0Update6"),
                            this.$t("v2_0Update7"),
                            this.$t("v2_0Update8"),
                            this.$t("v2_0Update9")
                        ]
                    }
                ]
            },

            getOldAppVersionsDescriptions() {
                return  [
                    // {
                    //     versionPublicationDate: this.$t('february') + ' 2020',
                    //     version: "2.0",
                    //     updates: [
                    //         this.$t("v2_0Update0"),
                    //         this.$t("v2_0Update1"),
                    //         this.$t("v2_0Update2"),
                    //         this.$t("v2_0Update3")
                    //     ]
                    // },
                    {
                        versionPublicationDate: this.$t('december') + ' 12 2017',
                        version: "1.01",
                        updates: [this.$t("v1_01Fix1"), this.$t("v1_01Fix2")]
                    },
                    {
                        versionPublicationDate: this.$t('december') + ' 7 2017',
                        version: "1.0",
                        updates: [this.$t("v1_0")]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

#project-closed {
    color: #101010;
    background-color: orange;
    width: 400px;
    padding: 20px;
    border-radius: 8px;
}

</style>