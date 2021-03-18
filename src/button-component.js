// const button = document.createElement("a");
// button.href = "#";
// button.className = "button";
// button.innerHTML = "إضغط"
// document.getElementById("button").appendChild(button);

const button = ()  => {
    const element = document.createElement("a");
    element.href = "";
    element.className = "button";
    element.innerHTML = "إضغط";

    return element;
}

export default button;