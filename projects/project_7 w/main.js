"use strict";

import {Primitive} from "./class_Primitive.js"
import {Matrix} from "./class_Matrix.js"

let PRM = new Primitive()
let MTX = new Matrix()

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let w = canvas.width = window.innerWidth - 17
let h = canvas.height = window.innerHeight - 17

let dw = w / 2
let dh = h / 2


let length = 1


let cub = []
let cub_out = []

for (let i = 0; i < 10; i++) {
    let var_1 = Math.random() * 100

   
    cub[i] = PRM.cub( var_1 , var_1 , var_1 ) 
    

}

// let cub_1 = PRM.cub( length , length , length )
// cub_1 = MTX.scale( cub_1 , 100 )

// let cub_2 = PRM.cub( length , length , length )
// cub_2 = MTX.scale( cub_2 , 50 )
// cub_2 = MTX.moveXYZ( cub_2 , 100 , 0 , 0)


// let cub_1_out = []
// let cub_2_out = []
let alpha = 0.005

let al = []
let d = []

for (let i = 0; i < cub.length; i++) {
    al[i] = Math.random() * alpha
    let fg = 400
    d[i] =  [[(Math.random() - 0.5 ) * fg ],  [(Math.random() - 0.5 ) * fg], [(Math.random() - 0.5 ) * fg ]]
   cub[i] = MTX.moveXYZ(cub[i] , d[i][0] , d[i][1] ,d[i][2])   
    // console.log(d[i])
    // d[i] = [0,0]
} 

console.log(d)
console.log(d[1][0])
console.log(d[1][1])
// let sdvig = []

// for (let i = 0; i < cub.length; i++) {
//     sdvig = [ d[i][0] , d[i][1], d[i][2] ]
    
// }


function move() {




    for (let i = 0; i < cub.length; i++) {

        cub[i] = MTX.rotateX( cub[i] , (al[i] * 1.1) )
        cub[i] = MTX.rotateY( cub[i] , (al[i] * 1.2) )
        cub[i] = MTX.rotateZ( cub[i] , (al[i] * 1.3) )
        cub_out[i] = MTX.perspective( cub[i] , 0.003 )
        
    }

    // cub_1 = MTX.rotateX( cub_1 , (alpha * 1.1) )
    // cub_1 = MTX.rotateY( cub_1 , (alpha * 1.2) )
    // cub_1 = MTX.rotateZ( cub_1 , (alpha * 1.3) )
    // cub_1_out = MTX.perspective( cub_1 , 0.003 )


    // cub_2 = MTX.rotateX( cub_2 , (alpha * 1.4) )
    // cub_2 = MTX.rotateY( cub_2 , (alpha * 1.5) )
    // cub_2 = MTX.rotateZ( cub_2 , (alpha * 1.6) )
    // cub_2_out = MTX.perspective( cub_2 , 0.003 )



}



function draw(cubs , d) {

    ctx.strokeStyle = "red"
    ctx.fillStyle = "green"

    // ctx.clearRect(0, 0, w, h)


        ctx.fillStyle = "green";

        ctx.beginPath()
        ctx.moveTo(+cubs[0][0] + dw + +d[0], +cubs[0][1] + dh + +d[1])
        ctx.lineTo(+cubs[1][0] + dw + +d[0], +cubs[1][1] + dh + +d[1])
        ctx.lineTo(+cubs[2][0] + dw + +d[0], +cubs[2][1] + dh + +d[1])
        ctx.lineTo(+cubs[3][0] + dw + +d[0], +cubs[3][1] + dh + +d[1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "olive";

        ctx.beginPath()
        ctx.moveTo(+cubs[0][0] + dw  + +d[0], +cubs[0][1] + dh + +d[1])
        ctx.lineTo(+cubs[1][0] + dw  + +d[0], +cubs[1][1] + dh + +d[1])
        ctx.lineTo(+cubs[5][0] + dw  + +d[0], +cubs[5][1] + dh + +d[1])
        ctx.lineTo(+cubs[4][0] + dw  + +d[0], +cubs[4][1] + dh + +d[1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "red";

        ctx.beginPath()
        ctx.moveTo(+cubs[2][0] + dw + +d[0], +cubs[2][1] + dh + +d[1])
        ctx.lineTo(+cubs[3][0] + dw + +d[0], +cubs[3][1] + dh + +d[1])
        ctx.lineTo(+cubs[7][0] + dw + +d[0], +cubs[7][1] + dh + +d[1])
        ctx.lineTo(+cubs[6][0] + dw + +d[0], +cubs[6][1] + dh + +d[1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "blue";

        ctx.beginPath()
        ctx.moveTo(+cubs[0][0] + dw + +d[0], +cubs[0][1] + dh + +d[1])
        ctx.lineTo(+cubs[3][0] + dw + +d[0], +cubs[3][1] + dh + +d[1])
        ctx.lineTo(+cubs[7][0] + dw + +d[0], +cubs[7][1] + dh + +d[1])
        ctx.lineTo(+cubs[4][0] + dw + +d[0], +cubs[4][1] + dh + +d[1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "orange";

        ctx.beginPath()
        ctx.moveTo(+cubs[1][0] + dw + +d[0], +cubs[1][1] + dh + +d[1])
        ctx.lineTo(+cubs[2][0] + dw + +d[0], +cubs[2][1] + dh + +d[1])
        ctx.lineTo(+cubs[6][0] + dw + +d[0], +cubs[6][1] + dh + +d[1])
        ctx.lineTo(+cubs[5][0] + dw + +d[0], +cubs[5][1] + dh + +d[1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "lime";

        ctx.beginPath()
        ctx.moveTo(+cubs[4][0] + dw + +d[0], +cubs[4][1] + dh + +d[1])
        ctx.lineTo(+cubs[5][0] + dw + +d[0], +cubs[5][1] + dh + +d[1])
        ctx.lineTo(+cubs[6][0] + dw + +d[0], +cubs[6][1] + dh + +d[1])
        ctx.lineTo(+cubs[7][0] + dw + +d[0], +cubs[7][1] + dh + +d[1])

        // console.log(d[7][0])
        // console.log(d[7][1])
        ctx.closePath()

        // ctx.fill()
        ctx.stroke()
  
}

function main() {

    move()
    ctx.clearRect(0, 0, w, h)
    // draw(cub_1_out)
    // draw(cub_2_out)

    for (let i = 0; i < cub.length; i++) {
        draw(cub[i] , d[i])
        
    }
}

setInterval(main, 10)