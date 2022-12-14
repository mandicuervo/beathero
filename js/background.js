class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.vy = 2;
        this.img = new Image();
        this.img.src = './images/midi.png';
    } 

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}