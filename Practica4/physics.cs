using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using static Helpers;
using System;

public static class Physics {
  private const int THRESHOLD = 3;
  
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
  
  // Change direction of the balls when it collides against a wall
  // and notify about certain balls to whomever is interested
  public static void WallCollisions(Actor actor, Form area, int id) {
    int velX = actor.VelocityX;
    int velY = actor.VelocityY;
    int rightWall  = area.Size.Width  - actor.Width  - 6;
    int bottomWall = area.Size.Height - actor.Height - 24;
    
    bool horizontalCollision = !InRange(actor.X + velX, 0, rightWall);
    bool verticalCollision   = !InRange(actor.Y + velY, 0, bottomWall);
    bool wallCollision       = horizontalCollision || verticalCollision;
    
    actor.VelocityX *= horizontalCollision? (-1) : 1;
    actor.VelocityY *= verticalCollision? (-1) : 1;
    
    if (wallCollision)
      PubSub.Emit($"ball #{id} touched wall");
  }
  
  // Superposition of actors as described by the distance between them being
  // less than the sum of their radius. Change the direction to the exact
  // opposite side on both X and Y and also notify about it.
  public static void ActorCollisions(List<Actor> actors, Form area, int id) {
    bool collision;
    Actor a = actors[id - 1], b;
    
    for (int i = 0; i < actors.Count; i += 1) {
      b = actors[i];
      
      collision = id == i + 1? false : Distance(
        new Point(a.X + a.VelocityX, a.Y + a.VelocityY),
        new Point(b.X + b.VelocityX, b.Y + a.VelocityY)
      ) < ((a.Width / 2) + (b.Width / 2));
      
      if (collision) {
        a.VelocityX *= (-1);
        a.VelocityY *= (-1);
        PubSub.Emit($"#{id} and #{i + 1} collided");
      }
    }
  }
}