import {
  localeAr,
  localeBg,
  localeCa,
  localeCs,
  localeDa,
  localeDe,
  localeEl,
  localeEn,
  localeEnGB,
  localeEs,
  localeFa,
  localeFi,
  localeFr,
  localeHe,
  localeHi,
  localeHr,
  localeHu,
  localeIt,
  localeJa,
  localeKo,
  localeLt,
  localeNl,
  localeNo,
  localePl,
  localePtBR,
  localePtPT,
  localeRo,
  localeRu,
  localeRuUA,
  localeSk,
  localeSr,
  localeSv,
  localeTh,
  localeTr,
  localeUa,
  localeVi,
  localeZh,
  MbscLocale,
  Select,
  setOptions,
} from '@mobiscroll/react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { demoTitleMap } from '../Demos';

(window as Window & { isMbscDemo?: boolean }).isMbscDemo = true;

const themes = [
  { value: 'ios', text: 'iOS' },
  { value: 'material', text: 'Material' },
  { value: 'windows', text: 'Windows' },
  { value: 'auto', text: 'Auto' },
];

const themeVariants = [
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
  { value: 'auto', text: 'Auto' },
];

const locales = [
  { value: localeEn, text: 'English' },
  { value: localeAr, text: 'Arabic' },
  { value: localeBg, text: 'Bulgarian' },
  { value: localeCa, text: 'Català' },
  { value: localeCs, text: 'Cestina' },
  { value: localeZh, text: 'Chinese' },
  { value: localeHr, text: 'Croatian' },
  { value: localeDa, text: 'Dansk' },
  { value: localeDe, text: 'Deutsch' },
  { value: localeEnGB, text: 'English (UK)' },
  { value: localeEs, text: 'Español' },
  { value: localeFr, text: 'Français' },
  { value: localeEl, text: 'Greek' },
  { value: localeHi, text: 'Hindi' },
  { value: localeIt, text: 'Italiano' },
  { value: localeJa, text: 'Japanese' },
  { value: localeKo, text: 'Korean' },
  { value: localeLt, text: 'Lietuvių' },
  { value: localeHu, text: 'Magyar' },
  { value: localeNl, text: 'Nederlands' },
  { value: localeNo, text: 'Norsk' },
  { value: localePl, text: 'Polski' },
  { value: localePtPT, text: 'Português Europeu' },
  { value: localePtBR, text: 'Pt. Brasileiro' },
  { value: localeRo, text: 'Română' },
  { value: localeSr, text: 'Serbian' },
  { value: localeSk, text: 'Slovencina' },
  { value: localeFi, text: 'Suomi' },
  { value: localeSv, text: 'Svenska' },
  { value: localeTh, text: 'Thai' },
  { value: localeTr, text: 'Türkçe' },
  { value: localeUa, text: 'Ukrainian' },
  { value: localeVi, text: 'Vietnamese' },
  { value: localeRu, text: 'Русский' },
  { value: localeRuUA, text: 'Русский (UA)' },
  { value: localeHe, text: 'עברית' },
  { value: localeFa, text: 'فارسی' },
];

export default function Root() {
  const location = useLocation();
  const path = location.pathname;
  const [theme, setTheme] = useState('auto');
  const [themeVariant, setThemeVariant] = useState<'light' | 'dark' | 'auto'>('auto');
  const [locale, setLocale] = useState<MbscLocale>(localeEn);
  const footerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);

  const updatePath = useCallback(() => {
    const footer = footerRef.current;
    const pathEl = pathRef.current;
    if (footer && pathEl) {
      pathEl.style.display = '';
      pathEl.style.display = footer.scrollWidth > footer.clientWidth ? 'none' : '';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [updatePath]);

  useLayoutEffect(() => {
    updatePath();
  }, [path, updatePath]);

  useEffect(() => {
    setOptions({ theme, themeVariant, locale });
  }, [theme, themeVariant, locale]);

  return (
    <>
      <div className="app-header mbsc-font">
        {path !== '/' && (
          <div className="app-back">
            <Link to="/">
              <span className="mbsc-icon mbsc-font-icon mbsc-icon-ion-ios7-arrow-back"></span>
            </Link>
          </div>
        )}
        <div className="app-title">
          <h1>{demoTitleMap[path] || 'Mobiscroll React Demos'}</h1>
        </div>
      </div>
      <div className="app-page">
        <Outlet />
      </div>
      <div className="app-footer mbsc-font mbsc-flex mbsc-justify-content-between mbsc-align-items-center" ref={footerRef}>
        <div className="app-footer-controls mbsc-flex mbsc-align-items-center">
          <div className="app-footer-select app-footer-theme-select">
            <Select
              data={themes}
              touchUi={false}
              theme="ios"
              inputStyle="box"
              labelStyle="stacked"
              label="Theme"
              value={theme}
              onChange={(args) => setTheme(args.value)}
            />
          </div>
          <div className="app-footer-select app-footer-theme-variant-select">
            <Select
              data={themeVariants}
              touchUi={false}
              theme="ios"
              inputStyle="box"
              labelStyle="stacked"
              label="Mode"
              value={themeVariant}
              onChange={(args) => setThemeVariant(args.value as 'light' | 'dark' | 'auto')}
            />
          </div>
          <div className="app-footer-select app-footer-locale-select">
            <Select
              data={locales}
              touchUi={false}
              theme="ios"
              inputStyle="box"
              labelStyle="stacked"
              label="Locale"
              value={locale}
              onChange={(args) => setLocale(args.value)}
            />
          </div>
        </div>
        <div className="app-path" ref={pathRef}>
          {path !== '/' ? './src/demos' + path : ''}
        </div>
      </div>
    </>
  );
}
