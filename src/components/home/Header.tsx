import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '@locales/i18n';
import './header.less';
export default () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <h1>{t(translations.title.header)}</h1>
    </div>
  );
};
