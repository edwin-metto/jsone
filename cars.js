let blue_btn = document.getElementById('blue_btn');
let red_btn = document.getElementById('red_btn');
let pink_btn = document.getElementById('pink_btn');
let image =document.getElementById('car_image');

blue_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'blue';
    changable.style.color = 'blue';
    image.setAttribute('src','blue.jpg');

});
red_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'red';
    changable.style.color = 'red';
    image.setAttribute('src','red.webp');
});
pink_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'pink';
    changable.style.color = 'pink';
    image.setAttribute('src','pink.webp');
});

changable.addEventListener('click', function(){
    alert(' congrats man!');
});