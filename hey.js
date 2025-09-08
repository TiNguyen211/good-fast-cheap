function checkRule(clicked) {
    let good = document.getElementById("good");
    let cheap = document.getElementById("cheap");
    let fast = document.getElementById("fast");

    if (good.checked && cheap.checked && fast.checked) {
        if (clicked === "good") {
            fast.checked = false;
        } else if (clicked === "cheap") {
            good.checked = false;
        } else {
            cheap.checked = false;
        }
    }
}