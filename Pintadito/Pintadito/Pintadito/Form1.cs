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
      draw_area.MouseUp   += (sender, e) => IsDrawing = false;

      pencil_black.Click     += SetColor(Color.Black);
      pencil_blue.Click      += SetColor(Color.Blue);
      pencil_darkgreen.Click += SetColor(Color.DarkGreen);
      pencil_gold.Click      += SetColor(Color.Gold);
      pencil_green.Click     += SetColor(Color.LimeGreen);
      pencil_navy.Click      += SetColor(Color.Navy);
      pencil_orange.Click    += SetColor(Color.DarkOrange);
      pencil_pink.Click      += SetColor(Color.Pink);
      pencil_silver.Click    += SetColor(Color.Silver);
      pencil_sky.Click       += SetColor(Color.SkyBlue);
      pencil_violet.Click    += SetColor(Color.DarkViolet);
      pencil_white.Click     += SetColor(Color.White);
      pencil_yellow.Click    += SetColor(Color.Yellow);
      pencil_red.Click       += SetColor(Color.Red);

      btn_cool.Click   += SetSticker("emoji_cool.png");
      btn_crying.Click += SetSticker("emoji_crying.png");
      btn_fear.Click   += SetSticker("emoji_fear.png");
      btn_hearts.Click += SetSticker("emoji_hearts.png");
      btn_tears.Click  += SetSticker("emoji_tears.png");
      btn_wink.Click   += SetSticker("emoji_wink.png");

      btn_cars.Click      += SetImg("cars.png");
      btn_chick.Click     += SetImg("pollo.png");
      btn_heart.Click     += SetImg("tacos.png");
      btn_oldcar.Click    += SetImg("carro.png");
      btn_plant.Click     += SetImg("planta.png");
      btn_satellite.Click += SetImg("satelite.png");

      opacity_control.ValueChanged += (sender, e) =>
        ChangeOpacity((int) opacity_control.Value * 255 / 100);

      radius_control.ValueChanged += (sender, e) =>
        BrushRadius = (int) radius_control.Value;
    }

    /*
     * Updates state variable with sticker filename
     ************************************************/
    private EventHandler SetSticker(String sticker) =>
      (sender, e) => { CurrentSticker = sticker; };

    /*
     * Updates state variable with the color
     *******************************************/
    private EventHandler SetColor(Color color) =>
      (sender, e) => { ChangeColor(color); };

    /*
     * Draws a guide on top of the canvas
     **************************************************************/
    private EventHandler SetImg(string filename) => (sender, e) => {
      using (Graphics g = Graphics.FromImage(draw_area.Image)) {
        if (CurrentImg != filename) {
          g.FillRectangle(EraseBrush, 0, 0, 722, 523);
        }

        g.DrawImage(
          Image.FromFile(filename),
          new Rectangle(0, 0, 722, 523),
          new Rectangle(0, 0, 722, 523),
          GraphicsUnit.Pixel
        );
      }

      draw_area.Invalidate();
      CurrentImg = filename;
    };

    /*
     * Draw on screen using the state variables
     *****************************************************************/
    private void draw_area_MouseMove(object sender, MouseEventArgs e) {
      Xcoord = e.X; Ycoord = e.Y;

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

    /*
     * Clean the screen with a scrollbar
     *************************************************************/
    private void cleaner_Scroll(object sender, ScrollEventArgs e) {
      using (Graphics g = Graphics.FromImage(draw_area.Image)) {
        g.FillRectangle(EraseBrush, cleaner.Value, 0, 6, 523);
      }
      
      draw_area.Invalidate();
    }

    /*
     * Save image to hard drive
     ***********************************************************/
    private void save_img_btn_Click(object sender, EventArgs e) {
      SaveFileDialog sfd = new SaveFileDialog();

      sfd.Filter = "Png Image|*.png";

      if (sfd.ShowDialog() == DialogResult.OK) {
        draw_area.Image.Save(sfd.FileName, ImageFormat.Png);
      }
    }

    /*
     * Sticker Insertion
     ************************************************************/
    private void draw_area_Click(object sender, EventArgs e) {
      if (CurrentSticker != null) {
        var sticker = Image.FromFile(CurrentSticker);

        using (Graphics g = Graphics.FromImage(draw_area.Image)) {
          g.DrawImage(
            sticker,
            new Point(
              Xcoord - (sticker.Size.Width / 2),
              Ycoord - (sticker.Size.Height / 2)
            )
          );
        }

        draw_area.Invalidate();
      	// Comment line to allow multiple inserts
        CurrentSticker = null;
      }
    }
  }
}
