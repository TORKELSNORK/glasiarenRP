//Navbar
function hideIconbar(){
    var Iconbar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    Iconbar.setAttribute("style", "display:none");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var Iconbar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    Iconbar.setAttribute("style", "display:block");
    navigation.classList.add("hide");
}