function toggleNav() {
    var menu = document.getElementById("menuLateral");
    var mainContent = document.getElementById("mainContent");
    
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        menu.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}
