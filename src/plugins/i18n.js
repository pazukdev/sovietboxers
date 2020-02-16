import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
            appName: "Old Vehicles: Seals & Bearings",
            appTitleDescription: "Seals, bearings and other parts of soviet boxers and other old vehicles",
            partNumbers: "part numbers",
            dimensions: "dimensions",
            replacers: "replacers",
            appMainDescription: "is an app where you can find information about " +
                "seals, bearings and other parts of soviet boxers and some other old or rare vehicles",
            forAndroidDevices: "For Android OS devices",
            forIOSDevices: "For IOS devices, laptop and PC",
            forPC: "For PC",
            googlePlayLinkTitle: "App on GooglePlay",
            directLinkToApp: "Direct link to the app",
            clickToOpenTheApp: "Click to open the app",
            appVersions: "App versions",
            december: "December",
            february: "February",
            v2_0Update0: "The app renamed to: Old Vehicles: Seals & Bearings",
            v2_0Update1: "The app was totally redesigned",
            v2_0Update2: "All the info became editable",
            v2_0Update3: "You can add new motorcycles, cars, units and parts",
            v1_01Fix1: "Fixed: error on open of MT-10-36 engine, M72 & M72M models last production year " +
                "and some other bugs",
            v1_01Fix2: "Scaling improved",
            v1_0: "Soviet Boxers Seals & Bearings app published on Google Play",
            kmz: "KMZ",
            imz: "IMZ",
            dnepr: "Dnepr",
            ural: "Ural",
            youCanHelpTheProject: "You can help the project",
            zoomOutMessage: "If the phone is larger than the screen - zoom out browser view",
            zoomInMessage: "If the phone is too small - zoom in browser view",
            startApp: "Start the app",
            close: "Close"

        },
        ru: {
            appName: "Old Vehicles: сальники и подшипники",
            appTitleDescription: "Подшипники, сальники и другие детали советских оппозитов и других старых транспортных средств",
            partNumbers: "парт номера",
            dimensions: "размеры",
            replacers: "заменители",
            appMainDescription: "это приложение, в котором вы можете найти информацию о " +
                "сальниках, подшипниках и других деталях советских оппозитов и некоторых других старых или редких " +
                "транспортных средств",
            forIOSDevices: "Для девайсов на IOS, ноутбуков и десктопа",
            forAndroidDevices: "Для девайсов на ОС Android",
            forPC: "Для десктопа",
            googlePlayLinkTitle: "Приложение на GooglePlay",
            directLinkToApp: "Ссылка на приложение",
            clickToOpenTheApp: "Кликните чтобы открыть приложение",
            appVersions: "Версии приложения",
            december: "Декабрь",
            february: "Февраль",
            v2_0Update0: "Приложение периименовано в: Old Vehicles: сальники и подшипники",
            v2_0Update1: "Приложение полностью переделано",
            v2_0Update2: "Всю информацию теперь можно редактировать",
            v2_0Update3: "Можно добавлять свои мотоциклы, автомобили, агрегаты и детали",
            v1_01Fix1: "Исправлено: ошибка при открытии двигателя MT-10-36, годы окончания производства М72 и М72М " +
                "и некоторые другие баги",
            v1_01Fix2: "Улучшено масштабирование",
            v1_0: "Приложение \"Сальники и подшипники Советских оппозитов\" опубликовано на Google Play",
            kmz: " КМЗ",
            imz: "ИМЗ",
            dnepr: "Днепр",
            ural: "Урал",
            youCanHelpTheProject: "Вы можете помочь проекту",
            zoomOutMessage: "Если телефон больше экрана - отдалите вид в браузере",
            zoomInMessage: "Если телефон слишком маленький - приблизьте вид в браузере",
            startApp: "Старт приложения",
            close: "Закрыть"

        }
    }
});