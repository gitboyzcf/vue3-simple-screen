import { createI18n, useI18n } from 'vue-i18n'
import { useOutsideSystemStore } from '@/stores/modules/system.js'
import zhCN from './json/zh.json'
import enUS from './json/en.json'

const useSystem = useOutsideSystemStore()

const i18n = createI18n({
  legacy: false,
  locale: useSystem.language,
  globalInjection: true,
  messages: {
    zh: zhCN,
    en: enUS
  }
})

const locale = i18n.global.locale

export { useI18n, locale, i18n }
