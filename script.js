const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
let btn = document.getElementById('btn125');



if(bar) {
bar.addEventListener('click', () => {
    nav.classList.add('active');
})
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
    }

    btn.addEventListener("click", function(){
        window.location.href = "shop.html";
    });

  

