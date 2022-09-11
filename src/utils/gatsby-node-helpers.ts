// Use a little helper function to remove trailing slashes from paths
export const removeTrailingSlash = (path) => (path === `/` ? path : path.replace(/\/$/, ``));

export const localizedSlug = ({ isDefault, locale, slug }: { isDefault: boolean; locale: string; slug: string }) =>
  isDefault ? `blog/${slug}` : `/${locale}/blog/${slug}`;

// From lodash:
// https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
export const findKey = (object, predicate) => {
  let result;
  if (object == null) {
    return result;
  }
  Object.keys(object).some((key) => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
    return false;
  });
  return result;
};
