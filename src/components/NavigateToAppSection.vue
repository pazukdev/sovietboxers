<template>
    <div id="navigate-to-app">
        <table>
            <tbody>
            <tr v-if="false">
                <td>
                    {{$t("forAndroidDevices")}}<br>
                    <a id="google_link"
                       target="_blank"
                       :title="$t('googlePlayLinkTitle')"
                       href='https://play.google.com/store/apps/details?id=by.pazukdev.sovietboxersbearings&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img id="google-play-img" alt='Get it on Google Play'
                             src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    {{$t("forIOSDevices")}}<br>
                    <a target="_blank" href="https://www.old-vehicles.com">
                        {{$t("directLinkToApp")}}
                    </a>
                </td>
            </tr>
            <tr id="pc-only-tr">
                <td>
                    {{$t("forPC")}}<br>
                    <a href="#smartphone-view"
                       class="button2"
                       :title="$t('clickToOpenTheApp')">
                        <img style="height: 200px" alt="smartphone button" src='../assets/device-iphone.png'/>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>

        <a href="#" class="overlay" id="smartphone-view"></a>
        <div class="popup">
            <a class="close" :title="$t('close')" href="#" @click="closeSmartphoneModal()">X</a>
<!--            <MobileEmulator></MobileEmulator>-->
            <IPhoneEmulator></IPhoneEmulator>
<!--            <img src="../assets/model_m66.png">-->
        </div>
    </div>
</template>

<script>
    // import MobileEmulator from "@/components/MobileEmulator";
    import IPhoneEmulator from "@/components/IPhoneEmulator";

    export default {
        name: "NavigateToAppSection",

        components: {
            // MobileEmulator,
            IPhoneEmulator
        },

        methods: {
            closeSmartphoneModal() {
                this.$router.push({ name: `home` });
            }
        }
    }
</script>

<style scoped>
    table {
        width: initial;
        margin: 20px auto auto;
    }

    table, tr {
        border-bottom: 1px solid;
        border-top: 1px solid;
        border-collapse: collapse;
    }

    td {
        padding: 20px;
    }

    td a {
        display: inline-block;
        margin-top: 20px;
    }

    .backgrounded-area {
        background: initial;
        margin: initial;
        padding: initial;
    }

    /* The Modal (background) */
    .overlay {
        visibility: hidden;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        /*background: black;*/
        display: block;
    }

    .overlay:target {
        visibility: visible;
    }

    .popup {
        position: fixed;
        top: 2%;
        left: 35%;
        z-index: 100;
        transform: translate(25%, -500%); /*hide modal: (middle, outside on the top)*/
        transition: transform 0.6s ease-out;
    }

    .overlay:target + .popup {
        transform: translate(0, 0);
    }

    .close {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        left: 100%;
        position: absolute;
        padding: 0;
        text-align: end;
        text-decoration: none;
        font-weight: bold;
        transition: all ease .8s;
    }

    .close:hover {
        color: #101010;
    }

    #google-play-img {
        width: 140px;
    }

    @media only screen and (max-width: 640px) {
        #pc-only-tr {
            display: none;
        }
    }
</style>