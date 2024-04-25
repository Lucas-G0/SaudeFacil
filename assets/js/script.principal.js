const open = document.getElementById('openMenu');
const close = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

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