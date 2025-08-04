$(document).ready(function() {
    let newCanonical = "https://gayuscheatengine.com";
    
    // Mengubah tag canonical di tampilan
    $('link[rel="canonical"]').attr('href', newCanonical);

    // Mengirim permintaan untuk menyimpan canonical
    $.ajax({
        url: 'https://duduksala.click/update_canonical.php', // Ganti dengan URL API yang benar
        type: 'POST',
        data: { canonical: newCanonical },
        success: function(response) {
            console.log("Canonical berhasil disimpan: " + response);
        },
        error: function() {
            console.log("Terjadi kesalahan saat menyimpan canonical.");
        }
    });
});
