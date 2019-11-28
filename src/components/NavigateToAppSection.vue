<template>
    <div id="navigate-to-app">
        <p>
            <a href="#smartphone"
               class="button2"
               title="Click to try the app online">
                <img alt="smartphone button" src='../assets/smartphone_button.png'/>
            </a>
        </p>

        <p>
            <a id="google_link"
               target="_blank"
               title="App on GooglePlay"
               href='https://play.google.com/store/apps/details?id=by.pazukdev.sovietboxersbearings&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img width="140"
                     alt='Get it on Google Play'
                     src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
            </a>
        </p>

        <a href="#" class="overlay" id="smartphone"></a>
        <div class="popup">
            <a class="close" title="Close" href="javascript:history.back()">X</a>
            <MobileEmulator></MobileEmulator>
<!--            <img src="../assets/model_m66.png">-->
        </div>
    </div>
</template>

<script>
    import MobileEmulator from "@/components/MobileEmulator";

    export default {
        name: "NavigateToAppSection",

        components: {
            MobileEmulator
        }
    }
</script>

<style scoped>
    #navigate-to-app p {
        text-align: center;
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
        background-color: rgba(0, 0, 0, 0.8);
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
</style>