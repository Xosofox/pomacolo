(function () {
    var body = document.getElementsByTagName("body")[0];
    if (!body) {
        console.log("Please move me at the end of the body, not into the <head>");
        return false;
    }
    var original_console_log = console.log;
    var ul = document.createElement("ul");
    ul.style.position = "absolute";
    ul.style.bottom = 0;
    ul.style.right = 0;
    body.appendChild(ul);
    console.log = function () {
        var args = Array.prototype.slice.call(arguments);
        var li = document.createElement("li");
        li.innerHTML = args.join(" ");
        ul.appendChild(li);
        original_console_log.apply(this, arguments);
        setTimeout(function () {
            ul.removeChild(li);
        }, 5000);
    }
}());
