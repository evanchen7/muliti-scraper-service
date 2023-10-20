const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()

(async () => {
  chromium.use(stealth)
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  await page.goto('https://nextdoor.com/');
  await page.getByRole('menuitem', { name: 'Neighbors' }).click();
  await page.getByRole('link', { name: 'Careers' }).click();
  await page.locator('#careers-hero-search-filter-input').click();
  await page.locator('#careers-hero-search-filter-input').fill('accounting');
  await page.locator('#careers-hero-search-filter-input').press('Enter');
  await page.locator('[id="\\35 438022"]').getByRole('link', { name: 'View Role' }).click();
//   await page.getByLabel('Password').fill('FILL_ME_IN');
//   await page.getByRole('button', { name: 'Log in', exact: true }).click();
//   await page.goto('https://www.instagram.com/deeelaaan');
//   await page.goto('https://www.instagram.com/ravioliguy');
//   await page.getByRole('link', { name: 'Photo by Evan Ravioli Chen on April 06, 2023. Carousel 113 9' }).click();
//   await page.getByRole('button', { name: 'Comment' }).click();
//   await page.getByText('EmojiPost').click();
//   await page.getByPlaceholder('Add a comment…').fill('@ravioliguy');
//   await page.getByRole('button', { name: 'Post' }).click();
//   await page.getByRole('button', { name: 'Close' }).click();
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
