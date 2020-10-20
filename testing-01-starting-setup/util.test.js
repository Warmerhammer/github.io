const puppeteer = require('puppeteer');

const { TestScheduler } = require('jest');
const { generateText, checkAndGenerate } = require('./util');

test('Should output name and age', () => {
  const text = generateText('Richard', 33);
  expect(text).toBe('Richard (33 years old)');
  const text2 = generateText('Anna', 28);
  expect(text2).toBe('Anna (28 years old)');
});

test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

test('should generate valid text output', () => {
  const text = checkAndGenerate('Richard', 33);
  expect(text).toBe('Richard (33 years old)');
});

test('should click around', async () => {
  jest.setTimeout(30000);
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 80,
    // args: ['--window-size=1920, 1080'],
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///C:/Users/Richard/GitProjects/testing-01-starting-setup/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', (el) => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
}, 30000);
