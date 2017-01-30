using System.Windows.Forms;
using System.Drawing;
using System;

// Compilación en MONO Develop para los Linuxeros :'v
// mcs -out:p2.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs

// Compilación en CSC (.NET) para Windows:
// csc /out:p2.exe  *.cs

public partial class BallsToTheWalls : Form {
  private Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public BallsToTheWalls() {
    this.Text = "Bouncing Balls :v";
    this.Size = new Size(800, 600);
    animation = new Animation(this, 60);
    
    // Put 8 balls at the center in different directions simulating
    // an incomplete unitary circle (45° directions)
    for (int i = 0; i < 8; i += 1)
      AddBall(new Point(370, 280), i * 45, 1);
      
    AddBall(new Point(370, 280), 30, 2);
    AddBall(new Point(370, 280), 150, 2);
    AddBall(new Point(370, 280), 210, 2);
    AddBall(new Point(370, 280), 330, 2);
    
  }
  
  // Adds PictureBox to reference-type Form as a Ball "Actor"
  void AddBall(Point pos, double angle, int speed) {
    PictureBox ball = new PictureBox();
    ball.Image      = Image.FromFile("happy.png");
    ball.Size       = new Size(40, 40);
    ball.Location   = pos;
    
    animation.Actors.Add(new Actor(ball, angle, speed));
    this.Controls.Add(ball);
  }
  
  // Handle the side effects of what happens on wall collision
  public static void WallCollisionFx(Form area, Actor actor, string type) {
    var _actor = actor.Entity as PictureBox;
    
    switch (type) {
      case "horizontal":
        _actor.Image = Image.FromFile("happy.png");
        area.BackColor = Color.Red;
        break;
      case "vertical":
        _actor.Image = Image.FromFile("sad.png");
        area.BackColor = Color.Purple;
        break;
    }
  }
}

public static class Practica2 {
  [STAThread]
  public static void Main(string[] args) {
    Application.EnableVisualStyles();
    Application.Run(new BallsToTheWalls());
  }
}
