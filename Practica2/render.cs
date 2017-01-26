using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;
using static Physics;

public class Animation {
  private System.Windows.Forms.Timer animation;
  private Form area;
  private List<Actor> actors = new List<Actor>();
  
  // Constructor :: Controls the frames with a timer interval
  public Animation(Form _form, int fps) {
    animation          = new System.Windows.Forms.Timer();
    animation.Tick    += new EventHandler(MoveActors);
    animation.Enabled  = true;
    animation.Interval = FpsToMs(fps);
    animation.Start();
    this.area = _form;
  }
  
  // Gets called everytime the fps interval has elapsed
  // moving all the balls in the area to their rightful position
  private void MoveActors(Object sender, EventArgs e) {
    Point coords;
    Velocity vel;
    double angle;
    int speed, dX, dY;
    
    foreach (var actor in actors) {
      coords = actor.entity.Location;
      angle  = actor.angle;
      speed  = actor.speed;
      dX     = actor.directionX;
      dY     = actor.directionY;
      
      // Create a set of x and y that define an increment in position
      // after computing the velocity from an angle and a speed.
      // Also... detect collisions and change directions if need be
      vel = HandleCollision(area, coords, actor, new Velocity(angle, speed));
      actor.entity.Location = Point.Add(coords, new Size(vel.x, vel.y));
    }
  }
  
  // Adds PictureBox to reference-type Form as a Ball "Actor"
  public void AddBall(int x, int y, double alpha, int speed = 1) {
    PictureBox pic = new PictureBox();
    pic.Image = Image.FromFile("ball.png");
    pic.Size = new Size(50, 50);
    pic.Location = new Point(x, y);
    area.Controls.Add(pic);
    actors.Add(new Actor(pic, alpha, speed));
  }
}

public class Actor {
  public int directionX;
  public int directionY;
  public int speed;
  public double angle;
  public Control entity;
  
  // Constructor :: Adds the reference to the PictureBox
  public Actor(PictureBox entity, double angle, int speed) {
    this.entity     = entity;
    this.angle      = angle;
    this.speed      = speed;
    this.directionX = 1;
    this.directionY = 1;
  }
}