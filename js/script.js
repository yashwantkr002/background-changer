function fun(cal) {
    let body = document.querySelector(".main");
    body.style.backgroundColor = cal;
    let text = document.querySelectorAll(".text");
    // Adjust text color for dark backgrounds
    if (cal === "#000000" || cal === "#222" || cal === "#4fd1c5") {
        for (let ele of text) {
            ele.style.color = "#fff";
        }
    } else {
        for (let ele of text) {
            ele.style.color = "#222";
        }
    }
}

// Keyboard accessibility for color buttons
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.col').forEach(function(el) {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                el.click();
            }
        });
    });
});
