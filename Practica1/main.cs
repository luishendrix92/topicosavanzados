using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;

// Compilación en MONO Develop:
// -----> dmcs -out:p1.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs
// Compilación en CSC (.NET):
// -----> csc /out:binario.exe  *.cs

public partial class Ventana : Form {
  public Ventana() {
    PictureBox pic = new PictureBox();
    pic.Image    = Image.FromFile("marcianito.gif");
    pic.Size     = new Size(128, 190);
    pic.Location = new Point(336.5, 155);
    this.Controls.Add(pic);
    // ----------------------------------
    this.Text       = "Práctica 1: PictureBox";
    this.Size       = new Size(800, 500);
    this.KeyPreview = true;
    this.KeyDown  += new KeyEventHandler(Ventana_KeyDown);
  }
  
  // ===========================================================
  // MÉTODOS PARA MANEJAR EL MOVIMIENTO DEL PICTUREBOX
  // ===========================================================
  void Ventana_KeyDown(object sender, KeyEventArgs e) {
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
        if (coords.Y + SPEED <= 285) {
          pic.Location = Point.Add(coords, new Size(0, SPEED));
        }
        break;
      case Keys.Left:
        if (coords.X - SPEED >= 0) {
          pic.Location = Point.Add(coords, new Size(-SPEED, 0));
        }
        break;
      case Keys.Right:
        if (coords.X + SPEED <= 667) {
          pic.Location = Point.Add(coords, new Size(SPEED, 0));
        }
        break;
    }
  }
}

public class Principal {
  // ===========================================================
  // MÉTODO PRINCIPAL QUE SE EJECUTA AL CARGAR EL PROGRAMA
  // -----------------------------------------------------------
  // [STAThread] significa que se usará sólo un hilo para evitar
  // conflictos con Windows.Forms, no soporta el multi-threading
  // =========================================================== 
  [STAThread]
  public static void Main() {
    Application.EnableVisualStyles();
    Application.Run(new Ventana());
  }
}