using System.Drawing;
using System;

namespace Pintadito {
  public static class State {
    public static bool IsDrawing = false;
    public static int BrushRadius = 20;
    private static Color BrushColor = Color.FromArgb(26, Color.Black);
    public static Brush AppBrush = new SolidBrush(BrushColor);
    public static Brush EraseBrush = new SolidBrush(Color.White);
    public static string CurrentImg = null;

    public static void ChangeOpacity(int opacity) {
      BrushColor = Color.FromArgb(
        opacity,
        BrushColor.R,
        BrushColor.G,
        BrushColor.B
      );

      AppBrush = new SolidBrush(BrushColor);
    }

    public static void ChangeColor(Color color) {
      BrushColor = Color.FromArgb(BrushColor.A, color);

      AppBrush = new SolidBrush(BrushColor);
    }
  }
}