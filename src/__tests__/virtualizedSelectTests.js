const puppeteer = require('puppeteer');

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto('http://localhost:8080');
});

afterAll(async () => {
  await browser.close();
});

describe('Simple select is all perfect', () => {
  test('The page loads with the select components rendered', async () => {
    const select1 = await page.$eval(".simple-select", el => (el ? true : false));
    const select2 = await page.$eval(".select-option-renderer", el => (el ? true : false));
    expect(select1).toEqual(true);
    expect(select2).toEqual(true);
  });

  test('Clicking on any select component, opens the menu', async () => {
    await page.click('.simple-select');
    const hasOptions = await page.$eval(".VirtualizedSelectOption", el => el ? true : false);
    expect(hasOptions).toBe(true);
  });

  test('Choosing a different options, selects it', async () => {
    await page.click('.simple-select');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const selectContents = await page.$eval(".simple-select", el => el.innerHTML);
    console.log(selectContents);
    const hasNewSelectedElement = selectContents.indexOf('Item169') > -1;
    expect(hasNewSelectedElement).toBe(true);
  });
});