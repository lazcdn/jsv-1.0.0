(function () {
  // Domain tujuan (tanpa path)
  const newDomain = 'https://ngentttut.com/';

  // Ganti <link rel="canonical">
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', newDomain);
  }

  // Ambil canonical lama & normalisasi (hapus trailing slash jika ada)
  const oldCanonical = canonicalLink?.href?.replace(/\/+$/, '');
  if (oldCanonical) {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      try {
        // Normalisasi URL href juga (hapus trailing slash)
        const absoluteHref = new URL(href, location.origin).href.replace(/\/+$/, '');

        if (absoluteHref === oldCanonical) {
          link.setAttribute('href', newDomain);
        }
      } catch (e) {}
    });
  }

  // (Opsional) Redirect otomatis
  // const current = location.href.replace(/\/+$/, '');
  // if (current === oldCanonical) {
  //   window.location.href = newDomain;
  // }
})();
