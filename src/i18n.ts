import {createI18n} from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
const i18n: any = createI18n({
  legacy: false,
  locale: 'ar', // set locale
  messages: {
    en,
    ar,
  }
});
export const availableLanguages = ['en', 'ar']; // our available languages, this will help in creating a dropdown maybe for language selection
export default  i18n;
