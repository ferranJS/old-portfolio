import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

import Ball from './ball.model';

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
  transp!: number;
  sW!: number;
  canvas!: { parent: (arg0: string) => void; position: (arg0: number, arg1: number) => void; style: (arg0: string, arg1: string) => void; };
  p5!: p5;

  constructor() { }

  ngOnInit(): void {
    const sketch = (p5: p5) => {
      this.alto = p5.windowHeight; 
      this.ancho = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.body.clientWidth,
      );; // Esta medida es más precisa que windowWidth
      console.log("document.body.scrollWidth: ", document.body.scrollWidth);
      console.log("document.documentElement.scrollWidth: ", document.documentElement.scrollWidth);
      console.log("document.documentElement.offsetWidth: ", document.documentElement.offsetWidth);
      console.log("document.body.offsetWidth: ", document.body.offsetWidth);
      console.log("document.documentElement.clientWidth: ", document.documentElement.clientWidth);
      console.log("document.body.clientWidth: ", document.body.clientWidth);
      p5.setup = () => {      
        p5.frameRate(40);

        console.log("p5.windowHeight: ", p5.windowHeight);
        this.MAX_BALLS = (p5.windowHeight + this.ancho)/13; //this is the real number of balls
        console.log(this.MAX_BALLS)
        if(p5.windowHeight > this.ancho) {
          this.MAX_BALLS = 0.7*this.MAX_BALLS;
          this.STRING_MIN = 15;   
          
          p5.frameRate(20);
        }
        
        this.canvas = p5.createCanvas(this.ancho, this.alto * 3);
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
              this.balls.push(new Ball(randX, randY, p5));
            }
            else if(randY >= p5.windowHeight * 0.65 && randY <= p5.windowHeight * 0.9) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            //inbetween
            else if(randY >= p5.windowHeight * 1.8 && randY <= p5.windowHeight * 2.35) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            // Los lados
            else if(randX <= this.ancho * 0.14) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            else if(randX >= this.ancho * 0.78) {
              this.balls.push(new Ball(randX, randY, p5));
            }
          }  
        }else {
        //móvil
          while(this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (this.ancho + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;
            if(randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            else if(randY >= p5.windowHeight * 0.65) {
              this.balls.push(new Ball(randX, randY, p5));
            }
          }
        }
        //color y transparencia de todo
        this.transp = 150;
        this.sW = 0.4;
        if(this.p5.windowHeight > this.ancho) {
          this.transp = 20;
          this.sW = 1.5;
        }
      }
    

      p5.draw = () => {
        
        (p5 as any).clear();

        // background parcial
        p5.noStroke();
        p5.quad(0, p5.windowHeight * 1.08, this.ancho+20, p5.windowHeight * 1.02, this.ancho+20, p5.windowHeight * 2.95, 0, p5.windowHeight * 2.99);

        // Dibuja las Líneas que unen (a optimizar mucho)
        p5.strokeWeight(this.sW);   
        //coste de n^2
        this.balls.forEach(p => {               //for (let i = 0; i < items.length - 1; i++) {          ASÍ NUNCA SE 
          this.balls.forEach(q => {               //  for (let j = i + 1; j < items.length; j++) {     COMPARA A SI MISMO!
            // Using  x * x instead of Math.pow for efficiency
            if(p != q && Math.abs(q.y - p.y) < this.STRING_MAX && Math.abs(q.x - p.x) < this.STRING_MAX){     //p!=q ahorra n ejecuciones, lo otro ya no sé  :/
              let z = Math.sqrt((q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y));

              if(z < this.STRING_MAX && z > this.STRING_MIN) {
                if(p.y > this.alto + 45) {
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
        this.balls.forEach(p => {
          p.show();
        });
      }

      //pelotillas are relocated when resized
      p5.windowResized = () => {
        p5.resizeCanvas(this.ancho, p5.windowHeight * 3);
        var ry = p5.windowHeight / this.alto;
        var rx = this.ancho / this.ancho;

        this.balls.forEach(p => {
          p.position(p.x * rx, p.y * ry);
        });
        
      this.alto = p5.windowHeight;
      this.ancho = this.ancho;
      }
    }

    this.p5 = new p5(sketch);
  }
}
