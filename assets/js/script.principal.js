const open = document.getElementById('openMenu');
const close = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const banner_next = document.getElementById('banner-next');
const banner_active = document.getElementById('active');
const item = document.getElementById('item');

open.addEventListener('click', function(){
    menu.style.display='flex';
    menu.style.right = (menu.offsetWidth *-1) + 'px';

    setTimeout(function(){
        menu.style.opacity='1';
        menu.style.right='0';
        openMenu.style.display='none';
    }, 10);
})


close.addEventListener('click', function(){
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth *-1) + 'px';

    setTimeout(function(){
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
})

banner_next.addEventListener('click', function(){
    banner_active.display = 'none';
})