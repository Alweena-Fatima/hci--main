document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    const darkModeStyles = document.createElement('style');
    darkModeStyles.textContent = `
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }
        nav.navbar.dark-mode {
            background-color: #1c2833 !important; /* Darker shade of blue-gray */
        }
        .card.dark-mode {
            background-color: #1e1e1e;
            border-color: #333;
        }
        .card-title.dark-mode, .card-text.dark-mode, .nav-link.dark-mode {
            color: #e0e0e0 !important;
        }
        footer.dark-mode {
            background-color: #1f1f1f;
            color: #e0e0e0;
        }
        .btn-success.dark-mode {
            background-color: #22c55e;
            border-color: #22c55e;
        }
        input.form-control.dark-mode, textarea.form-control.dark-mode {
            background-color: #2c2c2c;
            color: #e0e0e0;
            border: 1px solid #555;
        }
        .btn-outline-secondary.dark-mode {
            color: #e0e0e0;
            border-color: #e0e0e0;
        }
    `;
    document.head.appendChild(darkModeStyles);

    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            toggleDarkMode();
        });
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('nav.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.card, .card-title, .card-text, .nav-link, .form-control, .btn-success').forEach(el => el.classList.toggle('dark-mode'));
        darkModeToggle.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = "😎";
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.innerHTML = "🌚";
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.querySelector('nav.navbar').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('.card, .card-title, .card-text, .nav-link, .form-control, .btn-success').forEach(el => el.classList.add('dark-mode'));
        darkModeToggle.classList.add('dark-mode');
        darkModeToggle.innerHTML = "😎";
    }
});
