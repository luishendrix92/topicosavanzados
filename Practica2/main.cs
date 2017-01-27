using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

// Compilación en MONO Develop:
// mcs -out:p2.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs
// Compilación en CSC (.NET) para Windows:
// csc /out:p2.exe  *.cs

public partial class PongArea : Form {
  private Animation animation;
  int hCenter = (800 / 2) - 25;
  int vMiddle = (800 / 2) - 50;
  int testVel = 1;
  
  // Constructor :: Sets properties and renders initial controls
  public PongArea() {
    this.Text = "Bouncing Balls :v";
    this.Size = new Size(800, 800);
    animation = new Animation(this, 60);
    
    // Positive X Axis
    AddBall(new Point(hCenter, vMiddle), 135, testVel);
  }
  
  // Adds PictureBox to reference-type Form as a Ball "Actor"
  private void AddBall(Point pos, double angle, int speed) {
    PictureBox ball = new PictureBox();
    ball.Image      = Image.FromFile("ball.png");
    ball.Size       = new Size(50, 50);
    ball.Location   = pos;
    
    animation.Actors.Add(new Actor(ball, angle, speed));
    this.Controls.Add(ball);
  }
}

public static class Practica2 {
  [STAThread]
  public static void Main(string[] args) {
    Application.EnableVisualStyles();
    Application.Run(new PongArea());
  }
}