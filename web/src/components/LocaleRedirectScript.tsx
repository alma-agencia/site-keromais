import { LANG_STORAGE_KEY } from "@/i18n/config";
import { redirectTable } from "@/i18n/routes";

/**
 * Blocking inline script rendered in <head> of the Portuguese (root) pages only.
 *
 * The site is a static export (no server, no middleware), so the language is picked in the
 * browser, before first paint, to avoid a flash of Portuguese:
 *   1. a language the visitor chose manually (saved in localStorage) always wins;
 *   2. otherwise the first of pt / en / es found in the device language list (navigator.languages);
 *   3. only if the device language is none of those, the visitor's country (looked up by IP) decides:
 *      Portuguese-speaking countries stay in PT, Spanish-speaking ones get ES, everyone else EN.
 * Crawlers are skipped so search engines keep indexing the Portuguese pages at their own URLs.
 */
const SCRIPT = `(function(){try{
var KEY=${JSON.stringify(LANG_STORAGE_KEY)},MAP=${JSON.stringify(redirectTable())};
if(/bot|crawl|spider|slurp|mediapartners|facebookexternalhit|whatsapp|telegram|preview|lighthouse|headless/i.test(navigator.userAgent||""))return;
var stored=null;try{stored=localStorage.getItem(KEY)}catch(e){}
function go(lang){var slug=location.pathname.replace(/^\\/+|\\/+$/g,""),entry=MAP[slug];if(entry)location.replace(entry[lang]+location.search+location.hash)}
if(stored==="pt")return;
if(stored==="en"||stored==="es"){go(stored);return}
var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
for(var i=0;i<list.length;i++){var l=String(list[i]).toLowerCase().slice(0,2);if(l==="pt")return;if(l==="en"||l==="es"){go(l);return}}
if(typeof fetch!=="function")return;
var ES="AR BO CL CO CR CU DO EC ES GQ GT HN MX NI PA PE PR PY SV UY VE".split(" "),PT="BR PT AO MZ CV GW ST TL".split(" ");
function byCountry(cc){cc=String(cc||"").toUpperCase();if(!cc||PT.indexOf(cc)>-1)return;go(ES.indexOf(cc)>-1?"es":"en")}
function get(url,ms){var c=typeof AbortController!=="undefined"?new AbortController():null,t=setTimeout(function(){c&&c.abort()},ms);return fetch(url,c?{signal:c.signal}:{}).then(function(r){clearTimeout(t);return r})}
get("https://www.cloudflare.com/cdn-cgi/trace",2500).then(function(r){return r.text()}).then(function(t){var m=/^loc=([A-Z]{2})/m.exec(t);if(!m)throw 0;byCountry(m[1])}).catch(function(){get("https://api.country.is/",2500).then(function(r){return r.json()}).then(function(j){byCountry(j&&j.country)}).catch(function(){})});
}catch(e){}})();`;

export default function LocaleRedirectScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
