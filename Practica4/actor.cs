using System.Windows.Forms;
using System.Drawing;
using static Physics;

public class Actor {
  public int VelocityX, VelocityY;
  public Control Entity;
  
  // Constructor :: Adds the reference to the PictureBox
  public Actor(Control ball, double angle, int speed) {
    this.VelocityX = HorizontalVelocity(angle, speed);
    this.VelocityY = VerticalVelocity(angle, speed);
    this.Entity    = ball;
  }
  
  // Getters for easy access
  public int X => Entity.Location.X;
  public int Y => Entity.Location.Y;
  public int Width => Entity.Size.Width;
  public int Height => Entity.Size.Height;
}