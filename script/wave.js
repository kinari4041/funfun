import {Point} from './point.js';

export class Wave {
    constructor(color) {
        this.color = color;
        this.points = [];
        this.numberOfPoints = 8;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 1.5;
        
        this.pointGap = this.stageWidth / (this.numberOfPoints - 1);

        this.init();
    }

    init() {
        for (let i = 0; i < this.numberOfPoints; i++) {
            this.points[i] = new Point(i, this.pointGap * i, this.centerY);
        }
    }

    draw(ctx) {

        ctx.beginPath();

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 0; i < this.numberOfPoints; i++) {

            // ctx.arc(this.points[i].x, this.points[i].y, 30, 0, 2 * Math.PI);

            //ctx.lineTo(this.points[i].x, this.points[i].y);

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;

            if (i != 0 && i != this.numberOfPoints - 1) {
                this.points[i].update();
            }
        }
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(0, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.points[0].y);

        ctx.fillStyle = '#BCE858';
        ctx.fill();

        ctx.closePath();
    }
}