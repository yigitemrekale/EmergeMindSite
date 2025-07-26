document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector('.theme-switch__checkbox');
  const navbar = document.querySelector('.navbar');
  const hizmetler = document.getElementById('hizmetlerimiz');

  // --- Tema Ayarları ---
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // Mobil: toggle gizle, sistem tercihini uygula, localStorage yok say
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      document.body.classList.add("dark-theme");
      navbar.classList.add("navbar-darkmode");
      navbar.classList.remove("navbar-white");
    } else {
      document.body.classList.remove("dark-theme");
      navbar.classList.remove("navbar-darkmode");
      navbar.classList.add("navbar-white");
    }

    if (themeToggle) themeToggle.style.display = "none";

  } else {
    // Masaüstü: localStorage'tan tema oku ve uygula
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      navbar.classList.add("navbar-darkmode");
      navbar.classList.remove("navbar-white");
      if (themeToggle) themeToggle.checked = true;
    } else {
      document.body.classList.remove("dark-theme");
      navbar.classList.remove("navbar-darkmode");
      navbar.classList.add("navbar-white");
      if (themeToggle) themeToggle.checked = false;
    }

    if (themeToggle) {
      themeToggle.style.display = "inline-block";
      themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
          document.body.classList.add("dark-theme");
          navbar.classList.add("navbar-darkmode");
          navbar.classList.remove("navbar-white");
          localStorage.setItem("theme", "dark");
        } else {
          document.body.classList.remove("dark-theme");
          navbar.classList.remove("navbar-darkmode");
          navbar.classList.add("navbar-white");
          localStorage.setItem("theme", "light");
        }
      });
    }
  }

  // --- Hizmetlerimiz Bölümü Animasyonu ---
  if (hizmetler) {
    setTimeout(() => {
      hizmetler.classList.add('slide-in');
    }, 100);
  }
});

// Eğer farklı theme-switch checkbox’ların varsa senkronize etmek için:
document.querySelectorAll('.theme-switch__checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checked = checkbox.checked;
    document.body.classList.toggle('dark-theme', checked);

    // Diğer checkbox’ları senkronize et
    document.querySelectorAll('.theme-switch__checkbox').forEach(cb => {
      if (cb !== checkbox) cb.checked = checked;
    });
  });
});

// #themeToggle id’si olan element varsa, ona tıklayınca toggle yap:
const themeToggleBtn = document.querySelector('#themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}
