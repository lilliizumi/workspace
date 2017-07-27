alert ("Hello!")

document.getElementById('side1').onclick = switchGray;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}
