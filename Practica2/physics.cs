using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

public static class Physics {
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
}