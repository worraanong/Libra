function addDiv(parent, cls) {
    const el = document.createElement("div");
    el.className = cls;
    parent.appendChild(el);
    return el;
}

function addSpan(text, parent) {
    const el = document.createElement("span");
    const innerText = document.createTextNode(text);
    el.appendChild(innerText);
    parent.appendChild(el);
}

function addNumberInput(id, parent, placeholder = "") {
    const el = document.createElement("input");
    el.setAttribute("id", id);
    el.setAttribute("type", "number");
    el.setAttribute("min", "1");
    el.setAttribute("step", "1");
    el.setAttribute("max", maxManaFold);
    el.setAttribute("value", 1);
    el.placeholder = placeholder; 
    el.classList.add("dim");

    parent.appendChild(el);
    return el;
}

function addImg(width) {
    const el = document.createElement("img");
    el.width = width;
    el.src = "";
    return el;
}