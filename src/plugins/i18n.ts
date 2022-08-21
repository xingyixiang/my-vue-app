import { App } from 'vue';
import { type I18n, createI18n } from 'vue-i18n';
import zh from '../locales/zh-CN';
import en from '../locales/en-US';

export const localesConfigs = {
  en,
  zh,
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
