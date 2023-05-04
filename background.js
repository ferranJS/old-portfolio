class Ball {
  p5;
  x;
  y;
  vx;
  vy;
  sW;
  r;

  constructor(x, y, p5) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.sW = 4.5;
    this.r = 70;
    this.p5 = p5;
  }

  show() {
    // Color depending on background

    var transp = 160;
    if (this.p5.windowHeight > this.p5.windowWidth) {
      transp = 50;
      this.sW = 6;
    }

    //umbral para el color de cada bola
    var yi = -this.x * 0.029166 + this.p5.windowHeight * 1.08;

    if (this.y > yi) {
      this.p5.stroke(0, transp);
    } else {
      this.p5.stroke(255, transp);
    }

    this.p5.strokeWeight(this.sW);
    this.p5.point(this.x, this.y);

    // Reacción con el cursor
    if (this.cerca(this.p5.mouseX, this.p5.mouseY)) {
      if (this.p5.windowHeight > this.p5.windowWidth) {
        this.x += (this.x - this.p5.mouseX) * 0.15;
        this.y += (this.y - this.p5.mouseY) * 0.15;

        t = 3;
      } else {
        //las bolas se aproximan al cursor, queda más smooth que si se alejan
        this.x -= (this.x - this.p5.mouseX) * 0.1;
        this.y -= (this.y - this.p5.mouseY) * 0.1;
      }
    } else {
      // El tembleque
      var t = 1.5;
      var randX = Math.random() * t - t / 2;
      var randY = Math.random() * t - t / 2;

      this.position(this.x + randX, this.y + randY);
    }
  }

  position(x, y) {
    this.x = x;
    this.y = y;
  }

  cerca(x, y) {
    let z = Math.sqrt(
      (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)
    );
    return z < this.r;
  }
}

import p5 from "node  p5";

class Background {
  MAX_BALLS = 200; //default
  STRING_MAX = 140;
  STRING_MIN = 30;
  balls = [];
  alto;
  ancho;
  transp;
  sW;
  canvas;
  p5;

  constructor() {}

  init() {
    const sketch = (p5) => {
      this.alto = p5.windowHeight;
      this.ancho = document.body.clientWidth; // Esta medida es más precisa que windowWidth

      p5.setup = () => {
        p5.frameRate(45);

        this.MAX_BALLS = (p5.windowHeight + p5.windowWidth) / 10; //this is the real number of balls
        console.log(this.MAX_BALLS);
        if (p5.windowHeight > p5.windowWidth) {
          this.MAX_BALLS = 35;
          this.STRING_MAX = 150;
          this.STRING_MIN = 15;

          p5.frameRate(20);
        }

        this.canvas = p5.createCanvas(this.ancho, this.alto * 3);
        this.canvas.parent("appContainer");
        this.canvas.position(0, 0);
        this.canvas.style("z-index", "-1");

        if (p5.windowHeight < p5.windowWidth) {
          //pc
          while (this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (p5.windowWidth + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;

            // Alrededor del logo
            if (randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY, p5));
            } else if (
              randY >= p5.windowHeight * 0.65 &&
              randY <= p5.windowHeight * 0.9
            ) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            //inbetween
            else if (
              randY >= p5.windowHeight * 1.9 &&
              randY <= p5.windowHeight * 2
            ) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            // Los lados
            else if (randX <= p5.windowWidth * 0.14) {
              this.balls.push(new Ball(randX, randY, p5));
            } else if (randX >= p5.windowWidth * 0.78) {
              this.balls.push(new Ball(randX, randY, p5));
            }
          }
        } else {
          //móvil
          while (this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (p5.windowWidth + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;
            if (randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY, p5));
            } else if (randY >= p5.windowHeight * 0.65) {
              this.balls.push(new Ball(randX, randY, p5));
            }
          }
        }
        //color y transparencia de todo
        this.transp = 150;
        this.sW = 0.4;
        if (this.p5.windowHeight > this.p5.windowWidth) {
          this.transp = 30;
          this.sW = 1.5;
        }
      };

      p5.draw = () => {
        p5.clear();

        // background parcial
        p5.noStroke();
        p5.quad(
          0,
          p5.windowHeight * 1.08,
          p5.windowWidth + 20,
          p5.windowHeight * 1.02,
          p5.windowWidth + 20,
          p5.windowHeight * 2.95,
          0,
          p5.windowHeight * 2.99
        );

        // Dibuja las Líneas que unen (a optimizar mucho)
        p5.strokeWeight(this.sW);
        //coste de n^2
        this.balls.forEach((p) => {
          //for (let i = 0; i < items.length - 1; i++) {          ASÍ NUNCA SE
          this.balls.forEach((q) => {
            //  for (let j = i + 1; j < items.length; j++) {     COMPARA A SI MISMO!
            // Using  x * x instead of Math.pow for efficiency
            if (
              p != q &&
              Math.abs(q.y - p.y) < this.STRING_MAX &&
              Math.abs(q.x - p.x) < this.STRING_MAX
            ) {
              //p!=q ahorra n ejecuciones, lo otro ya no sé  :/
              let z = Math.sqrt(
                (q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y)
              );

              if (z < this.STRING_MAX && z > this.STRING_MIN) {
                if (p.y > this.alto + 45) {
                  this.p5.stroke(0, this.transp);
                } else {
                  this.p5.stroke(255, this.transp);
                }
                p5.line(p.x, p.y, q.x, q.y);
              }
            }
          });
        });

        // Dibuja las bolas
        this.balls.forEach((p) => {
          p.show();
        });
      };

      //pelotillas are relocated when resized
      p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight * 3);
        var ry = p5.windowHeight / this.alto;
        var rx = p5.windowWidth / this.ancho;

        this.balls.forEach((p) => {
          p.position(p.x * rx, p.y * ry);
        });

        this.alto = p5.windowHeight;
        this.ancho = p5.windowWidth;
      };
    };

    this.p5 = new p5(sketch);
  }
}

new Background().init();
