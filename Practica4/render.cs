using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using static Physics;
using System;

public class Animation {
  public List<Actor> Actors = new List<Actor>();
  private System.Windows.Forms.Timer animation;
  private Form area;
  
  // Constructor :: Initializes the interval animation
  public Animation(Form area, int fps) {
    this.area          = area;
    animation          = new System.Windows.Forms.Timer();
    animation.Tick    += new EventHandler(MoveActors);
    animation.Enabled  = true;
    animation.Interval = FpsToMs(fps);
    
    animation.Start();
  }
  
  // Gets called everytime the fps interval has elapsed moving
  // all the balls in the area to their rightful position
  void MoveActors(Object _sender, EventArgs _event) {
    foreach (var actor in Actors) {
      HandleCollisions(actor, area);
      
      actor.Entity.Location = Point.Add(
        actor.Entity.Location,
        new Size(actor.VelocityX, actor.VelocityY)
      );
    }
  }
}

public class Actor {
  public int VelocityX, VelocityY;
  public Control Entity;
  
  // Constructor :: Adds the reference to the PictureBox
  public Actor(Control ball, double angle, int speed) {
    this.VelocityX = HorizontalVelocity(angle, speed);
    this.VelocityY = VerticalVelocity(angle, speed);
    this.Entity    = ball;
  }
}
