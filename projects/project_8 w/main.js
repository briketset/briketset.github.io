"use strict";

import {Obj3D} from '../object.js'
import {Matrix} from '../matrix.js'
import {ManipulateMatrix} from '../manipulatematrix.js'

let Obj = new Obj3D
let Mtx = new Matrix
let ManipulMtrx = new ManipulateMatrix

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
// canvas.width = 500
// canvas.height = 500
let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight

let dw = w / 2
let dh = h / 2

let cub = Obj.cub()


// class Cub {
//     constructor() {
//         this.point = Obj.cub()
//     }
// }

// let cub = new Cub()

console.log(cub)

function initCub(dx, dy, dz, a, b, c) {


    for (let i = 0; i < cub.length; i++) {
        cub[i] = ManipulMtrx.multiple( Mtx.matrixMove(dx,dy,dz) , cub[i] )
        cub[i] = ManipulMtrx.multiple( Mtx.matrixScale(1,1,1) , cub[i] )
        cub[i] = ManipulMtrx.multiple( Mtx.matrixRotateX(Math.PI * a) , cub[i] )
        cub[i] = ManipulMtrx.multiple( Mtx.matrixRotateY(Math.PI * b) , cub[i] )
        cub[i] = ManipulMtrx.multiple( Mtx.matrixRotateZ(Math.PI * c) , cub[i] )
    }

}

initCub(0, 0, 0, 0, 0, 0)


let alpha = 0
let point = []



