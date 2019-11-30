import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
            appTitleDescription: "Seals, bearings and other parts of Soviet boxers",
            partNumbers: "part numbers",
            dimensions: "dimensions",
            replacers: "replacers",
            appMainDescription: "is an app where you can find information about " +
                "seals, bearings and some other standard parts " +
                "of different models of Soviet boxers " +
                "and some other old motorcycles: " +
                "catalogue part numbers, dimensions and alternative parts for replacement",
            forAndroidDevices: "For Android OS devices",
            forIOSDevices: "For IOS devices, laptop and PC",
            forPC: "For PC",
            googlePlayLinkTitle: "App on GooglePlay",
            directLinkToApp: "Direct link to the app",
            clickToOpenTheApp: "Click to open the app",
            language: "English",
            december: "December",
            v2_0Update1: "App backend was totally redesigned",
            v2_0Update2: "All the info became editable",
            v2_0Update3: "You can add new items: motorcycles, units, parts",
            v1_01Fix1: "Fixed: error on open of MT-10-36 engine, M72 & M72M models last production year " +
                "and some other bugs",
            v1_01Fix2: "Scaling improved",
            v1_0: "App published on Google Play"

        },
        ru: {
            appTitleDescription: "Подшипники, сальники и другие детали советских оппозитов",
            partNumbers: "парт номера",
            dimensions: "размеры",
            replacers: "заменители",
            appMainDescription: "это приложение, в котором вы можете найти информацию о " +
                "сальниках, подшипниках и некоторых других стандартных деталях " +
                "различных моделей советских оппозитов " +
                "и некоторых других старых мотоциклов: " +
                "каталожные номера, размеры и современные изделия в качестве заменителей",
            forIOSDevices: "Для девайсов на IOS, ноутбуков и десктопа",
            forAndroidDevices: "Для девайсов на ОС Android",
            forPC: "Для десктопа",
            googlePlayLinkTitle: "Приложение на GooglePlay",
            directLinkToApp: "Ссылка на приложение",
            clickToOpenTheApp: "Кликните чтобы открыть приложение",
            language: "Русский язык",
            december: "Декабрь",
            v2_0Update1: "Бэкенд полностью переделан",
            v2_0Update2: "Всю информацию теперь можно редактировать",
            v2_0Update3: "Можно создавать новые мотоциклы и детали",
            v1_01Fix1: "Исправлено: ошибка при открытии двигателя MT-10-36, годы окончания производства М72 и М72М " +
                "и некоторые другие баги",
            v1_01Fix2: "Улучшено масштабирование",
            v1_0: "Приложение опубликовано на Google Play"

        }
    }
});