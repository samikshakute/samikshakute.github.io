const modeToggle = document.getElementById('mode-toggle');
let isDarkMode = false;

modeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    modeToggle.classList.remove('fa-sun');
    modeToggle.classList.add('fa-moon');
    document.body.classList.add('dark-mode');
  } else {
    modeToggle.classList.remove('fa-moon');
    modeToggle.classList.add('fa-sun');
    document.body.classList.remove('dark-mode');
  }
});