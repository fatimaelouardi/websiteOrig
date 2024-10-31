function toggleMenu() {
    const sidebar = document.getElementById("sidebar-menu");
    const sidebarLinks = document.getElementById("sidebar-links");
    const navLinks = document.getElementById("nav-links").innerHTML;

    // Ajouter les liens de navigation au sidebar
    sidebarLinks.innerHTML = navLinks;

    // Toggle sidebar visibility
    sidebar.classList.toggle("active");
}
