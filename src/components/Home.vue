<template>
    <div id="website-main-div">
        <Header/>
        <MotorcycleGallery/>
        <MainInfoSection/>
        <DonationSection/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import MotorcycleGallery from "@/components/MotorcycleGallery";
    import Footer from "@/components/Footer";
    import DonationSection from "@/components/DonationSection";
    import MainInfoSection from "@/components/MainInfoSection";

    export default {
        name: "Home",

        components: {
            MainInfoSection,
            DonationSection,
            Header,
            MotorcycleGallery,
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

    .default-padding {
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

    @media only screen and (max-width: 640px) {
        #yandex-donate-form {
            width: 100%;
        }
    }
</style>