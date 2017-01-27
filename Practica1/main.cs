using System.ComponentModel;
using System.Windows.Forms;
using System.Drawing;
using System;

// Compilación en MONO Develop para los Linuxeros :'v
// mcs -out:p1.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs

// Compilación en CSC (.NET) para Windows:
// csc /out:p1.exe  *.cs

public partial class Marcianito : Form {
  public Marcianito() {
    PictureBox pic = new PictureBox();
    pic.Image    = Image.FromFile("marcianito.gif");
    pic.Size     = new Size(128, 190);
    pic.Location = new Point(336, 155);
    this.Controls.Add(pic);
    // ----------------------------------
    this.Text       = "Marcianito 100% Real No Fake";
    this.Size       = new Size(800, 500);
    this.KeyPreview = true;
    this.KeyDown  += new KeyEventHandler(Marcianito_KeyDown);
  }
  
  // Handle a pressed key event
  void Marcianito_KeyDown(object sender, KeyEventArgs e) {
    var pic = this.Controls[0];
    var coords = pic.Location;
    int SPEED = 5;
    
    switch (e.KeyCode) {
      case Keys.Up:
        if (coords.Y - SPEED >= 0) {
          pic.Location = Point.Add(coords, new Size(0, -SPEED));
        }
        break;
      case Keys.Down:
        if (coords.Y + SPEED <= this.Size.Height - pic.Size.Height) {
          pic.Location = Point.Add(coords, new Size(0, SPEED));
        }
        break;
      case Keys.Left:
        if (coords.X - SPEED >= 0) {
          pic.Location = Point.Add(coords, new Size(-SPEED, 0));
        }
        break;
      case Keys.Right:
        if (coords.X + SPEED <= this.Size.Width - pic.Size.Width) {
          pic.Location = Point.Add(coords, new Size(SPEED, 0));
        }
        break;
    }
  }
}

public class Principal {
  [STAThread]
  public static void Main() {
    Application.EnableVisualStyles();
    Application.Run(new Marcianito());
  }
}