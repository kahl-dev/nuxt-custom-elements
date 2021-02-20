
import { setupTest } from '@nuxt/test-utils';
import getPort from 'get-port';
import express from 'express';
const { join, resolve } = require('path');
const { chromium, firefox } = require('playwright');

const CHROMIUM = 0;
const FIREFOX = 1;
// eslint-disable-next-line scanjs-rules/call_setTimeout
jest.setTimeout(20000);

describe('browser (client & modern) (chromium and firefox)', () => {
  test();
});

describe('browser (client) (chromium and firefox)', () => {
  test(false);
});

function test (modern = true) {
  let browsers, port, express;

  const testDir = resolve(__dirname, `.browser${modern ? '-modern' : ''}`);
  const buildDir = join(testDir, '.nuxt');
  const customElementsDir = join(buildDir, 'nuxt-custom-elements/dist');

  beforeAll(async () => {
    browsers = await Promise.all([
      chromium.launch(),
      firefox.launch()
    ]);
    port = await getPort();
    express = startStaticServer(customElementsDir, port);
  });

  setupTest({
    browser: false,
    server: false,
    build: true,
    fixture: '../example',
    config: {
      modern: modern ? 'client' : false,
      buildDir,

      customElements: {
        entries: [{
          name: 'ComponentAppBundle',
          tags: [
            {
              async: true,
              name: 'CustomElementAppI18n',
              path: '@/components/apps/AppI18n',
              options: {
                props: {
                  base: './'
                }
              }
            },
            {
              async: true,
              name: 'CustomElementAppAbstract',
              path: '@/components/apps/AppAbstract',
              options: {
                props: {
                  base: './'
                }
              }
            },
            {
              async: true,
              name: 'CustomElementAppHash',
              path: '@/components/apps/AppHash',
              options: {
                props: {
                  base: './'
                }
              }
            },
            {
              async: true,
              name: 'CustomElementAppHistory',
              path: '@/components/apps/AppHistory',
              options: {
                props: {
                  base: './'
                }
              }
            }
          ]
        }
        ]
      }
    }
  });

  // #region /component-app-bundle

  it('check bundle initialization (chrome)', async () => {
    const page = await (browsers[Number(CHROMIUM)]).newPage();
    page.goto(getUrl('/component-app-bundle/', port));
    await page.waitForSelector('.custom-element-app-abstract');
    await page.waitForSelector('.custom-element-app-hash');
    await page.waitForSelector('.custom-element-app-history');
  });

  it('check bundle initialization (firefox)', async () => {
    const page = await (browsers[Number(FIREFOX)]).newPage();
    page.goto(getUrl('/component-app-bundle/', port));
    await page.waitForSelector('.custom-element-app-abstract');
    await page.waitForSelector('.custom-element-app-hash');
    await page.waitForSelector('.custom-element-app-history');
  });

  // #endregion

  afterAll(async () => {
    await Promise.all(browsers.map(browser => browser.close()));
    await new Promise((resolve) => {
      express.close(resolve);
    });
  });
}

function getUrl (path, port) {
  return `http://localhost:${port}${path}`;
}

function startStaticServer (dist, port = 3000, host = 'localhost') {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.static(dist));
  return app.listen(port, host);
}
