let element = document.querySelectorAll('.color p');

function random(){
    let x = Math.floor(Math.random() * (256 - 0) + 0 );
    let y = Math.floor(Math.random() * (256 - 0) + 0 );
    let z = Math.floor(Math.random() * (256 - 0) + 0 );
    return `rgb(${x}, ${y}, ${z})`;
}

function touch(event){
    let change = event.currentTarget;
    change.style.color = random();
}

function black(event){
    let dark = event.currentTarget;
    dark.style.color = 'black';
}
for(let i = 0; i < element.length; i++){
    element[i].addEventListener('mouseenter', touch);
    element[i].addEventListener('mouseleave', black);
}