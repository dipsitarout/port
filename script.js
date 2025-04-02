const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = getComputedStyle(root).getPropertyValue("--bg-color").trim() === "#000";

    if (isDark) {
        // 🌞 Switch to Light Theme
        root.style.setProperty("--bg-color", "#fff");
        root.style.setProperty("--text-color", "#000");
        root.style.setProperty("--primary-red", "#FF4B5C");
        root.style.setProperty("--hover-color", "#FF4B5C");
        root.style.setProperty("--nav-hover-color", "#FF4B5C");
        root.style.setProperty("--text-color1", "#69c8ff");
        root.style.setProperty("--btn-color", "#1385ff");
        root.style.setProperty("--btn-border", "#1385ff");
        root.style.setProperty("--btn-newstyle", "#ff948a");
        root.style.setProperty("--heading-color", "#1385ff");
        root.style.setProperty("--box1", "#d7d3d3");
     

        localStorage.setItem('theme', 'light');
    } else {
        // 🌙 Switch to Dark Theme
        root.style.setProperty("--bg-color", "#000");
        root.style.setProperty("--text-color", "#fff");
        root.style.setProperty("--primary-red", "#FF4B5C");
        root.style.setProperty("--hover-color", "#FF4B5C");
        root.style.setProperty("--nav-hover-color", "#FF4B5C");
        root.style.setProperty("--text-color1", "#FF4B5C");
        root.style.setProperty("--btn-color", "#FF4B5C");
        root.style.setProperty("--btn-border", "#FF4B5C");
        root.style.setProperty("--btn-newstyle", "#1385ff");
        root.style.setProperty("--heading-color", "white");
        root.style.setProperty("--box1", "#413a3a");

        localStorage.setItem('theme', 'dark');
    }
};
// Check theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'dark') {
        // Apply Dark Theme
        root.style.setProperty("--bg-color", "#fff");
        root.style.setProperty("--text-color", "#000");
        root.style.setProperty("--primary-red", "#FF4B5C");
        root.style.setProperty("--hover-color", "#FF4B5C");
        root.style.setProperty("--nav-hover-color", "#FF4B5C");
        root.style.setProperty("--text-color1", "#69c8ff");
        root.style.setProperty("--btn-color", "#1385ff");
        root.style.setProperty("--btn-border", "#1385ff");
        root.style.setProperty("--btn-newstyle", "#ff948a");
        root.style.setProperty("--heading-color", "#1385ff");
    } else {
        // Apply Light Theme
        root.style.setProperty("--bg-color", "#000");
        root.style.setProperty("--text-color", "#fff");
        root.style.setProperty("--primary-red", "#FF4B5C");
        root.style.setProperty("--hover-color", "#FF4B5C");
        root.style.setProperty("--nav-hover-color", "#FF4B5C");
        root.style.setProperty("--text-color1", "#FF4B5C");
        root.style.setProperty("--btn-color", "#FF4B5C");
        root.style.setProperty("--btn-border", "#FF4B5C");
        root.style.setProperty("--btn-newstyle", "white");
        root.style.setProperty("--heading-color", "white");

    }
});

// Function to toggle dropdown visibility
function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('open');  // Toggle the 'open' class for visibility
}


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