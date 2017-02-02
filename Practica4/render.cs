using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using static Physics;
using static Helpers;
using System;

public class Animation {
  public List<Actor> Actors = new List<Actor>();
  private System.Windows.Forms.Timer animation;
  private Form area;
  
  // Constructor :: Initializes the interval animation
  public Animation(Form area, int fps) {
    animation          = new System.Windows.Forms.Timer();
    animation.Tick    += new EventHandler(MoveActors);
    animation.Interval = FpsToMs(fps);
    animation.Enabled  = true;
    this.area          = area;
    
    animation.Start();
  }
  
  // Gets called everytime the fps interval has elapsed moving
  // all the balls in the area to their rightful position
  void MoveActors(Object _sender, EventArgs _event) {
    for (int id = 0; id < Actors.Count; id += 1) {
      WallCollisions(Actors[id], area, id);
      ActorCollisions(Actors, area, id);
      
      Actors[id].Entity.Location = Point.Add(
        Actors[id].Entity.Location,
        new Size(Actors[id].VelocityX, Actors[id].VelocityY)
      );
    }
  }
}