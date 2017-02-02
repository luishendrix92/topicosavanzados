using System.Windows.Forms;
using static Helpers;
using System.Drawing;

public partial class Window : Form {
  private const int RADIUS = 40;
  private const int SPEED  = 1;
  private Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public Window() {
    this.Text      = "Práctica #4 Papu";
    this.Size      = new Size(900, 600);
    this.BackColor = Color.Gray;
    animation      = new Animation(this, 60);
    
    AddBall(new Point(100, 280), 60, SPEED);
    AddBall(new Point(370, 280), 30, SPEED);
    AddBall(new Point(400, 280), 210, SPEED);
    
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
  
  // Listen to collision events and act accordingly
  void SubscribeToEvents() {
    PubSub.Subscribe("ball #1 touched wall", () => {
      this.BackColor = Color.Gray;
      
      SetTimeout(500, () => {
        this.BackColor = Color.White;
      });
    });
    
    PubSub.Subscribe("ball #2 touched wall", () => {
      this.BackColor = Color.Yellow;
    });
    
    PubSub.Subscribe("ball #3 touched wall", () => {
      SetTimeout(200, () => {
        this.BackColor = Color.Gray;
        System.Threading.Thread.Sleep(100);
        this.BackColor = Color.White;
      }, 2);
    });
    
    PubSub.Subscribe("#1 and #3 collided", () => {
      AddBall(new Point(150, 250), 45, 0);
    });
  }
}