function graph() {

    ctx.clearRect(0, 0, w, h)
    

    alpha = alpha + 0.01

    for (let i = 0; i < cub.length; i++) {
        point[i] = ManipulMtrx.multiple(Mtx.matrixScale(100,100,100), cub[i])
        point[i] = ManipulMtrx.multiple(Mtx.matrixRotateX(alpha * 1), point[i])
        point[i] = ManipulMtrx.multiple(Mtx.matrixRotateY(alpha * 1.1) , point[i])
        point[i] = ManipulMtrx.multiple(Mtx.matrixRotateZ(alpha * 1.3) , point[i])
        // point[i] = ManipulMtrx.multiple(Mtx.matrixPerspective(5.1, 100.005, 1000, 0.00006), point[i])
        point[i] = ManipulMtrx.multiple(Mtx.matrixPerspective4(0.003, 0.0, 0.00), point[i])
        console.log(point[0])
        point[i] = ManipulMtrx.multiple(Mtx.matrixPerspective5(point[i][3]), point[i])
        console.log(point[0])
        // point[i][0] = point[i][0] / (point[i][3] )
        // point[i][1] = point[i][1] / (point[i][3] 
    };

    // console.log(cub[2])

    // console.log(point[0])

    for (let i = 0; i < cub.length; i++) {
        
        
        // console.log(point)

        ctx.fillStyle = "green";

        if (i == 0) {
            ctx.strokeStyle = "green";
        }
        else {
            if ( i == cub.length - 1 ) {
                ctx.strokeStyle = "red";
            }
            else {
                ctx.strokeStyle = "black";
            }
            
        }
        

        ctx.beginPath()
        // ctx.arc(+pointA2[0] + 100, +pointA2[1] + 100, 5, 0, Math.PI * 2);
        ctx.arc(+point[i][0] + dw, +point[i][1] + dh, 5, 0, Math.PI * 2); 
        ctx.closePath()
        ctx.stroke()
        // console.log(point[i])
        // ctx.fill()

        // console.log(`i = ${i}   ${point[i]}`)
        // console.log(`i = ${7}   ${point[7]}`)
        // console.log(point)
        // console.log(point[i][0])

        // for (let j = 0; j < cub.length; j++) {
            // ctx.beginPath()

            // ctx.moveTo(+point[j][0] + dw , +point[j][1] + dh)
            // if ( i < (cub.length - 1) ) {
            // let p = i+1
            // ctx.lineTo(+point[p][0] + dw, +point[p][1] + dh);           
            // }
            // else {        
            //     ctx.lineTo(+point[0][0] + dw, +point[0][1] + dh);                 
            // }

            // ctx.closePath()

            // ctx.stroke()
                
            // }


            ctx.fillStyle = "green";

            ctx.beginPath()
            ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            ctx.lineTo(+point[1][0] + dw , +point[1][1] + dh)
            ctx.lineTo(+point[2][0] + dw , +point[2][1] + dh)
            ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh)
            ctx.closePath()

            ctx.fill()


            ctx.fillStyle = "olive";

            ctx.beginPath()
            ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            ctx.lineTo(+point[1][0] + dw , +point[1][1] + dh)
            ctx.lineTo(+point[5][0] + dw , +point[5][1] + dh)
            ctx.lineTo(+point[4][0] + dw , +point[4][1] + dh)
            ctx.closePath()

            ctx.fill()

            ctx.fillStyle = "red";

            ctx.beginPath()
            ctx.moveTo(+point[2][0] + dw , +point[2][1] + dh)
            ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh)
            ctx.lineTo(+point[7][0] + dw , +point[7][1] + dh)
            ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh)
            ctx.closePath()

            ctx.fill()

            ctx.fillStyle = "blue";

            ctx.beginPath()
            ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh)
            ctx.lineTo(+point[7][0] + dw , +point[7][1] + dh)
            ctx.lineTo(+point[4][0] + dw , +point[4][1] + dh)
            ctx.closePath()

            ctx.fill()

            ctx.fillStyle = "orange";

            ctx.beginPath()
            ctx.moveTo(+point[1][0] + dw , +point[1][1] + dh)
            ctx.lineTo(+point[2][0] + dw , +point[2][1] + dh)
            ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh)
            ctx.lineTo(+point[5][0] + dw , +point[5][1] + dh)
            ctx.closePath()

            ctx.fill()

            ctx.fillStyle = "lime";

            ctx.beginPath()
            ctx.moveTo(+point[4][0] + dw , +point[4][1] + dh)
            ctx.lineTo(+point[5][0] + dw , +point[5][1] + dh)
            ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh)
            ctx.lineTo(+point[7][0] + dw , +point[7][1] + dh)
            ctx.closePath()

            ctx.fill()

            // ctx.beginPath()

            // ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            // ctx.lineTo(+point[1][0] + dw , +point[1][1] + dh);           

            // ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            // ctx.lineTo(+point[4][0] + dw , +point[4][1] + dh); 

            // ctx.moveTo(+point[0][0] + dw , +point[0][1] + dh)
            // ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh); 



            // ctx.moveTo(+point[2][0] + dw , +point[2][1] + dh)
            // ctx.lineTo(+point[1][0] + dw , +point[1][1] + dh);           

            // ctx.moveTo(+point[2][0] + dw , +point[2][1] + dh)
            // ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh); 

            // ctx.moveTo(+point[2][0] + dw , +point[2][1] + dh)
            // ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh); 


            // ctx.moveTo(+point[5][0] + dw , +point[5][1] + dh)
            // ctx.lineTo(+point[1][0] + dw , +point[1][1] + dh);           

            // ctx.moveTo(+point[5][0] + dw , +point[5][1] + dh)
            // ctx.lineTo(+point[4][0] + dw , +point[4][1] + dh); 

            // ctx.moveTo(+point[5][0] + dw , +point[5][1] + dh)
            // ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh); 




            // ctx.moveTo(+point[7][0] + dw , +point[7][1] + dh)
            // ctx.lineTo(+point[3][0] + dw , +point[3][1] + dh);           

            // ctx.moveTo(+point[7][0] + dw , +point[7][1] + dh)
            // ctx.lineTo(+point[4][0] + dw , +point[4][1] + dh); 

            // ctx.moveTo(+point[7][0] + dw , +point[7][1] + dh)
            // ctx.lineTo(+point[6][0] + dw , +point[6][1] + dh); 

            // ctx.closePath()

            // ctx.stroke()


        // ctx.beginPath()
        // ctx.moveTo(+point[i][0] +200, +point[i][1] +200)
        // // ctx.lineTo(+point[i][0] +200, +point[i][1] +200)
        // // console.log(point[1][0])
        // // ctx.lineTo(0, 0)
        // // ctx.lineTo(+point[i][0] +200, +point[i][1] +200);
        // if ( i < (cub.length - 1) ) {
        //     // console.log(`i = ${i}   ${point[i]}`)
        //     let j = i+1
        //     // console.log(point[0][0])
        //     // ctx.lineTo(+point[i+1][0] +200, +point[i+1][1] +200); 
        //     // ctx.lineTo(+point[i+1][0] +200, +point[i][1] +200);
        //     ctx.lineTo(+point[j][0] +200, +point[j][1] +200);
            
        // }
        // else {   
        //     // console.log(+point[1][0])         
        //     ctx.lineTo(+point[0][0] +200, +point[0][1] +200);  
            
        // }
        // ctx.closePath()

        // ctx.stroke()
        // ctx.fill()


        
    }
    // console.log(point)
}

setInterval( graph , 10);


