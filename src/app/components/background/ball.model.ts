export default class Ball {
  private p5;
  x: number;
  y: number;
  vx: number;
  vy: number;
  sW: number;
  r: number;

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
    if(this.p5.windowHeight > this.p5.windowWidth) {
      transp = 50;
      this.sW = 6;
    }

    //umbral para el color de cada bola
    var yi = -this.x * 0.029166 + this.p5.windowHeight * 1.08;

    if(this.y > yi) {
      this.p5.stroke(0, transp);
    } else {
      this.p5.stroke(255, transp);
    }


    this.p5.strokeWeight(this.sW);
    this.p5.point(this.x, this.y);

    // Reacción con el cursor
    if(this.cerca(this.p5.mouseX, this.p5.mouseY)) {
      if(this.p5.windowHeight > this.p5.windowWidth) {
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
      var randX = Math.random() * t - t/2;
      var randY = Math.random() * t - t/2;

      this.position(this.x + randX, this.y + randY);
    }      
  }
  
  position(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  cerca(x: number, y: number) {
    let z = Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    return z < this.r;
  }
}