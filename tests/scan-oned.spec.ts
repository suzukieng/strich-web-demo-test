import {test, expect, chromium} from '@playwright/test';

test('Scans EAN/UPC Book Barcode', async () => {
  const browser = await chromium.launch({
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--use-file-for-fake-video-capture=./test-videos/book_barcode.mjpeg",
    ]
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  // check start page is displayed
  await page.goto('https://demo.strich.io/');
  await expect(page).toHaveTitle(/JavaScript Barcode Scanner Demo/);

  // select 1D retail barcodes and start scanning
  await page.getByText("1D Retail").click();
  await page.getByText("START SCANNING").click();

  // fake video stream starts, barcode should be read
  await expect(page.getByText('9781292223049')).toBeVisible();

  // finalize video
  await context.close();
});
