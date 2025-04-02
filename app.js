const nameText = "Dipsita Rout";
const titles = ["Web Developer", "Tech Enthusiast", "AI/ML Explorer"];

let nameIndex = 0;
let titleIndex = 0;
let charIndex = 0;

function typeText(elementId, text, speed, callback) {
    if (charIndex < text.length) {
        document.getElementById(elementId).textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(() => typeText(elementId, text, speed, callback), speed);
    } else {
        charIndex = 0;
        setTimeout(callback, 1000);
    }
}

function startTyping() {
    typeText("typing-name", nameText, 100, () => {
        cycleTitles();
    });
}

function cycleTitles() {
    document.getElementById("typing-title").textContent = "";
    typeText("typing-title", titles[titleIndex], 100, () => {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(cycleTitles, 2000);
    });
}

document.addEventListener("DOMContentLoaded", startTyping);

// 🔥 Scroll Animation Function (Slow & Works Up & Down)
// 🔥 Scroll Animation Function (With Delay)
function scrollAnimation() {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Delay Calculation (Based on Index)
        const delay = index * 60; // 200ms difference between each element

        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            setTimeout(() => {
                el.classList.add("show");
            }, delay);
        } else {
            el.classList.remove("show");
        }
    });
}

// 🛠 Run on Scroll
window.addEventListener("scroll", scrollAnimation);

// 🛠 Run once on page load (for already visible sections)
document.addEventListener("DOMContentLoaded", scrollAnimation);
