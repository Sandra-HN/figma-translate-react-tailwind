import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // Correct import statement

i18n
  .use(HttpBackend) // Using HttpBackend
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Adjust based on where your JSON files are located
    },
  });

export default i18n;
