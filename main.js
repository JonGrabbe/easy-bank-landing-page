function openMenu() {
    document.getElementById('header').classList.remove('dropdown-menu-closed');
    document.getElementById('header').classList.add('dropdown-menu-opened');
}

function closeMenu() {
    document.getElementById('header').classList.remove('dropdown-menu-opened');
    document.getElementById('header').classList.add('dropdown-menu-closed');
}