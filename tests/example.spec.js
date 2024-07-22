import {test, expect} from 'playwright/test';

test('basic test', async ({ page }) => {
  // Go to the starting url
  await page.goto('http://localhost:8080');

  // Check if the initial message is correct
  const heading = await page.locator('h1');
  await expect(heading).toHaveText('Hello Vue!');

  // Click the button to reverse the message
  const button = await page.locator('button');
  await button.click();

  // Check if the message has been reversed
  await expect(heading).toHaveText('!euV olleH');
});
