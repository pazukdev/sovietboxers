<template>
    <div id="website-main-div">
        <Header/>
        <MotorcycleGallery/>

        <div class="backgrounded-area">
            <p id="app-main-description">
                <span class="colored-text">{{$t('appName')}}</span>
                {{" - "}}
                {{$t("appMainDescription")}}
            </p>
            <NavigateToAppSection/>
        </div>

        <AppVersions/>

        <div class="backgrounded-area" style="text-align: center">
            <p>{{$t("youCanHelpTheApp")}}</p>
            <br>
            <iframe id="yandex-donate-form" src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%94%D0%BE%D0%BD%D0%B0%D1%82%20%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D1%83%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&targets-hint=&default-sum=&button-text=14&payment-type-choice=on&comment=on&hint=&successURL=https%3A%2F%2Fpazukdev.github.io%2Fsovietboxers%2F%23%2Fru&quickpay=shop&account=4100111880881391" width="423" height="301" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import MotorcycleGallery from "@/components/MotorcycleGallery";
    import NavigateToAppSection from "@/components/NavigateToAppSection";
    import Footer from "@/components/Footer";
    import AppVersions from "@/components/AppVersions";

    export default {
        name: "Home",

        components: {
            AppVersions,
            Header,
            MotorcycleGallery,
            NavigateToAppSection,
            Footer
        }
    }
</script>

<style>
    .backgrounded-area {
        background: #212121;
        margin: 20px;
        padding: 20px;
    }

    .colored-text {
        color: #617d89;
    }

    .centred-topic {
        text-align: center;
    }

    .topic, .centred-topic {
        font-weight: bold;
    }

    #motorcycle-gallery {
        text-align: center;
    }

    @media only screen and (max-width: 640px) {
        #yandex-donate-form {
            width: 100%;
        }
    }
</style>