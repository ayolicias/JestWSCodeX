import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';

expect.extend({ toMatchImageSnapshot });

test('Application Snapshot', async () => {
  const browser = await puppeteer.launch(/*{ devtools: true }*/);
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 2000 });
  await page.goto('http://www.projectcodex.co/');
  //await page.evaluate(() => { debugger; });
  const image = await page.screenshot({ clip: { x: 0, y: 0, width: 1024, height: 2000 } });
  expect(image).toMatchImageSnapshot(/*{ failureThreshold: '0.1', failureThresholdType: 'percent' }*/);
  await browser.close();
}, 20000);
