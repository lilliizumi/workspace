alert ("Hello!")

document.getElementById('categories').onmouseover = switchBlue;

function switchBlue() {
  document.body.style.color = 'blue';
}

document.getElementById('posts').onmouseover = switchBlack;

function switchBlack() {
  document.body.style.color = 'black';
}