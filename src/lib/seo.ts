// Domains for the two Sav Group sites.
// savgroups.com -> this project (global English site, indexed by Google, Bing, Brave, ...)
// savgroups.ru  -> the Russian-market site (separate project)
export const SITE_URL = "https://savgroups.com";
export const RUSSIAN_URL = "https://savgroups.ru";

/**
 * Canonical + hreflang links for a page.
 * `path` is the route path: "/", "/about", "/services", ...
 * The .ru site must publish the mirror-image tags for hreflang to take effect.
 */
export function pageLinks(path: string) {
  return [
    { rel: "canonical", href: `${SITE_URL}${path}` },
    { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${path}` },
    { rel: "alternate", hrefLang: "ru", href: `${RUSSIAN_URL}${path}` },
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${path}` },
  ];
}
