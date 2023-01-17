function model_camera_orbit(value) {
    cake_model.setAttribute("camera-orbit", value);
}

function model_camera_target(value) {
    cake_model.setAttribute("camera-target", value);
}

function model_zoom(value) {
    cake_model.zoom(value);
}

const cake_model = document.querySelector("#candy-cake");
const default_model_duration = cake_model.getAttribute("interpolation-decay");
const button_container = document.querySelector("div.buttons");
const next_button = document.querySelector("div.buttons > button.next");
const back_button = document.querySelector("div.buttons > button.back");
const progress_feedback = document.querySelector("div.progress-feedback");
const progress_dot = document.querySelector("div.progress-feedback > div.progress-dot")


cake_model.onload = e => {
    setTimeout(() => {
        model_camera_orbit("0deg 75deg 0deg", 50);
        cake_model.zoom(-2);
    }, 1000);
}

let step = 0;

function update_scene(step_increment) {
    document.querySelector(".progress-feedback > .i-" + step.toString()).classList.remove("active")
    document.querySelector(".birthday-text.text-" + step.toString()).classList.remove("active")
    step += step_increment;
    document.querySelector(".progress-feedback > .i-" + step.toString()).classList.add("active")
    document.querySelector(".birthday-text.text-" + step.toString()).classList.add("active")

    progress_dot.style.top = 1 + (step * 22) + "px";

    if (step == 0) {
        back_button.disabled = true;
        next_button.disabled = false;
        model_camera_orbit("0deg 75deg 100%", 50);
        model_camera_target("0m -2m 1m");
    }
    else if (step == 1) {
        back_button.disabled = false;
        next_button.disabled = false;
        model_camera_orbit("65deg 45deg 50%", 50);
        model_camera_target("1m -2m 1m");
    }
    else if (step == 2) {
        model_camera_orbit("125deg 75deg 70%", 50);
        model_camera_target("-4m -3m 1m");
        back_button.disabled = false;
        next_button.disabled = true;
    }
}

next_button.addEventListener("click", e => {
    update_scene(1);
})

back_button.addEventListener("click", e => {
    update_scene(-1);
})











