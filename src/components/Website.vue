<template>
    <div id="website-main-div">
        <Header></Header>
        <MotorcycleGallery></MotorcycleGallery>

        <div class="backgrounded-area">
            <p id="app-main-description">
                <span class="colored-text">Soviet Boxers' Seals & Bearings</span>
                {{" - "}}
                {{$t("appMainDescription")}}
            </p>
            <NavigateToAppSection></NavigateToAppSection>
        </div>
        <AppVersions></AppVersions>
        <WebsiteFooter></WebsiteFooter>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import MotorcycleGallery from "@/components/MotorcycleGallery";
    import NavigateToAppSection from "@/components/NavigateToAppSection";
    import WebsiteFooter from "@/components/WebsiteFooter";
    import AppVersions from "@/components/AppVersions";

    export default {
        name: "Website",

        components: {
            AppVersions,
            Header,
            MotorcycleGallery,
            NavigateToAppSection,
            WebsiteFooter
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
</style>