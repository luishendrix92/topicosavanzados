using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

public static class Physics {
  public const int THRESHOLD = 1;
  
  // A millisecond interval from a Frames-Per-Second value
  public static int FpsToMs(int fps) {
    return 1000 / fps;
  }
  
  // Amount of pixels to be added to the X axis using the consine
  public static int HorizontalVelocity(double angle, int speed) {
    double increment = Math.Cos(DegToRad(angle)) * THRESHOLD;
    
    return (int) Math.Ceiling(Math.Round(increment, 4)) * speed;
  }
  
  // Pixels to be added to the Y axis (inverted) using the sine
  public static int VerticalVelocity(double angle, int speed) {
    double increment = Math.Sin(DegToRad(angle)) * THRESHOLD;
    
    return (int) Math.Ceiling(Math.Round(increment, 2)) * speed * (-1);
  }
  
  // The core of the collision detection logic, this logic is used to
  // change the direction of the ball actors on the canvas area
  public static void HandleCollisions(Actor actor, Form area) {
    int x    = actor.Entity.Location.X, y    = actor.Entity.Location.Y;
    int velX = actor.VelocityX,         velY = actor.VelocityY;
    int rightWall  = area.Size.Width  - actor.Entity.Size.Width - 5;
    int bottomWall = area.Size.Height - actor.Entity.Size.Height - 25;
    
    // According to Newtonian Elastic Collition, if the wall conceptually
    // represents an abyssmal mass opposing force, the  ball is then
    // flipped (-vX and or -vY) to move in the opposite direction.
    bool horizontalCollision = !InRange(x + velX, 0, rightWall);
    bool verticalCollision   = !InRange(y + velY, 0, bottomWall);
    
    if (horizontalCollision) actor.VelocityX *= (-1);
    if (verticalCollision)   actor.VelocityY *= (-1);
  }
  
  // Converts Degrees to Radians in decimal notation
  private static double DegToRad(double angle) {
    return (angle * Math.PI) / 180;
  }
  
  // Inclusive range check, true if n is in range [a, b]
  private static bool InRange(int n, int a, int b) {
    return (n >= a) && (n <= b);
  }
}