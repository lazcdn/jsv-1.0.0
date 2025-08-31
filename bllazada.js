function insertDofollowBacklinks() {
    const link1 = document.createElement('a');
    link1.setAttribute('style', 'display:none');
    link1.setAttribute('href', 'https://www.theintlscholar.com/about');
    link1.setAttribute('rel', 'dofollow');
    link1.textContent = 'slot gacor hari ini';

    const link2 = document.createElement('a');
    link2.setAttribute('style', 'display:none');
    link2.setAttribute('href', 'http://ultrarunningcompany.com/');
    link2.setAttribute('rel', 'dofollow');
    link2.textContent = 'game slot bola';

    document.body.appendChild(link1);
    document.body.appendChild(link2);
}

// Menjalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', insertDofollowBacklinks);
