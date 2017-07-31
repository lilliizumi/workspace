 // alert("Hello!")

 document.getElementById('gray-button').onclick = grayFunction;

 document.getElementById('white-button').onclick = whiteFunction;


 function whiteFunction(){
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'gray';
 }

function grayFunction() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}



// grayFunction();


