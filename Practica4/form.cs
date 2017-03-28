using System.Windows.Forms;
using System.Drawing;
using static Helpers;
using static PubSub;

public partial class Window : Form {
  private const int RADIUS = 40;
  private const int SPEED  = 1;
  private Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public Window() {
    this.Text      = "Práctica #4";
    this.Size      = new Size(900, 600);
    this.BackColor = Color.Gray;
    animation      = new Animation(this, 60);
    
    AddBall(new Point(600, 280), 60, SPEED);
    AddBall(new Point(570, 180), 150, SPEED);
    AddBall(new Point(400, 480), 210, SPEED);
    
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
    Subscribe("ball #1 touched wall", () => {
      this.BackColor = Color.Gray;
      
      SetTimeout(500, () => {
        this.BackColor = Color.White;
      });
    });

    Subscribe("ball #2 touched wall", () => {
      this.BackColor = Color.Yellow;
    });

    Subscribe("ball #3 touched wall", () => {
      SetTimeout(200, () => {
        this.BackColor = Color.Gray;
        System.Threading.Thread.Sleep(100);
        this.BackColor = Color.White;
      }, 2);
    });

    Subscribe("#1 collided #2", () => {
      if (animation.Actors.Count == 4) {
        animation.Actors[3].VelocityX = 4;
        animation.Actors[3].VelocityY = 4;
      }
    });

    /*Subscribe("#1 collided #3", () => {
      if (animation.Actors.Count == 3) {
        AddBall(new Point(150, 250), 45, 0);
      }
    });*/
    
    //Subscribe("#3 collided #4", () => MessageBox.Show("¡¡#3 vs #4!!"));
    Subscribe("#2 collided #4", ChangeImage("happy"));
    Subscribe("#2 collided #3", ChangeImage("sad"));
    Subscribe("all collided", Application.Exit);
  }
  
  Action ChangeImage(string happyOrSad) {
    return () => {
      foreach (Actor actor in animation.Actors) {
        (actor.Entity as PictureBox).Image
          = Image.FromFile($"{happyOrSad}.png");
      }
    };
  }
}