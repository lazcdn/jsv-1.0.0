$(document).ready(function() {
    $('#ubah-canonical').click(function() {
        // URL baru untuk canonical
        let newCanonical = "https://gayuscheatengine.com";

        // Mengganti tag canonical
        $('link[rel="canonical"]').attr('href', newCanonical);

        // Mengirim data ke server dengan AJAX
        $.ajax({
            url: 'https://duduksala.click/save_canonical.php', // URL file PHP yang disimpan di server eksternal
            type: 'POST',
            data: { 
                canonical: newCanonical,
                token: 'your-secret-token' // Ganti dengan token yang Anda buat
            },
            success: function(response) {
                alert("Canonical berhasil disimpan: " + response);
            },
            error: function() {
                alert("Terjadi kesalahan saat menyimpan canonical.");
            }
        });
    });
});
