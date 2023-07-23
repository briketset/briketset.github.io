"use sctrict";

let cl_1 = document.getElementById("cl_1")

let t = 0

function f() {

    let sx = 170 * Math.sin(t)
    let sy = 30 * Math.sin(t + Math.PI / 2)

    cl_1.style.left = 230 + 1.0 * sx + "px"
    cl_1.style.top =  100 + 1.0 * sy + "px"

    cl_1.style.transform = `rotateY(${t / ( 2 * Math.PI) * 360}deg)`
    t += 0.05
}


setInterval(f, 20);