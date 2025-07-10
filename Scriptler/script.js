const themeToggle = document.querySelector('.theme-switch__checkbox');
const navbar = document.querySelector('.navbar');

// Sayfa yüklendiğinde temayı kontrol et
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
    enableDarkMode();
  }
});

// Tema geçiş fonksiyonları
function enableDarkMode() {
  navbar.classList.add('navbar-darkmode');
  navbar.classList.remove('navbar-white');
  localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
  navbar.classList.remove('navbar-darkmode');
  navbar.classList.add('navbar-white');
  localStorage.setItem('theme', 'light');
}

// Değişiklik olduğunda uygula
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});
