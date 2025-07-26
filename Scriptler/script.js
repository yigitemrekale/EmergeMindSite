document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector('.theme-switch__checkbox');
  const navbar = document.querySelector('.navbar');

  // Mobil mi kontrol et (örnek: 768px altı mobil)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // Mobilde: Toggle'ı gizle (CSS ile de gizleyebilirsin), 
    // Temayı sistem tercihine göre ayarla, localStorage'ı dikkate alma
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      document.body.classList.add("dark-theme");
      navbar.classList.add("navbar-darkmode");
      navbar.classList.remove("navbar-white");
    } else {
      document.body.classList.remove("dark-theme");
      navbar.classList.remove("navbar-darkmode");
      navbar.classList.add("navbar-white");
    }

    if (themeToggle) {
      themeToggle.style.display = "none"; // toggle gizle
    }

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

    // Toggle varsa değişiklik olayını ayarla
    if (themeToggle) {
      themeToggle.style.display = "inline-block"; // toggle görünür
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
});
document.addEventListener('DOMContentLoaded', () => {
  const themeCheckboxes = document.querySelectorAll('.theme-switch__checkbox');
  const footer = document.getElementById('footer');
  const body = document.body;

  function applyTheme(isDark) {
    if (isDark) {
      footer.classList.add('darkmode');
      body.classList.add('darkmode');
    } else {
      footer.classList.remove('darkmode');
      body.classList.remove('darkmode');
    }
  }

  themeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      applyTheme(checkbox.checked);
      
      // Tüm theme-switch checkboxlarını senkronize et
      themeCheckboxes.forEach(cb => {
        if (cb !== checkbox) cb.checked = checkbox.checked;
      });
    });
  });
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
