const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

const saved = localStorage.getItem('wood-theme');
if (saved === 'dark') body.classList.add('dark');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('wood-theme', body.classList.contains('dark') ? 'dark' : 'light');
});
