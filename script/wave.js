// source : https://velog.io/@jakeseo_me/%EC%9B%B9-%EC%95%84%ED%8A%B8%EC%9B%8C%ED%81%AC-1-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8C%8C%EB%8F%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0

// let section = $('.section-area');
let sections = document.querySelectorAll('.section-area');

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        $('#section1').append(this.canvas);

        this.wave = new Wave();
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

        //사이즈 변화 대응 이벤트 리스너 */
        window.addEventListener('resize', this.resize.bind(this), {
            once: false,
            passive: false,
            capture: false,
        });

    }

    resize() {
        this.stageWidth = $('#section1').height();
        this.stageHeight = $('#section1').height();

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2, 2);
        this.wave.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.wave.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

class Wave {
    constructor(color) {
        this.color = color;
        this.points = [];
        this.numberOfPoints = 7;
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

class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fieldY = y;
        this.speed = 0.07;
        this.cur = index;
        this.max = Math.random() * 30 + 30;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
}

window.onload = () => {
    new App();
};
