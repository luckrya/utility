/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://github.com/luckrya/utility"}
 */

import {
  isIE,
  isEdge,
  isFirefox,
  isChrome,
  isAndroid,
  isIOS,
  isSafari,
  isMac,
  isWindows,
  isLinux,
} from "../environment";

const browsers = [
  {
    name: "Google Chrome",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    isIE: false,
    isEdge: false,
    isFirefox: false,
    isChrome: true,
    isSafari: false,
    isAndroid: false,
    isIOS: false,
  },
  {
    name: "Apple Safari",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15",
    isIE: false,
    isEdge: false,
    isFirefox: false,
    isChrome: false,
    isSafari: true,
    isAndroid: false,
    isIOS: false,
  },
  {
    name: "Mozilla Firefox",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0",
    isIE: false,
    isEdge: false,
    isFirefox: true,
    isChrome: false,
    isSafari: false,
    isAndroid: false,
    isIOS: false,
  },
  {
    name: "Microsoft Edge",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.25",
    isIE: false,
    isEdge: true,
    isFirefox: false,
    isChrome: false,
    isSafari: false,
    isAndroid: false,
    isIOS: false,
  },
  {
    name: "Microsoft Internet Explorer",
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
    isIE: true,
    isEdge: false,
    isFirefox: false,
    isChrome: false,
    isSafari: false,
    isAndroid: false,
    isIOS: false,
  },
  {
    name: "Samsung Galaxy S8+",
    ua: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    isIE: false,
    isEdge: false,
    isFirefox: false,
    isChrome: true,
    isSafari: false,
    isAndroid: true,
    isIOS: false,
  },
  {
    name: "Apple iPhone XR",
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    isIE: false,
    isEdge: false,
    isFirefox: false,
    isChrome: false,
    isSafari: true,
    isAndroid: false,
    isIOS: true,
  },
];

const platforms = [
  {
    name: "Apple MacOS",
    platform: "MacIntel",
    isMac: true,
    isWindows: false,
    isLinux: false,
  },
  {
    name: "Microsoft Windows",
    platform: "Win32",
    isMac: false,
    isWindows: true,
    isLinux: false,
  },
  {
    name: "Linux",
    platform: "Linux x86_64",
    isMac: false,
    isWindows: false,
    isLinux: true,
  },
];

describe("环境检测", () => {
  let dynamicUserAgent = window.navigator.userAgent;
  let dynamicPlatform = window.navigator.platform;
  beforeAll(() => {
    Object.defineProperty(window.navigator, "userAgent", {
      get() {
        return dynamicUserAgent;
      },
    });
    Object.defineProperty(window.navigator, "platform", {
      get() {
        return dynamicPlatform;
      },
    });
  });

  describe("浏览器类型检测", () => {
    for (const browser of browsers) {
      test(`${browser.name} 浏览器`, () => {
        dynamicUserAgent = browser.ua;

        expect(isIE()).toBe(browser.isIE);
        expect(isEdge()).toBe(browser.isEdge);
        expect(isFirefox()).toBe(browser.isFirefox);
        expect(isChrome()).toBe(browser.isChrome);
        expect(isSafari()).toBe(browser.isSafari);
        expect(isAndroid()).toBe(browser.isAndroid);
        expect(isIOS()).toBe(browser.isIOS);
      });
    }
  });

  describe("运行平台检测", () => {
    for (const platform of platforms) {
      test(`${platform.name} 平台`, () => {
        dynamicPlatform = platform.platform;

        expect(isMac()).toBe(platform.isMac);
        expect(isWindows()).toBe(platform.isWindows);
        expect(isLinux()).toBe(platform.isLinux);
      });
    }
  });
});
