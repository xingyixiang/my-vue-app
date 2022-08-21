import { App } from 'vue';
import { type I18n, createI18n } from 'vue-i18n';
// element-plus国际化
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import zh from '../locales/zh-CN';
import en from '../locales/en-US';

export const localesConfigs = {
  en: {
    ...enLocale,
    ...en,
  },
  zh: {
    ...zhLocale,
    ...zh,
  },
};

export const i18n: I18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: localesConfigs,
});

export function useI18n(app: App) {
  app.use(i18n);
}
