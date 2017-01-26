using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;
using static Physics;

public class Animation {
  const int VECTOR_SPEED = 1;
  System.Windows.Forms.Timer animation;
  Form area;
  
  // Constructor :: Controls the frames with a timer interval
  public Animation(Form _form, int fps) {
    animation          = new System.Windows.Forms.Timer();
    animation.Tick    += new EventHandler(MoveActors);
    animation.Enabled  = true;
    animation.Interval = FpsToMs(fps);
    animation.Start();
    this.area = _form;
    
    RenderBall(area, 200, 200);
  }
  
  // Gets called everytime the fps interval has elapsed
  // moving all the balls in the area to their rightful position
  private void MoveActors(Object sender, EventArgs e) {
    var actors = FetchActors(area);
    
    foreach (var actor in actors) {
      actor.Location = Point.Add(
        actor.Location,
        new Size(1 * VECTOR_SPEED, 0)
      );
    }
  }
  
  // Filters out PictureBox elements from a Control collection
  // FetchActors :: ControlCollection -> List<PictureBox | Control>
  private List<Control> FetchActors(Form _form) {
    Control.ControlCollection controls = _form.Controls;
    List<Control> balls = new List<Control>();
    
    foreach (Control control in controls)
      if (control is PictureBox) balls.Add(control);
    
    return balls;
  }
  
  // Adds PictureBox to reference-type Form
  private void RenderBall(Form _form, int coordX, int coordY) {
    PictureBox pic = new PictureBox();
    pic.Image = Image.FromFile("ball.png");
    pic.Size = new Size(50, 50);
    pic.Location = new Point(coordX, coordY);
    _form.Controls.Add(pic);
  }
}