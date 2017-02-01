using System.Windows.Forms;
using System.Drawing;
using System;

// Compilación en MONO Develop para los Linuxeros :'v
// mcs -out:p2.exe -r:System.Windows.Forms.dll -r:System.Drawing.dll *.cs

// Compilación en CSC (.NET) para Windows:
// csc /out:p2.exe  *.cs

public static class Practica2 {
  [STAThread]
  public static void Main(string[] args) {
    Application.EnableVisualStyles();
    Application.Run(new Window());
  }
}
