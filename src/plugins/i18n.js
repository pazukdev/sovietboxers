import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
            details: "Details",
            appName: "Soviet Boxers",
            appTitleDescription: "E-catalog for soviet boxers",
            bikesTitleList: "Ural, Dnepr, K-750, M-72, ect",
            partsTitleList: "Seals, bearings, filters, ect",
            featuresTitleList: "Catalogue numbers, analogs",
            language: "Language",
            appMainDescription: "is a mobile application that is an e-catalog focused on standard"
                + " parts and their modern high quality analogs for soviet sidecar motorcycles"
                + " manufactured by IMZ and KMZ: Ural (Cossack), Dnepr (Neval), MV-750, K-750,"
                + " K-650, M-72.",
            forAndroidDevices: "For Android OS devices",
            forIOSDevices: "Phone, tablet",
            forPC: "For PC and laptop",
            googlePlayLinkTitle: "App on GooglePlay",
            directLinkToApp: "Any Android and IOS devices",
            clickToOpenTheApp: "Click to open the app",
            appVersions: "App old versions",
            december: "December",
            february: "February",
            v2_0Update0: "The app is completely redesigned",
            v2_0Update1: "Wiki Principle: app data is editable. You can add or correct any info",
            v2_0Update2: "You can add new items: replacers, motorcycle models, units and parts",
            v2_0Update3: "Replacers got a rating param to collect statistics on their quality and suitability",
            v2_0Update4: "Manufacturers/sellers and some other links that may be helpful",
            v2_0Update5: "Oils: filling capacities for units",
            v2_0Update6: "More detailed specifications for all items",
            v2_0Update7: "Manuals, part catalogs, drawings, schemes",
            v2_0Update8: "Wishlist: you can create a list of parts that you need",
            v2_0Update9: "All known incorrect info has been corrected",
            v1_01Fix1: "Fixed: error on open of MT-10-36 engine, M72 & M72M models last production year " +
                "and some other bugs",
            v1_01Fix2: "Scaling improved",
            v1_0: "Soviet Boxers Seals & Bearings app published on Google Play",
            inEnglishOnly: "(currently in English only)",
            kmz: "KMZ",
            imz: "IMZ",
            dnepr: "Dnepr",
            ural: "Ural",
            // youCanHelpTheProject: "You can help the project",
            youCanHelpTheProject: "Beer for developer",
            pour: "Pour a glass",
            projectTakesTime: "The project takes a lot of time. I will be glad of any support",
            zoomOutMessage: "If the phone is larger than the screen - zoom out browser view",
            zoomInMessage: "If the phone is too small - zoom in browser view",
            startApp: "Start the app",
            close: "Close",
            payPalDonationBox: "Pay Pal donation box",
            yandexDonationBox: "Yandex donation box",
            fbGroupTitle: "Facebook group",
            vkCommunityTitle: "vk community",
            bearingsAndSeals: "Bearings and seals",
            universalJoints: "Universal joints",
            oilFilters: "Filters",
            sparkPlugs: "Spark plugs",
            pistonsAndPistonRings: "Pistons and piston rings",
            andSomeOtherParts: "And some other parts",
            additionalInfo: 'Additional info',
            whereToBuyInfo: "Where to buy",
            recommendedOilsAndFillingCapacities: "Recommended oils and filling capacities",
            manualsPartsCatalogsDrawingsSchemes: "Manuals, parts catalogs, drawings, schemes",
            appIsFree: "The project is nonprofit and ads-free",
            dontForgetToRate: "If the app is helpful to you, please, don't forget to rate the app"
                + " and leave a review. It's very important for the project",
            lastVersionDescription: "About v2.0",
            privacyPolicy: "Privacy Policy",
            ourAffiliates: "We recommend",
            bikeAndCarParts: "Bike and car parts",
            aliexpress: "Cheap products",
            dok: "Auto parts",
            location: 'Location',
            bearing: 'Bearing',
            seal: 'Seal',
            engine: 'Engine',
            gearbox: 'Gearbox',
            finalDrive: 'Final drive',
            wheel: 'Wheel',
            steeringHead: 'Steering head',
            generator: 'Generator',
            crankshaft: 'crankshaft',
            camshaft: 'camshaft',
            mainShaft: 'main shaft',
            clutchShaft: 'clutch shaft',
            kickstarterShaft: 'kickstarter shaft',
            clutchReleaseRod: 'clutch release rod',
            gearshiftLever: 'gearshift lever',
            casing: 'casing',
            drivePinion: 'drive pinion',
            withWashers: 'with washers',
            simplifiedTables: 'Simplified tables',
            detailedInfoInTheApp: 'Detailed info in the app',
            k750: 'K-750',
            ebay: 'World\'s marketplace',
            getApp: 'Get the app',
            getAppForBitcoin: "Get the app (donate Bitcoins)",
            donateHere: "The project accepts donations to:",
            downloadApp: "Download the application",
            donate: "Donate",
            getTheApp: "and get the app",
            rub: "RUR",
            donationToHelpTheProject: "Donation to help the project",
            projectClosed: "Project closed",
            projectClosedExplanation: "It was 2 years of plans, hopes and hard work. Thanks to everyone who supported.",
            firstVersionName: "Version 1. Soviet Boxers: Seals & Bearings",
            secondVersionName: "Version 2. Old Vehicles"
        },
        ru: {
            details: "Развернуть описание",
            appName: "Soviet Boxers",
            appTitleDescription: "Справочник запчастей для оппозитов",
            bikesTitleList: "Урал, Днепр, К-750, М-72 и др.",
            partsTitleList: "Сальники, подшипники, фильтры и др.",
            featuresTitleList: "Каталожные номера, аналоги",
            language: "Язык",
            appMainDescription: "это мобильное приложение, представляющее из себя справочник"
                + " запчастей и их современных аналогов для советских тяжелых мотоциклов с"
                + " коляской производства заводов ИМЗ и КМЗ: Урал, Днепр, МВ-750, К-750, К-650, М-72.",
            forIOSDevices: "Телефон, планшет",
            forAndroidDevices: "Для девайсов на ОС Android",
            forPC: "Для компьютера и ноутбука",
            googlePlayLinkTitle: "Приложение на GooglePlay",
            directLinkToApp: "Любые девайсы на Android и IOS",
            clickToOpenTheApp: "Кликните чтобы открыть приложение",
            appVersions: "Старые версии приложения",
            december: "Декабрь",
            february: "Февраль",
            v2_0Update0: "Приложение полностью переделано",
            v2_0Update1: "Принцип Википедии: все данные редактируемы. Можно добавлять или исправлять любую информацию",
            v2_0Update2: "Можно добавлять новые объекты: заменители, модели мотоциклов, узлы и детали",
            v2_0Update3: "Заменители получили параметр рейтинга для того, чтобы собрать статистику по его качеству и пригодности",
            v2_0Update4: "Производители/продавцы и некоторые другие ссылки, которые могут быть полезными",
            v2_0Update5: "Масла: заправочные объемы для агрегатов",
            v2_0Update6: "Более детальные характеристики всех объектов",
            v2_0Update7: "Руководства по эксплуатации, каталоги деталей, чертежи, схемы",
            v2_0Update8: "Wishlist: можно составлять список нужных деталей",
            v2_0Update9: "Все известные ошибки в данных исправлены",
            v1_01Fix1: "Исправлено: ошибка при открытии двигателя MT-10-36, годы окончания производства М72 и М72М " +
                "и некоторые другие баги",
            v1_01Fix2: "Улучшено масштабирование",
            v1_0: "Приложение \"Сальники и подшипники Советских оппозитов\" опубликовано на Google Play",
            inEnglishOnly: "(пока только на английском языке)",
            kmz: " КМЗ",
            imz: "ИМЗ",
            dnepr: "Днепр",
            ural: "Урал",
            // youCanHelpTheProject: "Вы можете помочь проекту",
            youCanHelpTheProject: "Налить пива разработчику",
            pour: "Налить",
            projectTakesTime: "Проект требует много времени. Буду рад любой поддержке",
            zoomOutMessage: "Если телефон больше экрана - отдалите вид в браузере",
            zoomInMessage: "Если телефон слишком маленький - приблизьте вид в браузере",
            startApp: "Старт приложения",
            close: "Закрыть",
            payPalDonationBox: "Pay Pal ящик для доната",
            yandexDonationBox: "Яндекс ящик для доната",
            fbGroupTitle: "Группа в Facebook",
            vkCommunityTitle: "Сообщество в vk",
            bearingsAndSeals: "Подшипники и сальники",
            universalJoints: "Крестовины",
            oilFilters: "Фильтры",
            sparkPlugs: "Свечи",
            pistonsAndPistonRings: "Поршни и кольца",
            andSomeOtherParts: "И некоторые другие запчасти",
            additionalInfo: 'Дополнительная информация',
            whereToBuyInfo: "Где купить",
            recommendedOilsAndFillingCapacities: "Рекомендуемые масла и заправочные объемы",
            manualsPartsCatalogsDrawingsSchemes: "Руководства, каталоги частей, чертежи, схемы",
            appIsFree: "Этот проект некоммерческий и без рекламы",
            dontForgetToRate: "Если это приложение оказалось полезным для вас,"
                + " пожалуйста, не забудьте поставить ему оценку и написать отзыв.",
            lastVersionDescription: "О версии 2.0",
            privacyPolicy: "Политика конфиденциальности",
            ourAffiliates: "Рекомендуем",
            aliexpress: "Дешевые товары",
            dok: "Автозапчасти",
            location: 'Место',
            bearing: 'Подшипник',
            seal: 'Сальник',
            engine: 'Двигатель',
            gearbox: 'КПП',
            finalDrive: 'Редуктор',
            wheel: 'Колесо',
            steeringHead: 'Рулевая колонка',
            generator: 'Генератор',
            crankshaft: 'коленвал',
            camshaft: 'распредвал',
            mainShaft: 'вторичный вал',
            clutchShaft: 'первичный вал',
            kickstarterShaft: 'вал кикстартера',
            clutchReleaseRod: 'шток сцепления',
            gearshiftLever: 'рычаг переключения',
            casing: 'картер',
            drivePinion: 'ведущая шестерня',
            withWashers: 'с шайбами',
            simplifiedTables: 'Упрощенные таблицы',
            detailedInfoInTheApp: 'Подробная информация о подшипниках, сальниках и др. деталях в приложении',
            k750: 'К-750',
            ebay: 'World\'s marketplace',
            getApp: 'Получить приложение',
            getAppForBitcoin: "Получить приложение (донат в Биткойнах)",
            donateHere: "Задонатить можно сюда:",
            downloadApp: "Скачать приложение",
            donate: " Задонать",
            getTheApp: "и получи приложение",
            rub: "руб.",
            donationToHelpTheProject: "Донат на поддержку проекта",
            projectClosed: "Проект закрыт",
            projectClosedExplanation: "Это было 2 года планов, надежд и тяжелой работы. Спасибо всем кто поддерживал.",
            firstVersionName: "Версия 1. Soviet Boxers: Сальники и подшипники",
            secondVersionName: "Версия 2. Старая техника"
        }
    }
});