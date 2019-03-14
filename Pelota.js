class Pelota {
  constructor() {
    this.x1 = random(20, 380);
    this.y1 = random(20, 380);
    this.h =40;
    this.velx = random(0,10);
    this.vely = random(0,10);

    this.R = random(0, 255);
    this.G = random(0, 250);
    this.B = random(0, 250);
  }
  mostrar() {
    strokeWeight(1);
    fill(this.R, this.G, this.B);
    ellipse(this.x1, this.y1, this.h);
  }
  mover() {
    this.y1 = this.y1 + this.vely;
    this.x1 = this.x1 + this.velx;
  }


  saliry() {
    var res;
    if (this.y1 > 380 || this.y1 < 20) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  salirx() {
    var res;
    if (this.x1 > 380 || this.x1 < 20) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }


  rebotarx() {
    this.velx = this.velx * -1

  }
  rebotary() {
    this.vely = this.vely * -1

  }
}
