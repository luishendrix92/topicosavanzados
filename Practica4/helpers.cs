using System.Windows.Forms;
using System.Drawing;
using System.Timers;
using System;

public static class Helpers {
  public static System.Timers.Timer timeout;
  public delegate void Callback();
  
  // A millisecond interval from a Frames-Per-Second value
  public static int FpsToMs(int fps) {
    return 1000 / fps;
  }
  
  // Converts Degrees to Radians in decimal notation
  public static double DegToRad(double angle) {
    return (angle * Math.PI) / 180;
  }
  
  // Inclusive range check, true if n is in range [a, b]
  public static bool InRange(int n, int a, int b) {
    return (n >= a) && (n <= b);
  }
  
  public static double Distance(Point a, Point b) {
    return (double) Math.Abs(
      Math.Sqrt(((b.Y - a.Y) * (b.Y - a.Y)) + ((b.X - a.X) * (b.X - a.X)))
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
      repeat--;
      
      if (repeat == 0) timeout.Stop();
    };
    
    timeout.Start();
  }
}