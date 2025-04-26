function pop(popup) {
    popup.style.display = "block";
    // popup.classList.remove("fade-out");
    popup.classList.add("active"); 
}

function hide(popup) {
    popup.style.display = "none";
    popup.classList.remove("active"); 
    // popup.classList.add("fade-out"); 
    // const makeInvisible = () => {
    //     popup.style.display = "none";
    // }
    // delay(makeInvisible,3)
}

window.onclick = function (event) {
    if (event.target == menuPopUp) {
        menuPopUp.style.display = "none";
    }
}