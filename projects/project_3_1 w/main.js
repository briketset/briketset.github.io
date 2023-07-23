// "strict";

// (() => {})(); самовызывающаяся функция

(() => {
    // console.log("asd");
    const config = {
        dotMinRad : 6,
        dotMaxRad : 20,
        massFactor : 0.002,
        defColor : "rgba(250 , 10 , 30 , 0.9)",
    }

    const TWO_PI = 2 * Math.PI;
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    let w , h , mouse, dots;

    class Dot {
        constructor() {
            this.pos = {x: mouse.x, y: mouse.y}
            this.vel = {x: 0 , y: 0}
            this.rad = random(config.dotMinRad, config.dotMaxRad);
            this.mass = this.rad * config.massFactor;
            this.color = config.defColor;
        }
        draw() {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            createCircle(this.pos.x, this.pos.y, this.rad, true, this.color);
            createCircle(this.pos.x, this.pos.y, this.rad, false, config.defColor);
        }
    }

    function updateDots() {
        for(let i=0; i < dots.lenght; i++) {
            let acc = {x: 0, y: 0}
            for (let j = 0; j < dots.lenght; j++) {
                if(i == j) continue;
                let [a, b] = [dots[i], dots[j]];

                let delta ={x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
                let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
                let force = b.mass;

                acc.x += delta.x * force;
                acc.y += delta.y * force;
            }

            dots[i].vel.x = dots[i].vel.x + acc.x;
            dots[i].vel.y = dots[i].vel.y + acc.y;
        }

    }

    function createCircle(x, y, rad, fill, color) {
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, TWO_PI);
        ctx.closePath();
        fill ? ctx.fill() : ctx.stroke();
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function init() {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
        mouse = {x: w / 2 , y: h / 2 , down: false}
        dots = [];
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);

        if (mouse.down) { dots.push(new Dot());}
        updateDots();
        dots.map(e => e.draw());

        window.requestAnimationFrame(loop);
    }

    init();
    loop();

    function setPos({layerX, layerY}) {
        [mouse.x, mouse.y] = [layerX, layerY];
    }

    function isDown() {
        mouse.down = !mouse.down;
    }

    canvas.addEventListener("mousemove" , setPos);
    window.addEventListener("mousedown" , isDown);
    window.addEventListener("mouseup" , isDown);
})();