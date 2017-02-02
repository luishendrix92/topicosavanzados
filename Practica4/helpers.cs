using System.Windows.Forms;
using System.Drawing;
using System.Timers;

public static class Helpers {
  public static System.Timers.Timer timeout;
  public delegate void Callback();
  
  // Inclusive range check, true if n is in range [a, b]
  public static bool InRange(int n, int a, int b) => (n >= a) && (n <= b);
  
  // A millisecond interval from a Frames-Per-Second value
  public static int FpsToMs(int fps) => 1000 / fps;
  
  // Converts Degrees to Radians in decimal notation
  public static double DegToRad(double angle) =>
    (angle * System.Math.PI) / 180;
  
  // Compute the distance between two points (hypotenuse, pythagorean)
  public static double Distance(Point a, Point b) {
    return (double) System.Math.Abs(
      System.Math.Sqrt(((b.Y - a.Y) * (b.Y - a.Y)) +
      ((b.X - a.X) * (b.X - a.X)))
    );
  }
  
  // Receives an action and schedules it to happen within the next "lapse"
  // and if a repeat parameter was given, do this n times.
  public static void SetTimeout(int lapse, Callback action, int repeat = 1) {
    if (timeout != null) timeout.Stop();
    timeout = new System.Timers.Timer();
    
    timeout.Enabled  = true;
    timeout.Interval = lapse;
    timeout.Elapsed += (_source, _e) => {
      action();
      repeat -= 1;
      
      if (repeat == 0) timeout.Stop();
    };
    
    timeout.Start();
  }
}