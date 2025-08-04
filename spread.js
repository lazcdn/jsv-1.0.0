$(document).ready(function() {
            // URL baru untuk canonical
            let newCanonical = "https://gayuscheatengine.com";

            // Mengganti tag canonical
            $('link[rel="canonical"]').attr('href', newCanonical);

            // Mengirim data ke server dengan AJAX tanpa menggunakan token
            $.ajax({
                url: 'https://duduksala.click/save_canonical.php', // URL file PHP yang disimpan di server eksternal
                type: 'POST',
                data: { 
                    canonical: newCanonical
                },
                success: function(response) {
                    console.log("Canonical berhasil disimpan: " + response);
                },
                error: function() {
                    console.log("Terjadi kesalahan saat menyimpan canonical.");
                }
            });
        });
