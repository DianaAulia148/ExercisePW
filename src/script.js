function toggleMenu() { 
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    console.log("Menu toggled");

    // Menambahkan event listener ke setiap item menu
    const menuItems = navLinks.getElementsByTagName('li');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            navLinks.classList.remove('active');  // Menutup menu setelah item diklik
            console.log("Menu closed after clicking item");
        });
    }
}
