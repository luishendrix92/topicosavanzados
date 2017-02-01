using System.Windows.Forms;
using System.Drawing;
using static Physics;
using System;

public class Actor {
  public int VelocityX, VelocityY;
  public Control Entity;
  
  public int X {
    get { return Entity.Location.X; }
  }
  
  public int Y {
    get { return Entity.Location.Y; }
  }
  
  public int Width {
    get { return Entity.Size.Width; }
  }
  
  public int Height {
    get { return Entity.Size.Height; }
  }
  
  // Constructor :: Adds the reference to the PictureBox
  public Actor(Control ball, double angle, int speed) {
    this.VelocityX = HorizontalVelocity(angle, speed);
    this.VelocityY = VerticalVelocity(angle, speed);
    this.Entity    = ball;
  }
}