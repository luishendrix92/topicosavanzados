using System.Drawing;

namespace Pintadito {
  public static class State {
    /*
     * Global Application State variables
     *********************************************************************/
    public  static bool   IsDrawing      = false;
    public  static int    BrushRadius    = 20;
    private static Color  BrushColor     = Color.FromArgb(26, Color.Black);
    public  static Brush  AppBrush       = new SolidBrush(BrushColor);
    public  static Brush  EraseBrush     = new SolidBrush(Color.White);
    public  static string CurrentImg     = null;
    public  static string CurrentSticker = null;
    public  static int    Xcoord         = 0;
    public  static int    Ycoord         = 0;

    /*
     * Updates state variable with a new brush
     * using the current color in the state
     *********************************************/
    public static void ChangeOpacity(int opacity) {
      BrushColor = Color.FromArgb(
        opacity,
        BrushColor.R,
        BrushColor.G,
        BrushColor.B
      );

      AppBrush = new SolidBrush(BrushColor);
    }

    /*
     * Updates the state color
     ************************************************/
    public static void ChangeColor(Color color) {
      BrushColor = Color.FromArgb(BrushColor.A, color);

      AppBrush = new SolidBrush(BrushColor);
    }
  }
}
