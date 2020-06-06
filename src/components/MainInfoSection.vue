<template>
    <div class="backgrounded-area">
        <p id="app-main-description">
            <span class="colored-text">{{$t('appName')}}</span>
            {{" - "}}
            {{$t("appMainDescription")}}
        </p>
        <br>
        <AppVersions :descriptions="getAppDescription()"/>
        <br>
        <NavigateToAppSection/>
        <br>
        <br>
        <AppVersions :descriptions="getAppV20Description()"/>
        <br>
        <br>
        <details>
            <summary>{{$t('appVersions')}}</summary>
            <AppVersions :descriptions="getOldAppVersionsDescriptions()"/>
        </details>
    </div>
</template>

<script>
    import NavigateToAppSection from "@/components/NavigateToAppSection";
    import AppVersions from "@/components/AppVersions";

    export default {
        name: "MainInfoSection",

        components: {AppVersions, NavigateToAppSection},

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