import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
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