import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

import Ball from './ball.model';

@Component({
  selector: 'app-background',
  template: ``,
  styles: [`
  html, body {
    margin: 0;
    padding: 0;
  }
`]
})

export class BackgroundComponent implements OnInit {
  MAX_BALLS: number = 200; //default
  STRING_MAX: number = 140;
  STRING_MIN: number = 30;
  balls: Ball[] = [];
  alto: number;
  ancho: number;
  transp;
  sW;
  canvas;
  p5;

  constructor() { }

  ngOnInit(): void {
    const sketch = (p5) => {
      this.alto = p5.windowHeight; 
      this.ancho = document.body.clientWidth; // Esta medida es más precisa que windowWidth

      p5.setup = () => {      
        p5.frameRate(45);

        this.MAX_BALLS = (p5.windowHeight + p5.windowWidth)/10; //this is the real number of balls
        console.log(this.MAX_BALLS)
        if(p5.windowHeight > p5.windowWidth) {
          this.MAX_BALLS = 35; 
          this.STRING_MAX = 150;
          this.STRING_MIN = 15;   
          
          p5.frameRate(20);
        }
        
        this.canvas = p5.createCanvas(this.ancho, this.alto * 3);
        this.canvas.parent("appContainer");
        this.canvas.position(0, 0);
        this.canvas.style('z-index', '-1');

        if(p5.windowHeight < p5.windowWidth) {
        //pc
          while(this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (p5.windowWidth + 10) - 10;
            var randY = Math.random() * (p5.windowHeight * 3 + 10) - 10;

            // Alrededor del logo
            if(randY <= p5.windowHeight * 0.37) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            else if(randY >= p5.windowHeight * 0.65 && randY <= p5.windowHeight * 0.9) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            //inbetween
            else if(randY >= p5.windowHeight * 1.9 && randY <= p5.windowHeight * 2) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            // Los lados
            else if(randX <= p5.windowWidth * 0.14) {
              this.balls.push(new Ball(randX, randY, p5));
            }
            else if(randX >= p5.windowWidth * 0.78) {
              this.balls.push(new Ball(randX, randY, p5));
            }
          }  
        }else {
        //móvil
          while(this.balls.length < this.MAX_BALLS) {
            var randX = Math.random() * (p5.windowWidth + 10) - 10;
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
        if(this.p5.windowHeight > this.p5.windowWidth) {
          this.transp = 30;
          this.sW = 1.5;
        }
      }
    

      p5.draw = () => {
        
        p5.clear();

        // background parcial
        p5.noStroke();
        p5.quad(0, p5.windowHeight * 1.08, p5.windowWidth+20, p5.windowHeight * 1.02, p5.windowWidth+20, p5.windowHeight * 2.95, 0, p5.windowHeight * 2.99);

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
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight * 3);
        var ry = p5.windowHeight / this.alto;
        var rx = p5.windowWidth / this.ancho;

        this.balls.forEach(p => {
          p.position(p.x * rx, p.y * ry);
        });
        
      this.alto = p5.windowHeight;
      this.ancho = p5.windowWidth;
      }
    }

    this.p5 = new p5(sketch);
  }
}
