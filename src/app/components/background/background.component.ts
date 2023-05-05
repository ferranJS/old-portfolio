import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

// import Ball from './ball.model';

let speed = 0.4;
@Component({
  selector: 'app-background',
  standalone: true,
  template: ``,
  styles: [``]
})


export class BackgroundComponent implements OnInit {
  MAX_BALLS: number = 200; //default
  STRING_MAX: number = 170;
  STRING_MIN: number = 30;
  balls: Ball[] = [];
  alto!: number;
  ancho!: number;
  alpha!: number;
  lineWidth!: number;
  canvas!: { parent: (arg0: string) => void; position: (arg0: number, arg1: number) => void; style: (arg0: string, arg1: string) => void; };

  constructor() { }

  ngOnInit(): void {
    const sketch = (p5: p5) => {
      this.alto = p5.windowHeight; 
      this.ancho = Math.max(
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
      p5.setup = () => {      
        p5.frameRate(30);

        console.log("p5.windowHeight: ", p5.windowHeight);
        this.MAX_BALLS = (p5.windowHeight + this.ancho)/13; //this is the real number of balls
        console.log(this.MAX_BALLS)
        if(p5.windowHeight > this.ancho) {
          this.MAX_BALLS = this.MAX_BALLS;
          this.STRING_MIN = 15;   
          speed = 0.5;
        }
        
        this.canvas = p5.createCanvas(this.ancho, this.alto * 3.06);
        this.canvas.parent("appContainer");
        this.canvas.position(0, 0);
        this.canvas.style('z-index', '-1');

        if(p5.windowHeight < this.ancho) {
        //pc
          while(this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (this.ancho + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;

            // Alrededor del logo
            if(randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY));
            }
            else if(randY >= p5.windowHeight * 0.65 && randY <= p5.windowHeight * 0.9) {
              this.balls.push(new Ball(randX, randY));
            }
            //inbetween
            else if(randY >= p5.windowHeight * 1.8 && randY <= p5.windowHeight * 2.35) {
              this.balls.push(new Ball(randX, randY));
            }
            // Los lados
            else if(randX <= this.ancho * 0.14) {
              this.balls.push(new Ball(randX, randY));
            }
            else if(randX >= this.ancho * 0.78) {
              this.balls.push(new Ball(randX, randY));
            }
          }  
        }else {
        //móvil
          while(this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (this.ancho + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;
            if(randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY));
            }
            else if(randY >= p5.windowHeight * 0.65) {
              this.balls.push(new Ball(randX, randY));
            }
          }
        }
        //color y alphaarencia de todo
        this.alpha = 150;
        this.lineWidth = 0.4;
        if(p5.windowHeight > this.ancho) {
          this.alpha = 30;
          this.lineWidth = 1.5;
        }
      }
    

      p5.draw = () => {
        
        (p5 as any).clear();

        // background parcial
        p5.noStroke();
        p5.quad(0, p5.windowHeight * 1.08, this.ancho+20, p5.windowHeight * 1.02, this.ancho+20, p5.windowHeight * 2.95, 0, p5.windowHeight * 2.99);

        // Dibuja las Líneas que unen (a optimizar mucho)
        p5.strokeWeight(this.lineWidth);   
        //coste de n^2
        this.balls.forEach(p => {               //for (let i = 0; i < items.length - 1; i++) {          ASÍ NUNCA SE 
          this.balls.forEach(q => {               //  for (let j = i + 1; j < items.length; j++) {     COMPARA A SI MISMO!
            // Using  x * x instead of Math.pow for efficiency
            if(p != q && Math.abs(q.y - p.y) < this.STRING_MAX && Math.abs(q.x - p.x) < this.STRING_MAX){     //p!=q ahorra n ejecuciones, lo otro ya no sé  :/
              let z = Math.sqrt((q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y));

              if(z < this.STRING_MAX && z > this.STRING_MIN) {
                if(p.y > this.alto + 45) {
                  p5.stroke(0, this.alpha);
                } else {
                  p5.stroke(255, this.alpha);
                }
                p5.line(p.x, p.y, q.x, q.y);
              }
            }
          });
        });  

        // Dibuja las bolas
        this.balls.forEach(p => {
          p.show(p5);
        });
      }
    }

    new p5(sketch);
  }
}

export class Ball {
  x;
  y;
  lineWidth = 5;
  hoverRadius = 200;
  alpha = 160

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    if(document.body.scrollHeight > document.body.scrollWidth) {
      this.alpha = 50;
      this.hoverRadius = 100;
    }
  }
  
  show(p5: p5) {      
    //umbral para el color de cada bola
    var yi = -this.x * 0.029166 + p5.windowHeight * 1.08;

    if(this.y > yi) {
      p5.stroke(0, this.alpha);
    } else {
      p5.stroke(255, this.alpha);
    }

    p5.strokeWeight(this.lineWidth);
    p5.point(this.x, this.y);

    // Reacción con el cursor
    if(this.cerca(p5.mouseX, p5.mouseY)) {

      if(p5.windowHeight > p5.windowWidth) {
        this.x -= (this.x - p5.mouseX) * 0.15;
        this.y -= (this.y - p5.mouseY) * 0.15; 

        tembleque = 3;
      } else {
        //las bolas se aproximan al cursor, queda más smooth que si se alejan
        let xIncrement = this.x - p5.mouseX
        let yIncrement = this.y - p5.mouseY
        if (Math.abs(xIncrement) > Math.abs(yIncrement))
          this.x += (xIncrement > 0 ? this.hoverRadius - xIncrement : -this.hoverRadius - xIncrement)*speed;
        else
          this.y += (yIncrement > 0 ? this.hoverRadius - yIncrement : -this.hoverRadius - yIncrement)*speed;
      }

    } else {
      // El tembleque
      var tembleque = 1.5;
      var randX = Math.random() * tembleque - tembleque/2;
      var randY = Math.random() * tembleque - tembleque/2;

      this.x += randX
      this.y += randY
    }      
  }
  
  cerca(x: number, y: number) {
    let z = Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    return z < this.hoverRadius;
  }
}