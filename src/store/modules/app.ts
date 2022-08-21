import { store } from '@/store/index';
import { defineStore } from 'pinia';

type appType = {
  lang: string;
};

export const useAppStore = defineStore({
  id: 'app',
  state: (): appType => ({
    lang: 'zh',
  }),
  getters: {
    getLang(): string {
      return this.lang;
    },
  },
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    },
  },
});

export function useAppStoreHook() {
  return useAppStore(store);
}
