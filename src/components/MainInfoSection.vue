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
            <details>
                <summary style="text-align: left">{{$t("details")}}</summary>
                <AppVersions :descriptions="getAppDescription()"/>
            </details>
            <br>
            <details>
                <summary style="text-align: left">{{$t("lastVersionDescription")}}</summary>
                <AppVersions :descriptions="getAppV20Description()"/>
                <br>
                <br>
                <details>
                    <summary>{{$t('appVersions')}}</summary>
                    <AppVersions :descriptions="getOldAppVersionsDescriptions()"/>
                    <p style="text-align: center">{{"***"}}</p>
                </details>
            </details>
        </div>
        <br>
        <NavigateToAppSection/>
        <br>
        <br>
        <DonationSection/>
        <br><br>
        <div style="text-align: right">
            <router-link :to="{name: 'privacy_policy', params: {lang: $route.params.lang}}"
                         style="text-align: right">
                {{$t("privacyPolicy")}}
            </router-link>
        </div>
    </div>
</template>

<script>
import NavigateToAppSection from "@/components/NavigateToAppSection";
import AppVersions from "@/components/AppVersions";
import DonationSection from "@/components/DonationSection";

export default {
        name: "MainInfoSection",

        components: {DonationSection, AppVersions, NavigateToAppSection},

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
</style>