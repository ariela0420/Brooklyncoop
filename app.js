document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.getElementById('opt-1');
    const dropdownMenu1 = document.getElementById('menu-1');

    navItem.addEventListener('mouseenter', () => {
        dropdownMenu1.style.display = 'block';
    });

    navItem.addEventListener('mouseleave', (e) => {
        if (!dropdownMenu1.contains(e.relatedTarget)) {
            dropdownMenu1.style.display = 'none';
        }
    });

    dropdownMenu1.addEventListener('mouseenter', () => {
        dropdownMenu1.style.display = 'block';
    });

    dropdownMenu1.addEventListener('mouseleave', () => {
        dropdownMenu1.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.getElementById('opt-2');
    const dropdownMenu2 = document.getElementById('menu-2');

    navItem.addEventListener('mouseenter', () => {
        dropdownMenu2.style.display = 'block';
    });

    navItem.addEventListener('mouseleave', (e) => {
        if (!dropdownMenu2.contains(e.relatedTarget)) {
            dropdownMenu2.style.display = 'none';
        }
    });

    dropdownMenu2.addEventListener('mouseenter', () => {
        dropdownMenu2.style.display = 'block';
    });

    dropdownMenu2.addEventListener('mouseleave', () => {
        dropdownMenu2.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.getElementById('opt-3');
    const dropdownMenu3 = document.getElementById('menu-3');

    navItem.addEventListener('mouseenter', () => {
        dropdownMenu3.style.display = 'block';
    });

    navItem.addEventListener('mouseleave', (e) => {
        if (!dropdownMenu3.contains(e.relatedTarget)) {
            dropdownMenu3.style.display = 'none';
        }
    });

    dropdownMenu3.addEventListener('mouseenter', () => {
        dropdownMenu3.style.display = 'block';
    });

    dropdownMenu3.addEventListener('mouseleave', () => {
        dropdownMenu3.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.getElementById('opt-4');
    const dropdownMenu4 = document.getElementById('menu-4');

    navItem.addEventListener('mouseenter', () => {
        dropdownMenu4.style.display = 'block';
    });

    navItem.addEventListener('mouseleave', (e) => {
        if (!dropdownMenu4.contains(e.relatedTarget)) {
            dropdownMenu4.style.display = 'none';
        }
    });

    dropdownMenu4.addEventListener('mouseenter', () => {
        dropdownMenu4.style.display = 'block';
    });

    dropdownMenu4.addEventListener('mouseleave', () => {
        dropdownMenu4.style.display = 'none';
    });
});

// side menu 
document.addEventListener("DOMContentLoaded", () => {
    const menuTrigger = document.getElementById("menu-trigger");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-btn");


    menuTrigger.addEventListener("click", () => {
        sideMenu.style.right = "0";
    });

    closeBtn.addEventListener("click", () => {
        sideMenu.style.right = "-300px";
    });
});


