window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
            buttonClick(e.target.id);
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key >= 0 && e.key <= 9 || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "(" || e.key === ")" || e.key === ".") {
            entries(e.key);
        } else if (e.key === "Enter") {
            calculate();
        } else if (e.key === "Backspace") {
            erase();
        } else if (e.key === "Escape") {
            erase();
        }
    });

    function buttonClick(buttonId) {
        var button = document.getElementById(buttonId);
        var value = button.value;
        if (value === "=") {
            calculate();
        } else if (value === "C") {
            erase();
        } else {
            entries(value);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            input.value = eval(input.value.replace('x', '*'));
        } catch (error) {
            alert("Invalid expression");
            erase();
        }
    }

    function erase() {
        input.value = "";
    }
};