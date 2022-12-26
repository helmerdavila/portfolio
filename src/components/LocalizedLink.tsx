import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { LocaleContext } from './Layout';
import localesJson from '../../config/i18n';
import { ILocalJson } from '../interfaces';

export const localizeUrl = (url: string, locale: string) => {
  const localeInfo: ILocalJson = localesJson[locale];

  return localeInfo.default ? url : `${url}/${locale}`;
};

const LocalizedLink = ({ to, ...props }: { to: string; [x: string]: unknown }): JSX.Element => {
  const { locale } = useContext(LocaleContext);
  const url = to === '/' ? '' : to;

  return <Link {...props} to={localizeUrl(url, locale)} />;
};

export default LocalizedLink;
