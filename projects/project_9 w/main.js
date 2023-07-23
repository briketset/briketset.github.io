"use strict";

let color =["red" , "blue" , "green" , "black" , "orange" , "silver" , "yellow" ,"aqua" , "olive" , "lime" ];

class Pipl {
    constructor(name , x , y , r , color) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.work = () => { 
            console.log(`${this.name} working`) ; 
        } ;
    }   
}

let pipls = [];

let canvas = document.getElementById("canvas_1");
let ctx = canvas.getContext("2d");


for (let i = 0; i < 100; i++) {
    pipls.push( new Pipl("pipl_" + i , 
                        Math.floor(Math.random()*500) ,
                        Math.floor(Math.random()*500) ,
                        Math.floor(Math.random()*50) ,
                        color[Math.floor(Math.random()*9)] ,
                        ));
    ctx.beginPath();
    ctx.arc(pipls[i].x , pipls[i].y , pipls[i].r , 0 , 2 * Math.PI);
    ctx.fillStyle = pipls[i].color;
    ctx.fill();
    ctx.stroke();                    

};

