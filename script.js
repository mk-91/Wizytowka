const buttonPoz = document.getElementById('buttonPoz');
const buttonKro = document.getElementById('buttonKro');
const poznan = document.getElementById('poznan');
const krotoszyn = document.getElementById('krotoszyn');

buttonPoz.addEventListener('click', function () {
  krotoszyn.setAttribute('style', 'display:none');
  poznan.setAttribute('style', 'display:block');
});

buttonKro.addEventListener('click', function () {
  poznan.setAttribute('style', 'display:none');
  krotoszyn.setAttribute('style', 'display:block');
});
