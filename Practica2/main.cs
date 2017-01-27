using System;
using System.Drawing;
using System.Windows.Forms;

// Compilación en MONO Develop:
// mcs -out:p2.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs
// Compilación en CSC (.NET) para Windows:
// csc /out:p2.exe  *.cs

public partial class PongArea : Form {
  private Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public PongArea() {
    this.Text = "Bouncing Balls :v";
    this.Size = new Size(800, 800);
    animation = new Animation(this, 20);
    
    // Put 8 balls at the center in different directions
    // simulating an incomplete unitary circle (45° directions)
    for (int i = 0; i < 8; i += 1)
      AddBall(new Point(375, 350), i * 45, 3);
  }
  
  // Adds PictureBox to reference-type Form as a Ball "Actor"
  void AddBall(Point pos, double angle, int speed) {
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