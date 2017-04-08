using System.Drawing.Drawing2D;
using static Pintadito.State;
using System.Windows.Forms;
using System.Drawing;
using System;
using System.Drawing.Imaging;

namespace Pintadito {
  public partial class Form1 : Form {
    public Form1() {
      InitializeComponent();

      Bitmap initImg = new Bitmap(draw_area.Width, draw_area.Height);
      draw_area.Image = initImg;

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

      btn_cars.Click += SetImg("cars.png");
      btn_chick.Click += SetImg("pollo.png");
      btn_heart.Click += SetImg("tacos.png");
      btn_oldcar.Click += SetImg("carro.png");
      btn_plant.Click += SetImg("planta.png");
      btn_satellite.Click += SetImg("satelite.png");

      opacity_control.ValueChanged += (sender, e) =>
        ChangeOpacity((int) opacity_control.Value * 255 / 100);

      radius_control.ValueChanged += (sender, e) =>
        BrushRadius = (int) radius_control.Value;
    }

    private EventHandler SetColor(Color color) =>
      (sender, e) => { ChangeColor(color); };

    private EventHandler SetImg(string filename) =>
      (sender, e) => {
        if (filename == CurrentImg) {
          using (Graphics g = Graphics.FromImage(draw_area.Image)) {
            g.DrawImage(
              Image.FromFile(filename),
              new Rectangle(0, 0, 722, 523),
              new Rectangle(0, 0, 722, 523),
              GraphicsUnit.Pixel
            );

            g.SmoothingMode = SmoothingMode.AntiAlias;
          }
        } else {
          draw_area.Image = Image.FromFile(filename);
        }

        draw_area.Invalidate();
        CurrentImg = filename;
      };

    private void draw_area_MouseMove(object sender, MouseEventArgs e) {
      if (IsDrawing) {
        using (Graphics g = Graphics.FromImage(draw_area.Image)) {
          g.FillEllipse(
            AppBrush,
            e.X - (BrushRadius / 2),
            e.Y - (BrushRadius / 2),
            BrushRadius,
            BrushRadius
          );

          g.SmoothingMode = SmoothingMode.AntiAlias;
        }

        draw_area.Invalidate();
      }
    }

    private void cleaner_Scroll(object sender, ScrollEventArgs e) {
      using (Graphics g = Graphics.FromImage(draw_area.Image)) {
        g.FillRectangle(EraseBrush, cleaner.Value, 0, 6, 523);
      }
      
      draw_area.Invalidate();
    }

    private void button1_Click(object sender, EventArgs e) {
      draw_area.Image.Save(@"C:\Users\luish\Pictures\Pintadito\save.png", ImageFormat.Png);
    }
  }
}
