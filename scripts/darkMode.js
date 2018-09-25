function toggle() {
    var themeButton = document.getElementById("darkM");
    if (themeButton.innerHTML === "Enable Light Mode"){
        themeButton.innerHTML = "Enable Dark Mode";
        document.body.style.backgroundColor = "#f5f5f5";
        var svg5 = document.getElementsByClassName('st5');
        for (var i = 0; i < svg5.length; i++) {
            svg5[i].style.fill = "rgba(0, 0, 0, 0.1)";
        }
        var svg3 = document.getElementsByClassName('st3');
        for (var i = 0; i < svg3.length; i++) {
            svg3[i].style.fill = "#f5f5f5";
        }
        var svg4 = document.getElementsByClassName('st4');
        for (var i = 0; i < svg4.length; i++) {
            svg4[i].style.fill = "#757575";
        }
    }
    else {
        themeButton.innerHTML = "Enable Light Mode";
        document.body.style.backgroundColor = "#202124";
        var svg5 = document.getElementsByClassName('st5');
        for (var i = 0; i < svg5.length; i++) {
            svg5[i].style.fill = "rgba(255, 255, 255, 0.1)";
        }
        var svg3 = document.getElementsByClassName('st3');
        for (var i = 0; i < svg3.length; i++) {
            svg3[i].style.fill = "#212121";
        }
        var svg4 = document.getElementsByClassName('st4');
        for (var i = 0; i < svg4.length; i++) {
            svg4[i].style.fill = "#dfe0e4";
        }
    }
}