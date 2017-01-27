using System.Windows.Forms;
using System;

public static class Physics {
  public const int THRESHOLD = 6;
  
  // A millisecond interval from a Frames-Per-Second value
  public static int FpsToMs(int fps) { return 1000 / fps; }
  
  // Amount of pixels to be added to the X axis using the consine
  public static int HorizontalVelocity(double angle, int speed) {
    double increment = Math.Cos(DegToRad(angle)) * THRESHOLD;
    
    return ((int) Math.Round(increment)) * speed;
  }
  
  // Pixels to be added to the Y axis (inverted) using the sine
  public static int VerticalVelocity(double angle, int speed) {
    double increment = Math.Sin(DegToRad(angle)) * THRESHOLD;
    
    return ((int) Math.Round(increment)) * speed * (-1);
  }
  
  // The core of the collision detection logic, this logic is used to
  // change the direction of the ball actors on the canvas area
  public static void HandleCollisions(Actor actor, Form area) {
    int x = actor.Entity.Location.X;
    int y = actor.Entity.Location.Y;
    int velX = actor.VelocityX;
    int velY = actor.VelocityY;
    int rightWall  = area.Size.Width  - actor.Entity.Size.Width  - 6;
    int bottomWall = area.Size.Height - actor.Entity.Size.Height - 24;
    
    // According to Newtonian Elastic Collition, if the wall conceptually
    // represents an abyssmal mass opposing force, the  ball is then
    // flipped (-vX and or -vY) to move in the opposite direction.
    bool horizontalCollision = !InRange(x + velX, 0, rightWall);
    bool verticalCollision   = !InRange(y + velY, 0, bottomWall);
    
    if (horizontalCollision) {
      BallsToTheWalls
        .WallCollisionFx(area, actor, "horizontal");
      actor.VelocityX *= (-1);
    }
    
    if (verticalCollision) {
      BallsToTheWalls
        .WallCollisionFx(area, actor, "vertical");
      actor.VelocityY *= (-1);
    }
  }
  
  // Converts Degrees to Radians in decimal notation
  static double DegToRad(double angle) { return (angle * Math.PI) / 180; }
  
  // Inclusive range check, true if n is in range [a, b]
  static bool InRange(int n, int a, int b) { return (n >= a) && (n <= b); }
}