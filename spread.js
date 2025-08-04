$(document).ready(function() {
    let newCanonical = "https://gayuscheatengine.com";
    
    // Mengubah tag canonical di tampilan
    $('link[rel="canonical"]').attr('href', newCanonical);

    console.log("Mengirim permintaan untuk menyimpan canonical: ", newCanonical);

    // Mengirim permintaan untuk menyimpan canonical
    $.ajax({
        url: 'https://duduksala.click/update_canonical.php',
        type: 'POST',
        data: { canonical: newCanonical },
        success: function(response) {
            console.log("Respon dari server: ", response);
            try {
                const jsonResponse = JSON.parse(response);
                if (jsonResponse.status === 'success') {
                    console.log("Berhasil memperbarui URL canonical.");
                } else {
                    console.error("Kesalahan dari server: ", jsonResponse.message);
                }
            } catch (e) {
                console.error("Kesalahan parsing JSON: ", e);
            }
        },
        error: function(xhr, status, error) {
            console.error("Terjadi kesalahan saat menyimpan canonical:", status, error);
            console.error("Detail respon:", xhr.responseText);
        }
    });
});
