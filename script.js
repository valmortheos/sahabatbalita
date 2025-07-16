document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = this.getAttribute("href");

            if (href && href.endsWith(".html")) {
                event.preventDefault();
                window.location.href = href;
            }
        });
    });
});
