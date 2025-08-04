(function () {
  const newDomain = 'https://gayuscheatengine.com/';
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', newDomain);
  }
})();
