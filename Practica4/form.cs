using System.Windows.Forms;
using System.Drawing;

public partial class Window : Form {
  private const int RADIUS = 40;
  private Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public Window() {
    this.Text = "Práctica #4 Papu";
    this.Size = new Size(800, 600);
    animation = new Animation(this, 60);
    
    AddBall(new Point(370, 280), 30, 1);
    AddBall(new Point(370, 280), 150, 2);
    AddBall(new Point(370, 280), 210, 3);
    
    SubscribeToEvents();
  }
  
  // Adds PictureBox to reference-type Form as a Ball "Actor"
  void AddBall(Point pos, double angle, int speed) {
    PictureBox ball = new PictureBox();
    ball.Image      = Image.FromFile("happy.png");
    ball.Size       = new Size(RADIUS, RADIUS);
    ball.Location   = pos;
    
    animation.Actors.Add(new Actor(ball, angle, speed));
    this.Controls.Add(ball);
  }
  
  void SubscribeToEvents() {
    PubSub.Subscribe("ball #1 touches wall", (actor, area) => {
      //
    });
    
    PubSub.Subscribe("ball #2 touches wall", (actor, area) => {
      //
    });
    
    PubSub.Subscribe("ball #3 touches wall", (actor, area) => {
      //
    });
  }
}