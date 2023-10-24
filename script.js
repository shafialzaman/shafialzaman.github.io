document.addEventListener("DOMContentLoaded", function() {
    // 1. Smooth Scrolling
    let scrollLinks = document.querySelectorAll("a[href^='#']");
    
    scrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Dark Mode Toggle
    let darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = "Toggle Dark Mode";
    darkModeToggle.className = "fixed bottom-5 right-5 p-2 bg-gray-900 text-white rounded cursor-pointer";

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            document.body.setAttribute('style', 'background-color: #121212; color: white;');
        } else {
            document.body.setAttribute('style', '');
        }
    });

    document.body.appendChild(darkModeToggle);
});
