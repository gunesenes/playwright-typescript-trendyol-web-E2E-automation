// npx playwright test --ui

import { test, expect } from '@playwright/test';

test('Trendyol Testi', async ({ page }) => {

  test.setTimeout(350000);

 
  await page.goto('https://www.trendyol.com/');


await page.locator('#onetrust-accept-btn-handler').waitFor({ state: 'visible' });


await page.locator('#onetrust-accept-btn-handler').click();


await page.getByText("Aradığın her şey Trendyol'da!").waitFor({ state: 'visible' });


await page.locator('.gender-card-action').filter({ hasText: 'Erkek' }).click();


await page.waitForLoadState('load');


await page.getByText('Ürün, kategori veya marka ara').click();


await page.locator('input[placeholder="Ürün, kategori veya marka ara"]').fill('kazak');
await page.keyboard.press('Enter');

await page.locator('span.checkbox-label:has-text("Bershka")').waitFor({ state: 'visible' });

await page.locator('span.checkbox-label').filter({ hasText: 'Bershka' }).click();

const filtreKutusu = page.locator('[data-testid="scroll-container"]');

await filtreKutusu.evaluate((el) => el.scrollBy(0, 300));

await page.locator('h3:has-text("Renk")').waitFor({ state: 'visible' });

await page.locator('h3:has-text("Renk")').click();

await page.locator('[data-testid="color-list-item-text"]:has-text("Kırmızı")').waitFor({ state: 'visible' });

await page.locator('[data-testid="color-list-item-text"]:has-text("Kırmızı")').click();

await page.locator('[data-testid="product-card"]').nth(0).waitFor({ state: 'visible' });

await page.locator('[data-testid="product-card"]').nth(0).click();

const [yeniSekme] = await Promise.all([
  page.waitForEvent('popup'), 
  page.locator('[data-testid="product-card"]').nth(0).click() 
]);

await yeniSekme.waitForLoadState(); 
console.log(await yeniSekme.title()); 

await filtreKutusu.evaluate((el) => el.scrollBy(0, 600));


await yeniSekme.locator('.onboarding__default-renderer-primary-button').waitFor({ state: 'visible' });


await yeniSekme.locator('.onboarding__default-renderer-primary-button').click();

await yeniSekme.locator('[data-testid="button"]', { hasText: 'Konum Seç' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button.location-select-button').click();

await yeniSekme.locator('button.apply-button').waitFor({ state: 'visible' });

await yeniSekme.locator('button.location-item-select-button').filter({ hasText: 'İl Seçin' }).click();

await yeniSekme.locator('input.dropdown-search-input[placeholder="Ara"]').waitFor({ state: 'visible' });

await yeniSekme.locator('input.dropdown-search-input[placeholder="Ara"]').fill('istanbul');

await yeniSekme.locator('div.dropdown-option').filter({ hasText: 'İstanbul' }).waitFor({ state: 'visible' });

await yeniSekme.locator('div.dropdown-option').filter({ hasText: 'İstanbul' }).click();

await yeniSekme.locator('button.location-item-select-button').filter({ hasText: 'İlçe Seçin' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button.location-item-select-button').filter({ hasText: 'İlçe Seçin' }).click();

await yeniSekme.locator('input.dropdown-search-input[placeholder="Ara"]').waitFor({ state: 'visible' });
await yeniSekme.locator('input.dropdown-search-input[placeholder="Ara"]').click();

await yeniSekme.locator('input.dropdown-search-input[placeholder="Ara"]').fill('Esenler');

await yeniSekme.locator('div.dropdown-option').filter({ hasText: 'Esenler' }).click();

await yeniSekme.locator('button.apply-button').waitFor({ state: 'visible' });
await yeniSekme.locator('button.apply-button').click();

await yeniSekme.locator('span.info-text', { hasText: /.*kapında!/ }).waitFor({ state: 'visible' });

await yeniSekme.locator('button.add-to-cart-button').first().click();

await yeniSekme.mouse.wheel(0, -5000);

await yeniSekme.locator('.basket-count').filter({ hasText: '1' }).waitFor({ state: 'visible' });

await yeniSekme.locator('a[href="/sepetim"]').first().click();

await yeniSekme.locator('.basket-header-title', { hasText: 'Sepetim (1 Ürün)' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button[data-testid="quantity-button-increment"]').click();

await yeniSekme.locator('.basket-header-title').filter({ hasText: 'Sepetim (2 Ürün)' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button[data-testid="quantity-button-decrement"]').first().click({ force: true });

await yeniSekme.locator('.basket-header-title', { hasText: 'Sepetim (1 Ürün)' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button[data-testid="checkout-button"]').click();

await yeniSekme.locator('p.no-account-modal-content-title', { hasText: 'Trendyol Hesabınız Yok Mu?' }).waitFor({ state: 'visible' });

await yeniSekme.locator('a.no-account-modal-content-buttons-button', { hasText: 'Giriş Yap / Üye Ol' }).click();

await yeniSekme.locator('h1.page-title', { hasText: 'Giriş Yap veya Üye Ol' }).waitFor({ state: 'visible' });

await yeniSekme.locator('[data-testid="email-input"]').click();
await yeniSekme.locator('[data-testid="email-input"]').fill('ahmetcan54677@gmail.com');

await yeniSekme.locator('[data-testid="email-check-button"]').click();

await yeniSekme.locator('label[for="login-password"]').waitFor({ state: 'visible' });

await yeniSekme.locator('[data-testid="login-password"]').click();
await yeniSekme.locator('[data-testid="login-password"]').fill('Kayseri38tr.');

await yeniSekme.locator('[data-testid="login-button"]').click();

await yeniSekme.locator('[data-testid="checkout-button"]').waitFor({ state: 'visible' });

await yeniSekme.locator('.remove-item-text', { hasText: 'Sil' }).click();

await yeniSekme.waitForLoadState('load');

await yeniSekme.locator('[data-testid="navigation-logo-component"]').click();

await yeniSekme.waitForLoadState('load');

await yeniSekme.locator('.category-tab-text', { hasText: 'Kategoriler' }).hover();

await yeniSekme.locator('h3.category-title', { hasText: 'Erkek' }).waitFor({ state: 'visible' });

await yeniSekme.locator('h3.category-title', { hasText: 'Erkek' }).hover();

await yeniSekme.locator('a.subcategory-item-children-link', { hasText: 'Günlük Ayakkabı' }).waitFor({ state: 'visible' });

await yeniSekme.locator('a.subcategory-item-children-link', { hasText: 'Günlük Ayakkabı' }).click();

await yeniSekme.locator('h1[data-testid="title"]', { hasText: 'Erkek Günlük Ayakkabı' }).waitFor({ state: 'visible' });

await yeniSekme.locator('[data-testid="web-aggregations"]').evaluate(el => el.scrollTop += 500);

await yeniSekme.locator('.aggregation-header', { hasText: 'Renk' }).waitFor({ state: 'visible' });

await yeniSekme.locator('.aggregation-header', { hasText: 'Renk' }).click();

await yeniSekme.locator('.color-list-item-swatch.color-14').waitFor({ state: 'visible' });

await yeniSekme.locator('.color-list-item-swatch.color-14').click();

await yeniSekme.locator('h1[data-testid="title"]', { hasText: 'Erkek Siyah Günlük Ayakkabı' }).waitFor({ state: 'visible' });

await yeniSekme.locator('.aggregation-header', { hasText: 'Renk' }).click();

await yeniSekme.locator('.aggregation-header', { hasText: /^Fiyat$/ }).click();

await yeniSekme.locator('.radio-list-item-label', { hasText: '3000 TL - 4000 TL' }).waitFor({ state: 'visible' });

await yeniSekme.locator('.radio-list-item-label', { hasText: '3000 TL - 4000 TL' }).click();

await yeniSekme.evaluate(() => window.scrollBy(0, 400));

await yeniSekme.locator('button.select-box', { hasText: 'Önerilen Sıralama' }).waitFor({ state: 'visible' });

await yeniSekme.locator('button.select-box', { hasText: 'Önerilen Sıralama' }).click();

await yeniSekme.locator('ul.select-dropdown').waitFor({ state: 'visible' });

await yeniSekme.locator('ul.select-dropdown li', { hasText: 'En Yüksek Fiyat' }).click();

await yeniSekme.locator('.product-card[data-product-index="1"]').waitFor({ state: 'visible' });

await yeniSekme.locator('.product-card[data-product-index="1"]').click();

const [urunSayfasi] = await Promise.all([
    page.context().waitForEvent('page'), 
    yeniSekme.locator('.product-card[data-product-index="1"]').click(),
]);

await urunSayfasi.waitForLoadState('load');

await urunSayfasi.locator('p.add-to-cart-button-label', { hasText: 'Sepete Ekle' }).click();

await urunSayfasi.locator('.basket-count', { hasText: '1' }).waitFor({ state: 'visible' });

await urunSayfasi.locator('a.basket-wrapper-link').click();
  
await urunSayfasi.waitForLoadState('load');

await urunSayfasi.locator('.checkout-button-text-content', { hasText: 'Sepeti Onayla' }).click();

await urunSayfasi.locator('button.ty-plus-continue-without-add', { hasText: 'Eklemeden Devam Et' }).waitFor({ state: 'visible' });

await urunSayfasi.locator('button.ty-plus-continue-without-add', { hasText: 'Eklemeden Devam Et' }).click();

const adresEkleButonu = urunSayfasi.locator('.button-text', { hasText: 'Yeni Adres Ekle' });

if (await adresEkleButonu.isVisible({ timeout: 3000 })) {
    await adresEkleButonu.click();
    console.log("Popup otomatik gelmedi, butona tıklandı.");
} else {
    console.log("Popup zaten açık veya buton görünür değil");
}

await urunSayfasi.locator('input[name="name"]').waitFor({ state: 'visible' });

await urunSayfasi.locator('input[name="name"]').click();

await urunSayfasi.locator('input[name="name"]').fill('Enes');

await urunSayfasi.locator('input[name="surname"]').waitFor({ state: 'visible' });

await urunSayfasi.locator('input[name="surname"]').click();
await urunSayfasi.locator('input[name="surname"]').fill('Gunes');

await urunSayfasi.locator('input[name="phone"]').click();
await urunSayfasi.locator('input[name="phone"]').fill('5458359698'); 

const ilInput = urunSayfasi.locator('div[data-testid="select-input-container"]', { hasText: 'İl *' }).locator('input');
await ilInput.waitFor({ state: 'visible' });
await ilInput.click();
await ilInput.pressSequentially('İstanbul', { delay: 100 });
await ilInput.press('ArrowDown');
await ilInput.press('Enter');
await expect(ilInput).toHaveValue('İstanbul');


const ilceInput = urunSayfasi.locator('div[data-testid="select-input-container"]', { hasText: 'İlçe *' }).locator('input');
await ilceInput.waitFor({ state: 'visible', timeout: 5000 });
await ilceInput.click();
await ilceInput.pressSequentially('Esenler', { delay: 100 });
await ilceInput.press('ArrowDown');
await ilceInput.press('Enter');


const mahalleInput = urunSayfasi.locator('div[data-testid="select-input-container"]', { hasText: 'Mahalle *' }).locator('input');
await mahalleInput.waitFor({ state: 'visible', timeout: 5000 });
await mahalleInput.click();
await mahalleInput.pressSequentially('Turgut', { delay: 100 });
await mahalleInput.press('ArrowDown'); 
await mahalleInput.press('Enter');


const adresKutusu = urunSayfasi.locator('textarea[name="addressLine"]');
await adresKutusu.waitFor({ state: 'visible' });
await adresKutusu.click();
await adresKutusu.fill('Fatih Mahallesi, Atatürk Caddesi, No:38, Daire:5');
await expect(adresKutusu).toHaveValue(/Fatih Mahallesi/);

const rastgeleSayi = Math.floor(Math.random() * 999) + 1;
const dinamikAdresBasligi = `Test${rastgeleSayi}`;
const adresBasligiKutusu = urunSayfasi.locator('input[name="addressName"]');
await adresBasligiKutusu.waitFor({ state: 'visible' });
await adresBasligiKutusu.click();
await adresBasligiKutusu.fill(dinamikAdresBasligi);

const kaydetButonu = urunSayfasi.locator('button', { hasText: 'Kaydet' });
await kaydetButonu.waitFor({ state: 'visible' });
await kaydetButonu.click();


await urunSayfasi.locator('.close-icon.icon-red-void').waitFor({ state: 'visible'});

await urunSayfasi.locator('.close-icon.icon-red-void').click();

await urunSayfasi.locator('.p-close-icon.icon-red-void').waitFor({ state: 'visible'});

await urunSayfasi.locator('.p-close-icon.icon-red-void').click();

await urunSayfasi.goBack();

await urunSayfasi.waitForLoadState('load');

await urunSayfasi.locator('.remove-item-container', { hasText: 'Sil' }).waitFor({ state: 'visible'});
await urunSayfasi.locator('.remove-item-container', { hasText: 'Sil' }).click();

await urunSayfasi.locator('.removed-item-text', { hasText: 'ürünü sepetinden kaldırıldı' }).waitFor({ state: 'visible'});



});