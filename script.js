// ✅ Logs a message to verify JavaScript is loaded
console.log("JavaScript file loaded successfully.");

// ✅ Mobile Navigation Toggle (For Hamburger Menu)
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// ✅ Lazy Load Images for Faster Performance
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => observer.observe(img));
});

// Spintax Parser Function
function parseSpintax(text) {
    const regex = /\{([^{}]+)\}/g;
    return text.replace(regex, function(match, content) {
        const options = content.split('|');
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    });
}

// Function to Apply Spintax to All Text Nodes
function applySpintaxToAllTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = parseSpintax(node.nodeValue);
    } else {
        node.childNodes.forEach(child => applySpintaxToAllTextNodes(child));
    }
}

// Apply Spintax When the Page Loads
document.addEventListener("DOMContentLoaded", function () {
    applySpintaxToAllTextNodes(document.body);
});