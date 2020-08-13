 let change = true;
function changeColor(event) {
  if(change ==  true){
    event.currentTarget.style.backgroundColor = 'red';
    change = false
  }else{
    event.currentTarget.style.backgroundColor = 'blue';
    change = true
  }
}

let elements = document.querySelectorAll('div');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}

