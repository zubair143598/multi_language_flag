/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import i18n from "../components/I18n";

import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    } else {
      const detectedLanguage = navigator.language.split("-")[0];
      const supportedLanguages = [
        "en",
        "ur",
        "fr",
        "it",
        "gr",
        "es",
        "po",
        "ne",
        "no",
        "da",
        "sv",
        "pol",
        "bu",
        "cz",
        "tu",
        "ar",
        "ca",
        "is",
        "ja",
        "so",
        "th",
        "ph",
        "hi",
        

      ];
      if (supportedLanguages.includes(detectedLanguage)) {
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.scrollTo(0, 0);
    });
    return () => {
      router.events.off("routeChangeComplete");
    };
  }, []);
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
