<template>
    <div id="navigate-to-app">
        <p>
            <a href="#win9"
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

        <a href="#x" class="overlay" id="win9"></a>
        <div class="popup_i">
            <FakeMobile></FakeMobile>
            <a class="close" title="Close" href="javascript:history.back()"></a>
            <a class="start-app"
               title="Start the app"
               target="iframe_a"
               href="https://pazukdev.github.io/sovietboxers/">
                Start the app!
            </a>
        </div>
    </div>
</template>

<script>
    import FakeMobile from "@/components/FakeMobile";

    export default {
        name: "TryAppLink",
        components: {FakeMobile}
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

     /*активируем слой затемнения */
    /*.overlay:target {*/
    /*    visibility: visible;*/
    /*    opacity: 1;*/
    /*}*/

    .popup_i {
        top: 50%;
        left: 50%;
        position: fixed;
        transform: translate(-50%, -500%);
        transition: transform 0.6s ease-out;
    }

    .overlay:target+.popup_i {
        transform: translate(-50%, -50%);
    }

    .close {
        top: 10px;
        right: -40px;
        width: 20px;
        height: 20px;
        position: absolute;
        padding: 0;
        /*border: 2px solid #707070;*/
        border-radius: 15px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        transition: all ease .8s;
    }

    .close:before {
        content: "X";
    }

    .close:hover {
        color: #101010;
        background-color: #D88C00;
    }

    .start-app {
        top: 20px;
        right: 230px;
        /*width: 20px;*/
        /*height: 20px;*/
        position: absolute;
        padding: 0;
        /*border: 2px solid #707070;*/
        border-radius: 15px;
        text-align: center;
        font-weight: bold;
        transition: all ease .8s;
    }
</style>