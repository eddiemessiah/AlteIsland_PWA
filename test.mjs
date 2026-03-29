import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000/directory', { waitUntil: 'networkidle' });
  const html = await page.content();
  console.log(html.includes('animate-spin') ? 'STILL LOADING' : 'LOADED');
  if (html.includes('No spots found')) console.log('NO SPOTS FOUND');
  if (html.includes('Trending Near You')) console.log('TRENDING VISIBLE');
  await browser.close();
})();
