"strict";

let win = window;
let x , y ;

win.onmousemove = (e) => {

    x = event.x ;
    y = event.y ;

    if (event.which == 1) {
        func();
    };

    if (event.which == 3) {
        func_cl();
    };
}

let canvas = document.getElementById("canvas");
let canvas_width = canvas.width = window.innerWidth ;
let vanvas_height = canvas.height = window.innerHeight ;

let ctx = canvas.getContext("2d");

function func() {

    ctx.beginPath();
    ctx.arc(x , y , 10 , 0 , 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

function func_cl() {

    ctx.clearRect(x - 50 , y - 50, 100 , 100 );  
}


