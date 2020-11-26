import { refs, Theme } from './links';

const { $themToogleBtn, $body } = refs;

$themToogleBtn.addEventListener('change', handelSwitchTheme);

function handelSwitchTheme(e) {
  const { checked } = e.target;

  if (checked) {
    $body.classList.add(Theme.DARK);
    $body.classList.remove(Theme.LIGHT);
  } else {
    $body.classList.remove(Theme.DARK);
    $body.classList.add(Theme.LIGHT);
  }
  getCurrentValuTheme(e);
}

function getCurrentValuTheme({ target }) {
  const { checked } = target;

  const theme = checked ? Theme.DARK : Theme.LIGHT;

  localStorage.setItem('checked-value', theme);

  saveTheme();
}

function saveTheme() {
  const savedCurrentTheme = localStorage.getItem('checked-value');

  if (savedCurrentTheme) {
    $themToogleBtn.checked = savedCurrentTheme === Theme.DARK;
  }

  return savedCurrentTheme ? savedCurrentTheme : Theme.LIGHT;
}

function invokeTheme() {
  const theme = saveTheme();
  $body.classList.add(theme);
}

invokeTheme();
