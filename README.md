# sonmezmustafa.com

Kişisel site ve blog. GitHub Pages üzerinde Jekyll ile derlenir; yerelde kurulum gerekmez.

## Yeni yazı

Türkçe yazı `_posts/tr/`, İngilizce yazı `_posts/en/` klasörüne girer. Dosya adı
`YYYY-AA-GG-adres-parcasi.md` biçimindedir; adres parçası yazının adresi olur
(`/blog/adres-parcasi/` ve `/en/blog/adres-parcasi/`).

```markdown
---
title: Yazının başlığı
ref: ortak-anahtar
description: Arama sonucunda görünecek tek cümle.
---

Yazının metni.
```

`ref` aynı yazının iki dildeki sürümünü birbirine bağlar: iki dosyada aynı değer
olursa dil bağlantısı çeviriye gider, yoksa öbür dilin ana sayfasına gider.

## Sayfalar

- `index.html` — Türkçe ana sayfa, `en/index.html` — İngilizce ana sayfa
- `_data/i18n.yml` — menü ve arayüz metinleri
- `assets/css/style.css` — görünüm
