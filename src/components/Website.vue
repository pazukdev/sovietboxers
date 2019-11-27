<template>
    <div>
        <Header></Header>

        <div class="backgrounded-area" id="motorcycle-gallery">
            <img title="К-750, KMZ 1958-1964"
                 alt="kmz k-750 sidecar boxer motorcycle"
                 src='../assets/model_k750_small.png'/>
            <img title="K-750B, KMZ 1958-1964"
                 alt="kmz k-750v k-750B sidecar boxer motorcycle"
                 src='../assets/model_k750v_small.png'/>
            <img title="M-63 Урал-2, IMZ 1963-1980"
                 alt="imz m-63 ural-2 sidecar boxer motorcycle"
                 src='../assets/model_m63_small.png'/>
            <img title="K-650, KMZ 1968-1971"
                 alt="kmz k-650 sidecar boxer motorcycle"
                 src='../assets/model_k650_small.png'/>
            <img title="M-66 Урал-3, IMZ 1971-1975"
                 alt="imz m-66 ural-3 sidecar boxer motorcycle"
                 src='../assets/model_m66_small.png'/>
            <img title="МВ-750М, KMZ 1973-1976"
                 alt="kmz mv-750m MB-750M sidecar boxer motorcycle"
                 src='../assets/model_mv750m_small.png'/>
            <img title="Днепр МТ-10, KMZ 1974-1976"
                 alt="kmz dnepr mt-10 sidecar boxer motorcycle"
                 src='../assets/model_mt10_small.png'/>
            <img title="Днепр-11, KMZ 1985-2008"
                 alt="kmz dnepr-11 sidecar boxer motorcycle"
                 src='../assets/model_mt11_small.png'/>
        </div>

        <div class="backgrounded-area">
            <p>
                Soviet Boxers' Seals & Bearings - it is a little phone application about old Soviet boxers, where you
                can find information about seals, bearings and some other standard parts using in different models of
                old Soviet boxers: catalogue part numbers, dimensions and information about existing alternative parts
                for replacement
            </p>
        </div>

        <div class="backgrounded-area">
            <p class="centred-topic">App versions</p>
            <p class="topic">December 12 2017</p>
            <p class="colored-text">1.01</p>
            <p>Fixes</p>
            <p>
                1. Year of end of manufacturing of M-72 model changed to 1957; of M-72M model changed to 1960<br>
                2. Bug with 1 journal bearing in all SV and most of Ural's model's engines was fixed<br>
                3. Bug with MT-10-36 type engine opening error was fixed<br>
                4. Feature, when  picture  become big and fill the screen when you change orientation of phone to
                horizontal, was deleted. At first, all the same it doesn't worked in most of Android versions. And
                secondly, the whole page will rotate instead of it, as it usually happens in most Android
                applications<br>
                5. Fixing of bad visualisation of screen content in phones and tablets with large high resolution
                screens is started. Indents of texts and pictures from border of screen on phones and tablets with
                large screens should stop to be so big, and should to become more or less the same for most of devices.
                In this update to that new content visualisation form are already  changed main screens of motorcycles
                models and pages of units (engines, gearboxes, final drives, frames & wheels)
            </p>
            <p>Updates</p>
            <p>
                1. Paragraph with specifying of fixes and changes of last update  was added to "About application"
                page<br>
                2. List of what is planning to add to app in future was updated
            </p>
            <p class="topic">December 7 2017</p>
            <p class="colored-text">1.0</p>
            <p>App published on Google Play</p>
        </div>

        <WebsiteFooter></WebsiteFooter>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import WebsiteFooter from "@/components/WebsiteFooter";

    export default {
        name: "Website",

        components: {
            Header,
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