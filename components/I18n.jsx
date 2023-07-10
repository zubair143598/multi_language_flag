import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Journey of Languages: Exploring the World through Words",
        greeting:
          "Traveling is a transformative experience that takes us beyond the boundaries of our familiar surroundings, opening up a world of possibilities and new perspectives. It allows us to break free from our daily routines and embark on a journey of self-discovery and exploration. Whether we're wandering through ancient ruins, navigating bustling markets, or immersing ourselves in the natural beauty of remote landscapes, every step we take unravels a tapestry of experiences. ",
      },
    },
    ru: {
      translation: {
        title: "Путешествие языков: Исследование мира через слова",
        greeting: `Путешествие - это глубокий и преобразующий опыт, который выводит нас за пределы привычной обстановки, открывая мир возможностей и новых перспектив. Оно позволяет нам освободиться от повседневной рутины и отправиться в путешествие самооткрытия и исследования. Будь то прогулки по древним руинам, плавание по оживленным рынкам или погружение в красоту уединенных пейзажей, каждый наш шаг раскрывает уникальную картину опыта.
    
         `,
      },
    },
    ur: {
      translation: {
        title: "زبانوں کی سفر: الفاظ کے ذریعے دنیا کا کھوج",

        greeting: `سفر کرنا ایک تحولی تجربہ ہے جو ہمیں ہمارے عادیاتی محیط کے پابندیوں سے باہر لے جاتا ہے، نئی تجاویز اور نئی تصورات کا عالم کھولتا ہے۔ یہ ہمیں ہماری روزمرہ کی روتین سے آزاد ہونے اور خود کی دریافت کے سفر پر لے جاتا ہے۔ چاہے ہم قدیم تباہ شدہ عمارتوں میں سیر کر رہے ہوں، ہلچل دار بازاروں میں ٹھہر رہے ہوں یا دور دراز ماحول کی خوبصورتی میں غوطہ انداز ہو رہے ہوں، ہر قدم ہمارے آگے تجربات کا بافت بافتہ پردہ چھینتا ہے۔ہوں۔`,
      },
    },
    fr: {
      translation: {
        title: "Voyage des langues : Explorer le monde à travers les mots",
        greeting: `Voyager est une expérience transformative qui nous emmène au-delà des limites de notre environnement familier, ouvrant un monde de possibilités et de nouvelles perspectives. Cela nous permet de nous libérer de nos routines quotidiennes et de nous embarquer dans un voyage de découverte de soi et d'exploration. Que nous déambulions à travers des ruines antiques, que nous naviguions dans des marchés animés ou que nous nous immergions dans la beauté naturelle de paysages isolés, chaque pas que nous faisons dévoile une tapisserie d'expériences.
    
           `,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
