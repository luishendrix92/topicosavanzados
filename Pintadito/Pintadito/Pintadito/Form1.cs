using System.Drawing.Drawing2D;
using static Pintadito.State;
using System.Windows.Forms;
using System.Drawing;
using System;

namespace Pintadito {
  public partial class Form1 : Form {
    Graphics canvas;

    public Form1() {
      InitializeComponent();

      canvas = draw_area.CreateGraphics();
      canvas.SmoothingMode = SmoothingMode.AntiAlias;

      draw_area.BackColor = Color.FromArgb(100, 0, 0, 0);
      draw_area.MouseDown += (sender, e) => IsDrawing = true;
      draw_area.MouseUp += (sender, e) => IsDrawing = false;

      pencil_black.Click += SetColor(Color.Black);
      pencil_blue.Click += SetColor(Color.Blue);
      pencil_darkgreen.Click += SetColor(Color.DarkGreen);
      pencil_gold.Click += SetColor(Color.Gold);
      pencil_green.Click += SetColor(Color.LimeGreen);
      pencil_navy.Click += SetColor(Color.Navy);
      pencil_orange.Click += SetColor(Color.DarkOrange);
      pencil_pink.Click += SetColor(Color.Pink);
      pencil_silver.Click += SetColor(Color.Silver);
      pencil_sky.Click += SetColor(Color.SkyBlue);
      pencil_violet.Click += SetColor(Color.DarkViolet);
      pencil_white.Click += SetColor(Color.White);
      pencil_yellow.Click += SetColor(Color.Yellow);
      pencil_red.Click += SetColor(Color.Red);

      btn_cars.Click += SetImg("bg_cars.jpg");
      btn_frog.Click += SetImg("bg_rana.gif");
      btn_homer.Click += SetImg("bg_homer.jpg");
      btn_minions.Click += SetImg("bg_minions.jpg");
      btn_potter.Click += SetImg("bg_potter.jpg");
      btn_tree.Click += SetImg("bg_arbol.jpg");
      btn_whale.Click += SetImg("bg_ballena.jpg");

      opacity_control.ValueChanged += (sender, e) =>
        ChangeOpacity((int) opacity_control.Value * 255 / 100);

      radius_control.ValueChanged += (sender, e) =>
        BrushRadius = (int) radius_control.Value;
    }

    private EventHandler SetColor(Color color) =>
      (sender, e) => { ChangeColor(color); };

    private EventHandler SetImg(string filename) =>
      (sender, e) => {
        draw_area.BackgroundImage = Image.FromFile(filename);
      };

    private void draw_area_MouseMove(object sender, MouseEventArgs e) {
      if (IsDrawing) {
        canvas.FillEllipse(
          AppBrush,
          e.X - (BrushRadius / 2),
          e.Y - (BrushRadius / 2),
          BrushRadius,
          BrushRadius
        );

        //Image img = draw_area.BackgroundImage;
        //Image img = Image.FromFile(@"bg_minions.jpg");
        
        /*canvas.DrawImage(
          img,
          new RectangleF(200F, 0F, 722F - 200F, 523F),
          new RectangleF(200F, 0F, 722F - 200F, 523F),
          GraphicsUnit.Pixel
        );*/
      }
    }

    private void cleaner_Scroll(object sender, ScrollEventArgs e) {
      canvas.FillRectangle(EraseBrush, 0, 0, cleaner.Value, 523);
    }
  }
}
