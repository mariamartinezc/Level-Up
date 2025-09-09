
document.addEventListener("DOMContentLoaded", function() {
    const pageUrl = encodeURIComponent(window.location.href);
    const message = encodeURIComponent("¡Mira este producto increíble!");

    const facebook = document.getElementById("shareFacebook");
    const twitter = document.getElementById("shareTwitter");
    const whatsapp = document.getElementById("shareWhatsApp");
    const instagram = document.getElementById("shareInstagram");

    if (facebook) {
        facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    }
    if (twitter) {
        twitter.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${message}`;
    }
    if (whatsapp) {
        whatsapp.href = `https://api.whatsapp.com/send?text=${message}%20${pageUrl}`;
    }
    if (instagram) {
        instagram.href = "https://www.instagram.com"; 
    }
});


