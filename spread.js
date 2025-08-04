(function () {
  const newDomain = 'https://gayuscheatengine.com/';

  // Ambil <link rel="canonical">
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) return;

  // Simpan canonical lama & canonical baru, normalisasi tanpa trailing slash
  const oldCanonical = canonicalLink.href.replace(/\/+$/, '');
  const newCanonical = newDomain.replace(/\/+$/, '');

  // Ganti href di canonical
  canonicalLink.setAttribute('href', newCanonical);

  // Ganti semua <a> yang href-nya sama dengan canonical (abaikan trailing slash)
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    try {
      const absoluteHref = new URL(href, window.location.origin).href.replace(/\/+$/, '');

      if (absoluteHref === oldCanonical) {
        // Ganti link ke domain baru
        link.setAttribute('href', newCanonical);
      }
    } catch (e) {
      // skip if invalid URL
    }
  });

})();
