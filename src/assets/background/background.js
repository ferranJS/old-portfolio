
let speed = 0.4;

let MAX_BALLS = 180; //default
let STRING_MAX = 160;
let STRING_MIN = 50;
let balls = [];
let alto;
let ancho;
let alpha;
let lineWidth;
let canvas;

function setup() {
  alto = windowHeight; 
  ancho = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
  ); // Esta medida es más precisa que windowWidth
  // console.log("document.body.scrollWidth: ", document.body.scrollWidth);
  // console.log("document.documentElement.scrollWidth: ", document.documentElement.scrollWidth);
  // console.log("document.documentElement.offsetWidth: ", document.documentElement.offsetWidth);
  // console.log("document.body.offsetWidth: ", document.body.offsetWidth);
  // console.log("document.documentElement.clientWidth: ", document.documentElement.clientWidth);
  // console.log("document.body.clientWidth: ", document.body.clientWidth);    
  frameRate(27);

  console.log("windowHeight: ", windowHeight);
  MAX_BALLS = (windowHeight + ancho)/13; //is the real number of balls
  console.log(MAX_BALLS)
  if(windowHeight > ancho) {
    MAX_BALLS = MAX_BALLS;
    STRING_MIN = 15;   
    speed = 0.5;
  }
  
  canvas = createCanvas(ancho, alto * 3.06);
  canvas.parent("appContainer");
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  if(windowHeight < ancho) {
  //pc
    while(balls.length < MAX_BALLS) {
      var randX = Math.random() * (ancho + 10) - 10;
      var randY = Math.random() * (windowHeight * 3 + 10) - 10;

      // Alrededor del logo
      if(randY <= windowHeight * 0.37) {
        balls.push(new Ball(randX, randY));
      }
      else if(randY >= windowHeight * 0.65 && randY <= windowHeight * 0.9) {
        balls.push(new Ball(randX, randY));
      }
      //inbetween
      else if(randY >= windowHeight * 1.8 && randY <= windowHeight * 2.35) {
        balls.push(new Ball(randX, randY));
      }
      // Los lados
      else if(randX <= ancho * 0.14) {
        balls.push(new Ball(randX, randY));
      }
      else if(randX >= ancho * 0.78) {
        balls.push(new Ball(randX, randY));
      }
    }  
  }else {
  //móvil
    while(balls.length < MAX_BALLS) {
      var randX = Math.random() * (ancho + 10) - 10;
      var randY = Math.random() * (windowHeight * 3 + 10) - 10;
      if(randY <= windowHeight * 0.37) {
        balls.push(new Ball(randX, randY));
      }
      else if(randY >= windowHeight * 0.65) {
        balls.push(new Ball(randX, randY));
      }
    }
  }
  //color y alphaarencia de todo
  alpha = 150;
  lineWidth = 0.4;
  if(windowHeight > windowWidth) {
    alpha = 20;
    lineWidth = 1.5;
  }
}

function draw() {
      
  clear();

  // background parcial
  noStroke();
  quad(0, windowHeight * 1.08, ancho+20, windowHeight * 1.02, ancho+20, windowHeight * 2.95, 0, windowHeight * 2.99);

  // Dibuja las Líneas que unen (a optimizar mucho)
  strokeWeight(lineWidth);   
  //coste de n^2
  balls.forEach(p => {               //for (let i = 0; i < items.length - 1; i++) {          ASÍ NUNCA SE 
    balls.forEach(q => {               //  for (let j = i + 1; j < items.length; j++) {     COMPARA A SI MISMO!
      // Using  x * x instead of Math.pow for efficiency
      if(p != q && Math.abs(q.y - p.y) < STRING_MAX && Math.abs(q.x - p.x) < STRING_MAX){     //p!=q ahorra n ejecuciones, lo otro ya no sé  :/
        let z = Math.sqrt((q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y));

        if(z < STRING_MAX && z > STRING_MIN) {
          if(p.y > alto + 45) {
            stroke(0, alpha);
          } else {
            stroke(200, alpha);
          }
          line(p.x, p.y, q.x, q.y);
        }
      }
    });
  });  

  // Dibuja las bolas
  balls.forEach(p => {
    p.show(p5);
  });
}

class Ball {
  x;
  y;
  lineWidth = 5;
  hoverRadius = 200;
  alpha = 160

  constructor(x, y) {
    this.x = x;
    this.y = y;
    if(document.body.scrollHeight > document.body.scrollWidth) {
      this.alpha = 50;
      this.hoverRadius = 100;
    }
  }
  
  show(p5) {      
    //umbral para el color de cada bola
    var yi = -this.x * 0.029166 + windowHeight * 1.08;

    if(this.y > yi) {
      stroke(0, this.alpha);
    } else {
      stroke(255, this.alpha);
    }

    strokeWeight(this.lineWidth);
    point(this.x, this.y);

    // Reacción con el cursor
    if(this.cerca(mouseX, mouseY)) {
      let xIncrement = this.x - mouseX
      let yIncrement = this.y - mouseY
      if (Math.abs(xIncrement) > Math.abs(yIncrement))
        this.x += (xIncrement > 0 ? this.hoverRadius - xIncrement : -this.hoverRadius - xIncrement)*speed;
      else
        this.y += (yIncrement > 0 ? this.hoverRadius - yIncrement : -this.hoverRadius - yIncrement)*speed;
    } else {
      // El tembleque
      var tembleque = 1.7;
      var randX = Math.random() * tembleque - tembleque/2;
      var randY = Math.random() * tembleque - tembleque/2;

      this.x += randX
      this.y += randY
    }      
  }
  
  cerca(x, y) {
    let z = Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    return z < this.hoverRadius;
  }
}