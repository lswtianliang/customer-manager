import _i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import cn from './cn/translation.json';
import { ConvertedToObjectType } from './types';

const translationsJson = {
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  },
};

export type TranslationResource = typeof cn;
export type LanguageKey = keyof TranslationResource;

//构造成一个typescript的类型，方便代码编写
export const translations: ConvertedToObjectType<TranslationResource> = {} as any;

/*
 * 将静态的JSON文件转换成key值相同的object，但values是根据语法连接的字符串。
 * 这在使用JSON文件的key并且仍具有智能感知功能时很有帮助
 * 伴随 type-safety
 */
const convertLanguageJsonToObject = (obj: any, dict: Record<string, any>, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = currentLookupKey;
    }
  });
};
export const i18n = _i18next
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 检测用户语言
  // 更多信息见这里: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 初始化 i18next
  // 所有可选配置: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,

      fallbackLng: 'cn', //如果用户语言的翻译文件不存在，使用的语言
      debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false, // react不需要再escape，默认已经做了。
      },
    },
    () => {
      convertLanguageJsonToObject(en, translations);
    },
  );
