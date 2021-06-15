
var sum = 0;
var container = document.getElementById("container1");
for (var i = 1; i <= 4; i++) {
    var div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.background = "gray";
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.padding = "2px 2px 2px 2px";
    div.style.marginTop = "3px";
    div.innerText = i;
    div.onclick = function() {
        applyAdder(parseInt(this.innerText));
    }

    container.appendChild(div);
}

function applyAdder(i) {
    sum += i;
    document.getElementById("sum").value = sum;
}