const puppeteer = require('/Users/buster/.openclaw/workspace/sienna/etsy/mockups/node_modules/puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true, args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`file://${__dirname}/portfolio/index.html`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'portfolio-preview.png', fullPage: true });
  console.log('done');
  await browser.close();
})();
