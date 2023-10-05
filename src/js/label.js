const languageSwitch = document.getElementById('languageSwitch');
const languageLabel = document.getElementById('languageLabel');

languageSwitch.addEventListener('change', function () {
  if (this.checked) {
    languageLabel.innerText = 'English';
  } else {
    languageLabel.innerText = 'Українська';
  }
});