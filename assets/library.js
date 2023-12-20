// ====NAV BAR MENU MOBILE====
function openNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.add('active');
}

function closeNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.remove('active');
}


// ===BUTTON DROP DOWN NATION===

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.button__dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}