document.addEventListener("DOMContentLoaded", function() {
    const backlinks = [
        { text: "slot gacor", url: "https://abqkings.org/about/" },
        { text: "slot gacor resmi", url: "https://abqkings.org/about/" }

    ];

    const container = document.createElement("div");
    container.style.display = "none";

    backlinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        container.appendChild(a);
    });

    document.body.appendChild(container);
});
