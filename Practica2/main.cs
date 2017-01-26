using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

// Compilación en MONO Develop:
// -----> mcs -out:p2.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs
// Compilación en CSC (.NET):
// -----> csc /out:p2.exe  *.cs

public partial class PongArea : Form {
  static Animation animation;
  
  // Constructor :: Sets properties and renders initial controls
  public PongArea() {
    this.Text = "Bouncing Balls :v";
    this.Size = new Size(800, 500);
    // Move balls every 1/60 seconds (60 fps)
    animation = new Animation(this, 60);
  }
}

public static class Pelotas {
  [STAThread]
  public static void Main(string[] args) {
    Application.EnableVisualStyles();
    Application.Run(new PongArea());
    //Application.DoEvents();
  }
}