using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

public static class Physics {
  public const int THRESHOLD = 1;
  
  // Converts Degrees to Radians in decimal notation
  // DegToRad :: Double -> Double
  public static double DegToRad(double angle) {
    return (angle * Math.PI) / 180;
  }
  
  // A millisecond interval from a Frames-Per-Second value
  // FpsToMs :: Int -> Int
  public static int FpsToMs(int fps) {
    return 1000 / fps;
  }
  
  // The core of the collision detection logic, this logic is used to
  // change the direction of the ball actors on the canvas area
  // HandleCollision :: Form -> Point -> Actor -> Velocity -> Velocity
  public static Velocity HandleCollision
  (Form area, Point pos, Actor ball, Velocity vel) {
    // Wall collision, according to Newtonian Elastic Collition, if the wall
    // represents an abysmall mass opposing force, the direction of the
    // ball which is switched in opposite vectorial direction.
    bool horizontalCollision = (pos.X + (vel.x * ball.directionX)) < 0 ||
      (pos.X + (vel.x * ball.directionX)) > (area.Size.Width - 50);
    bool verticalCollision = (pos.Y + (vel.y * ball.directionY)) < 0 ||
      (pos.Y + (vel.y * ball.directionY)) > (area.Size.Height - 50);
    
    if (horizontalCollision) {
      ball.directionX *= (-1);
      vel.x *= (-1);
    }
    
    if (verticalCollision) {
      ball.directionY *= (-1);
      vel.x *= (-1);
    }
    
    return vel;
  }
}

public struct Velocity {
  public int x, y;

  // Constructor :: Computes the amount of pixels to add to a Point type
  // on both axis after computing the direction of the vector
  public Velocity(double angle, int speed = 1) {
    this.x  = (int) Math.Ceiling(
      Math.Round(Math.Cos(Physics.DegToRad(angle)), 2)
    );
    this.y  = (int) Math.Ceiling(
      Math.Round(Math.Sin(Physics.DegToRad(angle)), 2)
    );
    this.x *= (speed * Physics.THRESHOLD);
    this.y *= (speed * Physics.THRESHOLD * (-1));
    Console.WriteLine("{0}",
      Physics.DegToRad(angle));
  }
}