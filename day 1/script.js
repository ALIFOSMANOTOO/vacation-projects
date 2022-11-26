let colors = document.querySelector(".colors")

let colordb = {
    blue: "btn-primary",
    green: "btn-success",
    red: "btn-danger",
    yellow: "btn-warning",
    white: "btn-light",

};

let emptyArray = [];

function changeColor(color) {
    let btn = document.querySelectorAll("#box-btn")
    console.log(btn)
    btn.forEach((item) => {
        emptyArray.push(item.classList[1])
        item.classList.remove(item.classList[1]);
        item.classList.add(colordb[color]);
    });
}

function defaultColors() {
    let btn = document.querySelectorAll("#box-btn")
    btn.forEach((item) => {
        item.classList.remove(item.classList[1]);

    });
    for (let x = 0; x < btn.length; x++) {
        btn[x].classList.add(emptyArray[x])
    }

}

function onchange(e) {
    let color = e.target.value;
    console.log(color);

    switch (color) {
        case "red":
            changeColor(color);
            break;
        case "yellow":
            changeColor(color);
            break;
        case "green":
            changeColor(color);
            break;
        case "blue":
            changeColor(color);
            break;
        case "white":
            changeColor(color);
            break;
        default:
            defaultColors();
    }
}



colors.addEventListener("change", (e) => onchange(e))