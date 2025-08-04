(function () {
  const newDomain = 'https://gayuscheatengine.com/';

  // Cari <link rel="canonical"> dan ambil canonical lama
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  const ampLink = document.querySelector('link[rel="amphtml"]'); // Jangan disentuh

  if (canonicalLink) {
    canonicalLink.setAttribute('href', newDomain); // ganti canonical ke domain baru
  }

  // Ambil canonical lama (sebelum diubah), normalisasi tanpa trailing slash
  const oldCanonical = canonicalLink?.href?.replace(/\/+$/, '');
  const newCanonical = newDomain.replace(/\/+$/, '');

  // Ganti semua <a> yang href-nya sama persis dengan canonical lama
  if (oldCanonical && newCanonical) {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      try {
        const absHref = new URL(href, location.origin).href.replace(/\/+$/, '');

        if (absHref === oldCanonical) {
          // ganti link ke domain baru
          link.setAttribute('href', newCanonical);
        }
      } catch (e) {}
    });
  }

})();
