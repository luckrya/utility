export const inBrowser = typeof window !== "undefined";

const IE_REGEXP = /MSIE|Trident/;
const EDGE_REGEXP = /Edg\/\d+/;
const FIREFOX_REGEXP = /Firefox\/\d+/;
const SAFARI_REGEXP = /Safari\/\d+/;
const CHROME_REGEXP = /Chrome\/\d+/;

const ANDROID_REGEXP = /Android/;
const IOS_REGEXP = /iPhone|iPad|iPod|iOS/;

const MAC_REGEXP = /MacIntel/;
const LINUX_REGEXP = /Linux/;
const WINDOWS_REGEXP = /Win/;

/**
 * The User-Agent request header is a characteristic string that lets servers and network peers
 * identify the application, operating system, vendor, and/or version of the requesting user agent.
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent
 */
const _test = (reg: RegExp, string = window.navigator.userAgent) =>
  reg.test(string);

export const isIE = () => _test(IE_REGEXP);
export const isEdge = () => _test(EDGE_REGEXP);
export const isFirefox = () => _test(FIREFOX_REGEXP);
export const isChrome = () => _test(CHROME_REGEXP) && !isEdge();
export const isSafari = () => _test(SAFARI_REGEXP) && !isEdge() && !isChrome();

export const isAndroid = () => _test(ANDROID_REGEXP);
export const isIOS = () => _test(IOS_REGEXP);

export const isLinux = () => _test(LINUX_REGEXP, window.navigator.platform);
export const isMac = () => _test(MAC_REGEXP, window.navigator.platform);
export const isWindows = () => _test(WINDOWS_REGEXP, window.navigator.platform);
