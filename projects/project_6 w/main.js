"use strict";

import {Primitive} from "./class_Primitive.js"
import {Matrix} from "./class_Matrix.js"
import {multiple} from "./f_Manipul_Matrix.js"

let PRM = new Primitive()
let MTX = new Matrix()
let f_mult = multiple


let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let w = canvas.width = window.innerWidth - 17
let h = canvas.height = window.innerHeight - 17

let dw = w / 2
let dh = h / 2
let k = 0.8

let l = h/2 * k
let cub_ish = PRM.p_cub(l,l,l)
let cub = []

let alpha = 0.005


function move() {
    // alpha = alpha + 0.0001

    for (let i = 0; i < cub_ish.length; i++) {
        // console.log(cub_ish[i])
        // cub[i] = cub_ish[i]
        cub_ish[i] = f_mult(MTX.matrixRotateX(alpha * 1.1), cub_ish[i])
        cub_ish[i] = f_mult(MTX.matrixRotateY(alpha * 1.2), cub_ish[i])
        cub_ish[i] = f_mult(MTX.matrixRotateZ(alpha * 1.3), cub_ish[i])
        // cub[i] = cub_ish[i]
        // console.log(cub_ish[i][3])
        cub[i] = f_mult(MTX.matrixPerspective(0.003), cub_ish[i])
        cub[i] = f_mult(MTX.matrixScale( 1 / cub[i][3] , 1 / cub[i][3] , 1 / cub[i][3]) , cub[i])
    }

}

function draw() {

    ctx.strokeStyle = "red"
    ctx.fillStyle = "green"

    ctx.clearRect(0, 0, w, h)


        ctx.fillStyle = "green";

        ctx.beginPath()
        ctx.moveTo(+cub[0][0] + dw , +cub[0][1] + dh)
        ctx.lineTo(+cub[1][0] + dw , +cub[1][1] + dh)
        ctx.lineTo(+cub[2][0] + dw , +cub[2][1] + dh)
        ctx.lineTo(+cub[3][0] + dw , +cub[3][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "olive";

        ctx.beginPath()
        ctx.moveTo(+cub[0][0] + dw , +cub[0][1] + dh)
        ctx.lineTo(+cub[1][0] + dw , +cub[1][1] + dh)
        ctx.lineTo(+cub[5][0] + dw , +cub[5][1] + dh)
        ctx.lineTo(+cub[4][0] + dw , +cub[4][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "red";

        ctx.beginPath()
        ctx.moveTo(+cub[2][0] + dw , +cub[2][1] + dh)
        ctx.lineTo(+cub[3][0] + dw , +cub[3][1] + dh)
        ctx.lineTo(+cub[7][0] + dw , +cub[7][1] + dh)
        ctx.lineTo(+cub[6][0] + dw , +cub[6][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "blue";

        ctx.beginPath()
        ctx.moveTo(+cub[0][0] + dw , +cub[0][1] + dh)
        ctx.lineTo(+cub[3][0] + dw , +cub[3][1] + dh)
        ctx.lineTo(+cub[7][0] + dw , +cub[7][1] + dh)
        ctx.lineTo(+cub[4][0] + dw , +cub[4][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "orange";

        ctx.beginPath()
        ctx.moveTo(+cub[1][0] + dw , +cub[1][1] + dh)
        ctx.lineTo(+cub[2][0] + dw , +cub[2][1] + dh)
        ctx.lineTo(+cub[6][0] + dw , +cub[6][1] + dh)
        ctx.lineTo(+cub[5][0] + dw , +cub[5][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "lime";

        ctx.beginPath()
        ctx.moveTo(+cub[4][0] + dw , +cub[4][1] + dh)
        ctx.lineTo(+cub[5][0] + dw , +cub[5][1] + dh)
        ctx.lineTo(+cub[6][0] + dw , +cub[6][1] + dh)
        ctx.lineTo(+cub[7][0] + dw , +cub[7][1] + dh)
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()
  
}

function main() {

    move()
    draw()
}

setInterval(main, 10)