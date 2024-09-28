import { useLocale as useDumiLocale } from 'dumi';

export interface LocaleMap<
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
> {
  cn: Record<K, V>;
  en: Record<K, V>;
  ko: Record<K, V>;
}

const getLocaleType = (localeId: string) => {
  switch (localeId) {
    case 'zh-CN':
      return 'cn';
    case 'en-US':
      return 'en';
    case 'ko-KR':
      return 'ko';
    default:
      return 'en';
  }
};

const useLocale = <
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
>(
  localeMap?: LocaleMap<K, V>,
): [Record<K, V>, 'cn' | 'en' | 'ko'] => {
  const { id } = useDumiLocale();
  const localeType = getLocaleType(id);
  return [localeMap?.[localeType]!, localeType] as const;
};

export default useLocale;
