var canvas = document.getElementById('canvas1');
console.log(canvas);
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let maxR = 50;
let minR = 10;

var colorArray =[
    "Yellow",
    "Pink",
    "Blue",
    "Black",
    "Purple",
    "Red",
];


//draw some circles and bounce them around the screen
function Circle(x, y, xSpeed, ySpeed, radius){
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.radius = radius;
    //this.maxR = radiusMin;
    this.minR = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x + this.radius > canvas.width || this.x - this.radius < 0 ){
            this.xSpeed = -this.xSpeed;
        }
    
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0 ){
            this.ySpeed = -this.ySpeed;
        }


    }
}

//array to store arcs
let circleArray = [];

//for window resize to regenerate circles
function init(){
    circleArray = [];

    for(let i =0; i < 1; i++){
        let r = Math.random() * (25 -5*2) +5;
        let x = Math.random() * (canvas.width - r*2) + r;
        let y = Math.random() * (canvas.height - r*2) +r;
        let speedX = Math.random() * 4 - 2;
        let speedY = Math.random() * 4 - 2;
        circleArray.push(new Circle(x, y, speedX, speedY, r));
    }
}


//console.log(circleArray);

let xA = 55;
let yA = 55;

let xSpeed = 5;
let ySpeed = 5;
let aRadius = 50;
function animate(){
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < circleArray.length; i++){
        //calls circle draw method
        circleArray[i].draw();
        //calls circle update method
        circleArray[i].update();
    }

    //calss the animatefunction recursively
    requestAnimationFrame(animate);
}
init();
animate();